/* eslint-disable quote-props */
import MDCDialogFoundation from '@material/dialog/foundation';
import * as util from '@material/dialog/util';
import { mdcButton } from '@mcwv/button';
import { VMAUniqueIdMixin } from '@mcwv/base';
import { closest, matches } from '@material/dom/ponyfill';
import createFocusTrap from 'focus-trap';

import { cssClasses, LAYOUT_EVENTS } from './constants';

export default {
  name: 'mdc-dialog',
  components: {
    mdcButton: mdcButton,
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change',
  },
  props: {
    autoStackButtons: Boolean,
    escapeKeyAction: String,
    scrollable: Boolean,
    open: Boolean,
    role: String,
    scrimClickAction: { type: String, default: 'close' },
    tag: { type: String, default: 'div' },
    id: { type: String, default: 'mdc-dialog' },
  },
  data() {
    return {
      labelledBy: null,
      describedBy: null,
      classes: { 'mdc-dialog': 1 },
      styles: {},
    };
  },
  watch: {
    open: 'onOpen_',
  },
  render(createElement) {
    const mdt =
      (this.$scopedSlots.default && this.$scopedSlots.default()) || [];

    mdt.forEach(
      ({ tag: childTag, data: { props, class: classes, attrs } = {} }, i) => {
        if (childTag === 'template' && props.tag) {
          const kind = props.tag.split('-').pop();

          mdt[i] = createElement(
            props.tag,
            {
              class: classes,
              attrs,
              scopedSlots: {
                [kind]: ({ id, content }) => {
                  if (kind === 'title' || kind === 'content') {
                    const cdata = content.data || (content.data = {});
                    const cattrs = cdata.attrs || (cdata.attrs = {});
                    cattrs.id = id || `${this.id}-${kind}`;
                    this[kind === 'title' ? 'labelledBy' : 'describedBy'] =
                      cattrs.id;
                  }
                  if (kind === 'content') {
                    const cdata = content.data || (content.data = {});
                    cdata.ref = 'contentEl';
                  }
                  return content;
                },
              },
            },
            mdt[i].children,
          );
        }
      },
    );

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: {
          id: this.id,
          'aria-modal': 'true',
          'aria-labelledby': this.labelledBy,
          'aria-describedby': this.describedBy,
          role: 'alertdialog',
        },
        ref: 'root',
        on: {
          click: evt => this.foundation.handleInteraction(evt),
          keydown: evt => this.foundation.handleInteraction(evt),
        },
      },
      [
        createElement(
          'div',
          {
            class: cssClasses.CONTAINER,
            ref: 'container',
          },
          [
            createElement(
              'div',
              { class: cssClasses.SURFACE },
              this.$scopedSlots.default && this.$scopedSlots.default(),
            ),
          ],
        ),

        createElement('div', { class: 'mdc-dialog__scrim' }),
      ],
    );
  },
  mounted() {
    const strings = MDCDialogFoundation.strings;

    const { open, autoStackButtons, escapeKeyAction, scrimClickAction } = this;

    this.buttons_ = [].slice.call(this.$el.querySelectorAll(cssClasses.BUTTON));
    this.defaultButton = this.$el.querySelector(
      `.${cssClasses.DEFAULT_BUTTON}`,
    );

    const adapter = {
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetMatches: (target, selector) => matches(target, selector),
      trapFocus: () => this.focusTrap && this.focusTrap.activate(),
      releaseFocus: () => this.focusTrap && this.focusTrap.deactivate(),
      isContentScrollable: () =>
        !!this.$refs.contentEl && util.isScrollable(this.$refs.contentEl),
      areButtonsStacked: () => util.areTopsMisaligned(this.buttons_),

      getActionFromEvent: event => {
        const elem = closest(event.target, `[${strings.ACTION_ATTRIBUTE}]`);
        return elem && elem.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: () => {
        const defaultButton = this.defaultButton;
        if (defaultButton) {
          defaultButton.click();
        }
      },
      reverseButtons: () => {
        const buttons = this.buttons_;
        return (
          buttons &&
          buttons
            .reverse()
            .forEach(
              button =>
                button.parentElement &&
                button.parentElement.appendChild(button),
            )
        );
      },
      notifyOpening: () => {
        this.$emit(strings.OPENING_EVENT, {});
        LAYOUT_EVENTS.forEach(evt =>
          window.addEventListener(evt, this.handleLayout),
        );
        document.addEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyOpened: () => this.$emit(strings.OPENED_EVENT, {}),
      notifyClosing: action => {
        this.$emit('change', false);
        // console.log(action)
        this.$emit(strings.CLOSING_EVENT, action ? { action } : {});
        LAYOUT_EVENTS.forEach(evt =>
          window.removeEventListener(evt, this.handleLayout),
        );
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
      },
      notifyClosed: action => {
        this.$emit(strings.CLOSED_EVENT, action ? { action } : {});
      },
    };

    this.foundation = new MDCDialogFoundation(adapter);

    this.foundation.init();

    if (!autoStackButtons) {
      this.foundation.setAutoStackButtons(autoStackButtons);
    }

    if (typeof escapeKeyAction === 'string') {
      // set even if empty string
      this.foundation.setEscapeKeyAction(escapeKeyAction);
    }

    if (typeof scrimClickAction === 'string') {
      // set even if empty string
      this.foundation.setScrimClickAction(scrimClickAction);
    }
    this.onOpen_(open);
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    handleLayout() {
      this.foundation.layout();
    },
    handleDocumentKeyDown(e) {
      this.foundation.handleDocumentKeydown(e);
    },
    onOpen_(value) {
      if (value) {
        if (this.$refs.container) {
          this.focusTrap = util.createFocusTrapInstance(
            this.$el,
            createFocusTrap,
          );
        }
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },

    onCancel() {
      if (this.$listeners['validateCancel']) {
        this.$emit('validateCancel', {
          cancel: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.cancel(notify);
          },
        });
      } else {
        this.foundation.cancel(true);
      }
    },
    onAccept() {
      if (this.$listeners['validate']) {
        this.$emit('validate', {
          accept: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false);
            }
            this.foundation.accept(notify);
          },
        });
      } else {
        this.foundation.accept(true);
      }
    },
    // show() {
    //   this.foundation.open();
    // },
    // close() {
    //   this.foundation.close();
    // },
  },
};
