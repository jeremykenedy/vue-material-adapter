(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[9325],{9325:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var e=t(5166),l=(0,e.Wm)("h2",null,"Usage",-1),n=(0,e.Wm)("pre",null,[(0,e.Wm)("code",{"v-pre":"",class:"language-html"},[(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"active-tab-index"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"1"'),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"@update:modelValue"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"onSelected"'),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"v-for"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"item in filteredItems"'),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},":key"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"item.label"'),(0,e.Uk)(">")]),(0,e.Uk)("{{ item }}"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(">")]),(0,e.Uk)("\n")])],-1),c=(0,e.Wm)("pre",null,[(0,e.Wm)("code",{"v-pre":"",class:"language-javascript"},[(0,e.Wm)("span",{class:"hljs-keyword"},"var"),(0,e.Uk)(" vm = "),(0,e.Wm)("span",{class:"hljs-keyword"},"new"),(0,e.Uk)(" Vue({\n  data() {\n    "),(0,e.Wm)("span",{class:"hljs-keyword"},"const"),(0,e.Uk)(" items = [\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item one'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item two'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item three'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item four'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item five'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item six'"),(0,e.Uk)(",\n      "),(0,e.Wm)("span",{class:"hljs-string"},"'item seven'"),(0,e.Uk)(",\n    ];\n    "),(0,e.Wm)("span",{class:"hljs-keyword"},"return"),(0,e.Uk)(" {\n      "),(0,e.Wm)("span",{class:"hljs-attr"},"selectedItem"),(0,e.Uk)(": items["),(0,e.Wm)("span",{class:"hljs-number"},"0"),(0,e.Uk)("],\n      items,\n    };\n  },\n  "),(0,e.Wm)("span",{class:"hljs-attr"},"computed"),(0,e.Uk)(": {\n    filteredItems() {\n      "),(0,e.Wm)("span",{class:"hljs-keyword"},"return"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-keyword"},"this"),(0,e.Uk)(".items.slice("),(0,e.Wm)("span",{class:"hljs-number"},"0"),(0,e.Uk)(", "),(0,e.Wm)("span",{class:"hljs-number"},"3"),(0,e.Uk)(");\n    },\n  },\n  "),(0,e.Wm)("span",{class:"hljs-attr"},"methods"),(0,e.Uk)(": {\n    onSelected(idx) {\n      "),(0,e.Wm)("span",{class:"hljs-keyword"},"this"),(0,e.Uk)(".selectedItem = "),(0,e.Wm)("span",{class:"hljs-keyword"},"this"),(0,e.Uk)(".items[idx];\n    },\n  },\n  },\n});\n")])],-1),m=(0,e.uE)("<h3><code>mcw-tab-bar</code></h3><h4>Props</h4><p><code>mcw-tab</code> behaves as a navigational link. Add an <code>href</code> for simple link behavior or the <code>to</code> property for router-link behavior. <code>mcw-tab</code> dispatches <code>@click</code> event.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>activeTabIndex</code></td><td>Number</td><td></td><td>set the tab active</td></tr><tr><td><code>fade</code></td><td>Boolean</td><td>false</td><td>Use fade transition, else slide</td></tr><tr><td><code>stacked</code></td><td>Boolean</td><td>false</td><td>Tab icon and label should flow vertically instead of horizontally.</td></tr><tr><td><code>spanContent</code></td><td>Boolean</td><td>false</td><td>Tab indicator will span only the content of the tab</td></tr></tbody></table><h4>Events</h4><table><thead><tr><th>props</th><th>args</th><th>Description</th></tr></thead><tbody><tr><td><code>mdc-tab-bar:activated</code></td><td>number</td><td>Native event on index update.</td></tr><tr><td><code>@update:modelValue</code></td><td>number</td><td>On active index update.</td></tr></tbody></table><h4>Tabs with icons</h4>",7),h=(0,e.Wm)("pre",null,[(0,e.Wm)("code",{"v-pre":"",class:"language-html"},[(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"icon"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"phone"'),(0,e.Uk)(">")]),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"icon"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},"\"{className: 'fa fa-favorite'}\""),(0,e.Uk)(">")]),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"svg"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"slot"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"icon"'),(0,e.Uk)(">")]),(0,e.Uk)("..."),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"svg"),(0,e.Uk)(">")]),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(">")]),(0,e.Uk)("\n")])],-1),d=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Uk)("use "),(0,e.Wm)("code",null,"icon"),(0,e.Uk)(" slot for custom icon markup")])],-1),o=(0,e.Wm)("h4",null,"Tabs with icons and text",-1),r=(0,e.Wm)("pre",null,[(0,e.Wm)("code",{"v-pre":"",class:"language-html"},[(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"icon"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"phone"'),(0,e.Uk)(">")]),(0,e.Uk)("Recents"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"icon"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"favorite"'),(0,e.Uk)(">")]),(0,e.Uk)("Favorites"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("<"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(),(0,e.Wm)("span",{class:"hljs-attr"},"icon"),(0,e.Uk)("="),(0,e.Wm)("span",{class:"hljs-string"},'"personal_pin"'),(0,e.Uk)(">")]),(0,e.Uk)("Nearby"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab"),(0,e.Uk)(">")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"hljs-tag"},[(0,e.Uk)("</"),(0,e.Wm)("span",{class:"hljs-name"},"mcw-tab-bar"),(0,e.Uk)(">")]),(0,e.Uk)("\n")])],-1),p=(0,e.uE)('<h3><code>mcw-tab</code></h3><h4>Props</h4><p><code>mcw-tab</code> behaves as a navigational link. Add an <code>href</code> for simple link behavior or the <code>to</code> property for router-link behavior. <code>mcw-tab</code> dispatches <code>@click</code> event.</p><table><thead><tr><th>prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>active</code></td><td>Boolean</td><td>false</td><td>set the tab active</td></tr></tbody></table><blockquote><p>Supports Vue-Router props</p></blockquote><h3>reference</h3><ul><li><a href="https://material.io/components/web/catalog/tabs">https://material.io/components/web/catalog/tabs</a></li></ul>',7);var k={render:function(s,a){return(0,e.wg)(),(0,e.j4)("article",null,[l,n,c,m,h,d,o,r,p])}}}}]);
//# sourceMappingURL=9325.f70c99435278e573f93a.js.map