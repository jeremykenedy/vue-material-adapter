import icButton from './assets/ic_button_24px.svg';
import {
  default as icCard,
  default as icChips,
} from './assets/ic_card_24px.svg';
import icComponent from './assets/ic_component_24px.svg';
import icDialog from './assets/ic_dialog_24px.svg';
import icList from './assets/ic_list_24px.svg';
import icMenu from './assets/ic_menu_24px.svg';
import icProgressActivity from './assets/ic_progress_activity.svg';
import icRadioButton from './assets/ic_radio_button_24px.svg';
import icResponsiveLayout from './assets/ic_responsive_layout_24px.svg';
import icSelectionControl from './assets/ic_selection_control_24px.svg';
import icSideNavigation from './assets/ic_side_navigation_24px.svg';
import icSlider from './assets/ic_slider_24px.svg';
import icSwitch from './assets/ic_switch_24px.svg';
import icTabs from './assets/ic_tabs_24px.svg';
import icTextField from './assets/ic_text_field_24px.svg';
import icToast from './assets/ic_toast_24px.svg';
import icTopAppBar from './assets/ic_toolbar_24px.svg';
import { capitalize } from './utils';

function link(id, icon, name, title) {
  name = name || capitalize(id);
  title = title || name;
  return {
    id,
    title,
    name,
    icon,
    to: { name: 'component', params: { id } },
  };
}

export default [
  link('banner', icComponent),
  link('button', icButton),
  link('card', icCard),
  link('checkbox', icSelectionControl),
  link('chips', icChips),
  link('circular-progress', icProgressActivity),

  link('data-table', icComponent),
  link('dialog', icDialog),
  link('drawer', icSideNavigation),
  link('fab', icButton, 'FAB', 'Floating Action Button'),
  link('icon-button', icComponent),
  link('layout-grid', icResponsiveLayout, 'Grid Layout'),
  link('linear-progress', icProgressActivity),
  link('list', icList),
  link('material-icon', icComponent),
  link('menu', icMenu),
  link('radio', icRadioButton),
  link('segmented-button', icComponent),
  link('select', icMenu),
  link('slider', icSlider),
  link('snackbar', icToast),
  link('switch', icSwitch),
  link('tabs', icTabs),
  link('textfield', icTextField),
  link('tooltip', icComponent),
  link('top-app-bar', icTopAppBar),
];
