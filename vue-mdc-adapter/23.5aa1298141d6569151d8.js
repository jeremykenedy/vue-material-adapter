(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{199:function(e,t,s){},215:function(e,t,s){"use strict";var l=s(199);s.n(l).a},231:function(e,t,s){"use strict";s.r(t);var l={data:()=>({selectedType:void 0,selectedValue:void 0,food:{Vegetables:["Spinach","Carrots","Onions","Broccoli"],Meat:["Eggs","Chicken","Fish","Turkey","Pork","Beef"],Fruits:["Apples","Oranges","Bananas","Berries","Lemons"]}}),computed:{types(){return Object.keys(this.food)},options(){return this.selectedType?this.food[this.selectedType]:[]}}},o=(s(215),s(7)),c=Object(o.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mdc-demo"},[s("div",{staticClass:"mdc-demo mdc-demo--container"},[s("div",[s("mdc-select",{attrs:{label:"Food",helptext:"Pick a food group"},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.types,function(t){return s("option",{key:t,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}),0),e._v(" "),s("br"),e._v(" "),e.selectedType?s("mdc-select",{attrs:{outlined:"",label:"Kind"},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}},e._l(e.options,function(t){return s("option",{key:t,domProps:{value:t.toLowerCase()}},[e._v(e._s(t))])}),0):e._e()],1)]),e._v(" "),e.selectedType?s("mdc-caption",{attrs:{tag:"p"}},[e._v("Selected Type: "+e._s(e.selectedType))]):e._e(),e._v(" "),e.selectedValue?s("mdc-caption",{attrs:{tag:"p"}},[e._v("Selected Value: "+e._s(e.selectedValue))]):e._e()],1)},[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=23.5aa1298141d6569151d8.js.map