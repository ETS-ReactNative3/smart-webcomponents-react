
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}({23:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return r}));class o{static get moduleName(){return"BindingModule"}getBindings(e,t){const n=this;let o=0,r={},i=(e=>{if(e instanceof HTMLElement)return n.parseAttributes(e);{let t=n.parseProperty(e.data?e.data.trim():null,"textContent",e);if(t)return n.ownerElement&&e.parentNode===n.ownerElement.$.content&&(t.value=""!==n.ownerElement.$.html?n.ownerElement.$.html:void 0,n.ownerElement.innerHTML=""),{textContent:t}}})(e);i&&(r.data=i),t||(r.mapping=[],t=r),e.getAttribute&&(r.nodeId=e.getAttribute("smart-id"),t&&i&&(t.mapping[r.nodeId]=i)),r.node=e,e.firstChild&&(r.children={});for(let i=e.firstChild;i;i=i.nextSibling)r.children[o++]=n.getBindings(i,t);return r}_addRemovePropertyBinding(e,t,n,o,r){if(!e||!t||!n)return;const i=this,a=i.ownerElement.bindings,d=n.getAttribute("smart-id"),l=e.indexOf("{{")>=0;let s=!1;(e=e.replace("{{","").replace("}}","").replace("[[","").replace("]]","")).indexOf("!")>=0&&(e=e.replace("!",""),s=!0);const c=i.ownerElement._properties[e],u={name:e,reflectToAttribute:c.reflectToAttribute,twoWay:l,type:c.type,not:s};if(r&&!o){const n={},o={name:e,targetPropertyName:t,reflectToAttribute:c.reflectToAttribute,twoWay:l,type:c.type,not:s};n[e]=o,a.mapping[d]=n}const p=function(e){for(let r in e){const a=e[r];if(a.nodeId===d){a.data||(a.data={}),o?(a.data[t]=null,delete a.data[t]):a.data[t]=u;break}if(a.children)p(a.children);else if(a.node&&a.node.children&&a.node===n.parentElement){const e=a.node;if(!e.firstChild)continue;a.children={};let t=0;for(let n=e.firstChild;n;n=n.nextSibling)a.children[t++]=i.getBindings(n);p(a.children)}}};p(a.children),o?delete i.ownerElement.boundProperties[e]:i.ownerElement.boundProperties[e]=!0,i.updateBoundNodes(e)}addPropertyBinding(e,t,n,o){this._addRemovePropertyBinding(e,t,n,!1,o)}removePropertyBinding(e,t,n,o){this._addRemovePropertyBinding(e,t,n,!0,o)}parseAttributes(e){const t=this;let n=void 0;for(let r=0;r<e.attributes.length;r++){const i=e.attributes[r],a=i.name,d=i.value;o.cache["toCamelCase"+a]||(o.cache["toCamelCase"+a]=window.Smart.Utilities.Core.toCamelCase(a));const l=o.cache["toCamelCase"+a];if(a.indexOf("(")>=0){let o=a.substring(1,a.length-1);if(t.ownerElement&&!t.ownerElement.dataContext){t.ownerElement.templateListeners[e.getAttribute("smart-id")+"."+o]=d,e.removeAttribute(a);continue}{n||(n={});const e=d.substring(0,d.indexOf("("));n[l]={isEvent:!0,name:o,value:e};continue}}let s=t.parseProperty(d,a,e);s&&(n||(n={}),n[l]=s)}return n}parseProperty(e,t){if(!e||!e.length)return;const n=this;let o,r=e.length,i=0,a=0,d=0,l=!0;for(;a<r;){i=e.indexOf("{{",a);let t=e.indexOf("[[",a),n="}}";if(t>=0&&(i<0||t<i)&&(i=t,l=!1,n="]]"),d=i<0?-1:e.indexOf(n,i+2),d<0)return;o=o||{};let r=e.slice(i+2,d).trim();o.name=r,a=d+2}const s=o.name,c=n.ownerElement?n.ownerElement._properties[s]:null;if(o.twoWay=l,o.ready=!1,n.ownerElement&&(s.indexOf("::")>=0?n.ownerElement.boundProperties[s.substring(0,s.indexOf("::"))]=!0:n.ownerElement.boundProperties[s]=!0),c)o.type=c.type,o.reflectToAttribute=c.reflectToAttribute;else{["checked","selected","async","autofocus","autoplay","controls","defer","disabled","hidden","ismap","loop","multiple","open","readonly","required","scoped"].indexOf(t)>=0?o.type="boolean":o.type="string",o.reflectToAttribute=!0}return o}updateTextNodes(){this.updateTextNode(this.ownerElement.shadowRoot||this.ownerElement,this.ownerElement.bindings,this.ownerElement)}updateTextNode(e,t,n){const o=this;if(!t)return;let r=0;for(let i=e.firstChild;i&&t.children;i=i.nextSibling)o.updateTextNode(i,t.children[r++],n);if(t&&t.data)for(let e in t.data){const o=t.data[e],r=o.name;"textContent"===e&&o.twoWay&&!o.updating&&void 0!==o.value&&(n[r]=o.value)}}updateBoundProperty(e,t){if(t.updating)return;const n=this.ownerElement;t.updating=!0,n[e]=t.value,t.updating=!1}updateBoundNodes(e){const t=this;if(t.updateBoundNode(t.ownerElement.shadowRoot||t.ownerElement,t.ownerElement.bindings,t.ownerElement,e),t.ownerElement.detachedChildren.length>0)for(let n=0;n<t.ownerElement.detachedChildren.length;n++){const o=t.ownerElement.detachedChildren[n],r=o.getAttribute("smart-id"),i=function(e){if(e.nodeId===r)return e;for(let t in e.children){const n=e.children[t];if((n.getAttribute?n.getAttribute("smart-id"):"")===r)return e;if(n.children){const e=i(n);if(e)return e}}return null},a=i(t.ownerElement.bindings);if(a)t.updateBoundNode(o,a,t.ownerElement,e,!0);else if(o.getAttribute&&t.ownerElement.bindings.mapping){const n=t.ownerElement,o=t.ownerElement.bindings;if(o)for(let r in o.mapping){const i=n.querySelector('[smart-id="'+r+'"]');if(i){const a=o.mapping[r];t.updateBoundData(i,a,n,e)}}}}}updateBoundMappedNodes(){const e=this,t=e.ownerElement.bindings,n=e.ownerElement;if(t.mapping)for(let o in t.mapping){let r=n.querySelector('[smart-id="'+o+'"]');if(n.shadowRoot&&(r=n.querySelector('[id="'+o+'"]'),r||(r=n.shadowRoot.querySelector('[id="'+o+'"]')||n.shadowRoot.querySelector('[smart-id="'+o+'"]'))),r){const i=t.mapping[o];e.updateBoundData(r,i,n)}else if(n.getAttribute("aria-controls")){let i=document.getElementById(n.getAttribute("aria-controls"));if(!i&&n.shadowRoot&&(i=n.shadowRoot.getElementById(n.getAttribute("aria-controls"))),r=i.querySelector('[smart-id="'+o+'"]'),r){const i=t.mapping[o];e.updateBoundData(r,i,n)}}}}updateBoundNode(e,t,n,o,r){const i=this;if(!t)return;let a=0;if(r){if(r&&!t.data)for(let d=e.firstChild;d&&t.children;d=d.nextSibling)if(d.getAttribute){const e=d.getAttribute("smart-id"),r=function(){for(let n in t.children)if(t.children[n].nodeId===e)return t.children[n]}();i.updateBoundNode(d,r,n,o),a++}else i.updateBoundNode(d,t.children[a++],n,o,r)}else for(let r=e.firstChild;r&&t.children;r=r.nextSibling)if(r.getAttribute){const e=r.getAttribute("smart-id"),d=function(){for(let n in t.children)if(t.children[n].nodeId===e)return t.children[n]}();i.updateBoundNode(r,d,n,o),a++}else i.updateBoundNode(r,t.children[a++],n,o);if(!t||!t.data)return;const d=t.data;i.updateBoundData(e,d,n,o)}updateBoundData(e,t,n,r){const i=this;for(let a in t){const d=t[a];let l=d.name;if(!d.updating&&(l.indexOf("::")>=0&&(l=l.substring(0,l.indexOf("::"))),void 0===r||r===l)){if(l.indexOf("(")>=0){let e=l.substring(l.indexOf("("));const t=l.substring(0,l.indexOf("("));if(e=e.substring(1,e.length-1),e=e.replace(/ /gi,""),e=e.split(","),e.length>0&&""!==e[0]){let o=[];for(let t=0;t<e.length;t++)o.push(n[e[t]]);d.value=n[t].apply(n,o)}else d.value=n[t]();d.type=typeof d.value}else d.value=n[l];if("innerHTML"===l?e[a].toString().trim()!==n[l].toString().trim()&&(d.ready||n._properties[l].defaultValue!==d.value)&&(e[a]=d.value.toString().trim()):d.not?(e[a]=!d.value,d.targetPropertyName&&(e[d.targetPropertyName]=!d.value)):(e[a]=d.value,d.targetPropertyName&&(e[d.targetPropertyName]=d.value)),e.$&&e.$.isNativeElement){o.cache["toDash"+a]||(o.cache["toDash"+a]=window.Smart.Utilities.Core.toDash(a));const t=o.cache["toDash"+a],n=e.$.getAttributeValue(t,d.type);!d.reflectToAttribute||n===d.value&&d.ready||e.$.setAttributeValue(t,d.value,d.type),d.reflectToAttribute||e.$.setAttributeValue(t,null,d.type)}if(!d.ready){if(e.$&&e.$.isCustomElement){o.cache["toDash"+a]||(o.cache["toDash"+a]=window.Smart.Utilities.Core.toDash(a));const t=o.cache["toDash"+a];e._properties||(e._beforeCreatedProperties=e._properties=e.propertyByAttributeName=[]),e._properties[a]||(e._properties[a]={attributeName:t},e._beforeCreatedProperties&&(e._beforeCreatedProperties[a]=e._properties[a]),e.propertyByAttributeName[t]=e._properties[a]);const n=e._properties[a];n.isUpdating=!0,d.reflectToAttribute&&(d.not?e.$.setAttributeValue(n.attributeName,!d.value,d.type):e.$.setAttributeValue(n.attributeName,d.value,d.type)),d.reflectToAttribute||e.$.setAttributeValue(n.attributeName,null,d.type),n.isUpdating=!1}if(d.twoWay){const t=function(t){if(d.value=t,e.$&&e.$.isNativeElement){o.cache["toDash"+a]||(o.cache["toDash"+a]=window.Smart.Utilities.Core.toDash(a));const t=o.cache["toDash"+a],n=e.$.getAttributeValue(t,d.type);d.reflectToAttribute&&n!==d.value&&e.$.setAttributeValue(t,d.value,d.type),d.reflectToAttribute||e.$.setAttributeValue(t,null,d.type)}};if(d.name.indexOf("::")>=0){const n=d.name.indexOf("::"),o=d.name.substring(n+2);i.ownerElement["$"+e.getAttribute("smart-id")].listen(o,(function(){t(e[a]);const n=d.name.substring(0,d.name.indexOf("::"));i.updateBoundProperty(n,d)}))}if(e.$&&e.$.isCustomElement){e._properties[a]&&(e._properties[a].notify=!0),o.cache["toDash"+a]||(o.cache["toDash"+a]=window.Smart.Utilities.Core.toDash(a));const n=o.cache["toDash"+a];i.ownerElement["$"+e.getAttribute("smart-id")].listen(n+"-changed",(function(e){let n=e.detail;t(n.value);const o=i.ownerElement.context;e.context!==document&&(i.ownerElement.context=i.ownerElement),i.updateBoundProperty(d.name,d),i.ownerElement.context=o}))}}}d.ready=!0}}}static clearCache(){this.cache={}}}o.cache={};class r{constructor(e){const t=this;t._id=e.id,e.id?t._appRoot=document.getElementById(t._id):t._id=window.Smart.Utilities.Core.createGUID(),e.selector&&(t._id=window.Smart.Utilities.Core.createGUID(),t._appRoot=document.querySelector(e.selector)),t._appRoot||(t._appRoot=document.body),t._appRoot.classList.add("smart-visibility-hidden");const n={};if(e.render){const t=e.render(),o=e.components;(function(){const r=document.createDocumentFragment(),i=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),a=document.createElementNS("http://www.w3.org/1999/xhtml","body"),d=document.createElement("div");i.documentElement.appendChild(a),a.appendChild(d),d.innerHTML=t;for(let e=0;e<o.length;e++){const t=o[e],r=t.name,a=window.Smart.Utilities.Core.toDash(r),l=i.querySelectorAll(r);t.tagName=a;for(let e=0;e<l.length;e++){const t=l[e],o=t.getAttribute("id")||window.Smart.Utilities.Core.createGUID(),i=document.createElement("div");i.id=o,d.insertBefore(i,t),n["#"+o]={name:r,properties:[],rendered:!1},t.parentNode.removeChild(t)}}r.appendChild(d);const l=document.querySelector(e.selector);l&&l.appendChild(r)})()}t._template=e.template||{},t._data=e.data||{},t._components=n;const o=function(){t._addAttributeBindings(),t._renderForBindings(),t._addModelBindings(),t._observeData(),t.render(),t._appRoot.classList.remove("smart-visibility-hidden")};"complete"===document.readyState?o():window.addEventListener("load",o)}_addAttributeBindings(e,t){const n=this,r=new o,i=e?r.getBindings(e):r.getBindings(n._appRoot);t||(t="");const a=function(e){const o=function(e){if(e.data){let o=e.node.id;o||(e.node.id=o="id"+Math.floor(65536*(1+Math.random())).toString(16).substring(1));for(let r in e.data){const i=e.data[r];if("textContent"===r&&(e.node.parentNode.id?o=e.node.parentNode.id:(e.node.id="",e.node.parentNode.id=o)),i.isEvent){const e={};e[i.name]=i.value,n._addListenerBinding(o,e)}else{const e={};e[r]=t+i.name,n._addTemplateBinding(o,e)}}}};o(e);for(let t in e.children){const n=e.children[t];n.node&&n.node.getAttribute&&n.node.getAttribute("smart-for")&&null===n.node.getAttribute("smart-for-rendered")||(o(n),n.children&&a(n))}};a(i)}get template(){return this._template}set template(e){this._template=e,this.render()}get id(){return this._id}set id(e){this._id=e}get jsonData(){return this.toJSON()}get formData(){const e=new FormData,t=this.toJSON();if(!t)return e;const n=function(t,o){for(let r in t){const i=t[r];window.Smart.Utilities.Types.isFunction(i)||("object"!=typeof i||Array.isArray(i)||n(i,r),("object"!=typeof i||Array.isArray(i))&&(""===o?e.append(r,i):e.append(o+"."+r,i)))}};return n(t,""),e}toJSON(){const e=function(t,n){for(let o in t){if(o.startsWith("_")||"notifyFn"===o||"canNotify"===o||"name"===o)continue;if("propertyName"===o||"toString"===o||"propertyIsEnumerable"===o||"valueOf"===o||"toLocaleString"===o)continue;if("hasOwnProperty"===o||"isPrototypeOf"===o)continue;const r=t[o];if("observableArray"!==r.name)if("observable"!==r.name)if("object"!=typeof r||window.Smart.Utilities.Types.isFunction(r))n[o]=r;else{const t=e(r,{},o);n[o]=t}else{const t={};for(let n in r)if(!n.startsWith("_")&&"propertyIsEnumerable"!==n&&"notifyFn"!==n&&"canNotify"!==n&&"name"!==n&&!n.startsWith("_")&&"notifyFn"!==n&&"canNotify"!==n&&"name"!==n&&"propertyName"!==n&&"toString"!==n&&"valueOf"!==n&&"toLocaleString"!==n&&"hasOwnProperty"!==n&&"isPrototypeOf"!==n)if("object"!=typeof r||"object"!=typeof r[n]||window.Smart.Utilities.Types.isFunction(r))t[n]=r[n];else{const i=e(r[n],{},o+"."+n);t[n]=i}n[o]=t}else n[o]=r.toArray()}return n};return e(this._data,{},"")}get data(){const e=this;return e._data||(e._data={}),e._data}set data(e){this._data=e,this._observeData(),this.render()}_addTemplateBinding(e,t){const n=this;n.template["#"+e]?n.template["#"+e].bind?Object.assign(n.template["#"+e].bind,t):n.template["#"+e].bind=t:n.template["#"+e]={bind:t}}_addListenerBinding(e,t){const n=this;n.template["#"+e]?n.template["#"+e].listeners?Object.assign(n.template["#"+e].listeners,t):n.template["#"+e].listeners=t:n.template["#"+e]={listeners:t}}_updateDataFromBooleanElement(e,t){const n=this,o=t.checked,r=n._data[o];if(e.value&&"on"!==e.value)if(Array.isArray(r)||"observableArray"===r.name)if(e.checked)r.push(e.value);else{const t=r.indexOf(e.value);t>=0&&r.splice(t,1)}else"radio"!==e.type?e.checked?n._data[o]=e.value:n._data[o]="":e.checked&&(n._data[o]=e.value);else n._data[o]=e.checked}_updateDataFromNativeElement(e,t){const n=this;if("SELECT"===e.tagName&&e.addEventListener("change",(function(){const o=t.value;let r=n._data[o];if(e.__updating=!0,Array.isArray(r)||"observableArray"===r.name){if(r=new ObservableArray,e.selectedOptions)for(let t=0;t<e.selectedOptions.length;t++){const n=e.selectedOptions[t];r.push(n.value)}n._data[o]=r}else n._data[o]=e.value;e.__updating=!1})),"INPUT"===e.tagName||"TEXTAREA"===e.tagName){e.addEventListener("change",(function(){e.__updating=!0,o?n._updateDataFromBooleanElement(e,t):n._data.value=e.value,e.__updating=!1}));let o="checkbox"===e.type||"radio"===e.type;o||e.addEventListener("keyup",(function(){const o=t.value;n._data[o]=e.value}))}}_addModelBindings(e){const t=this,n=e?e.querySelectorAll("[smart-model]"):t._appRoot.querySelectorAll("[smart-model]");for(let e=0;e<n.length;e++){const o=n[e];let r={value:o.getAttribute("smart-model")};"list"===o.type&&(r={selectedValues:o.getAttribute("smart-model")}),"checkbox"!==o.type&&"radio"!==o.type||(r={checked:o.getAttribute("smart-model")}),o.id||(o.id="id"+window.Smart.Utilities.Core.createGUID().replace(/-/gi,"")),t._updateDataFromNativeElement(o,r),t._addTemplateBinding(o.id,r)}}_renderForBindings(e){const t=this,n=t._appRoot.querySelectorAll("[smart-for]");for(let e=0;e<n.length;e++){const o=n[e],r=o.getAttribute("smart-for"),i=t._data[r];o.id||(o.id="id"+window.Smart.Utilities.Core.createGUID().replace(/-/gi,"")),o.setAttribute("smart-for-rendered","");const a=null!==o.getAttribute("smart-for-self"),d=a?o.parentNode.querySelectorAll(".smart-for-item-"+o.id):o.querySelectorAll(".smart-for-item-"+o.id);for(let e=0;e<d.length;e++)t.template[d[e].id]&&delete t.template[d[e].id],d[e].remove();const l=a?o:o.firstElementChild,s=document.createDocumentFragment();for(let e=0;e<i.length;e++){const t=l.cloneNode(!0);t.style.display="",t.id=o.id+"_"+e,t.classList.add("smart-for-item"),t.classList.add("smart-for-item-"+o.id),t.removeAttribute("smart-for"),s.appendChild(t)}l.style.display="none",a?o.parentNode.insertBefore(s,o.nextSibling):o.appendChild(s);let c=t._appRoot.querySelectorAll(".smart-for-item-"+o.id);for(let e=0;e<c.length;e++){const n=c[e];t._addAttributeBindings(n,r+"."+e+".")}}e&&n.length>0&&t.render()}notify(e){const t=this;t.notifyFn=function(n){n.owner=t,e(n)}}_notify(e){const t=this;if("length"===e.propertyName)return;t.notifyFn&&t.notifyFn(e);let n=e.propertyName;e.object&&(n=e.object.propertyName);for(let e in t.template){const o=t.template[e];let r=null;for(let e in o.bind)if("function"!=typeof o.bind[e]&&o.bind[e].indexOf(n)>=0){r=e;break}r&&t._setPropertyFromData(o,r)}t._renderForBindings(!0)}_observeData(){const e=this;e._data=new window.Smart.Observable(e._data),e._data.canNotify=!1,e._data.notify(e._notify.bind(e));const t=function(n){n.canNotify=!1;for(let o in n){if("function"==typeof n[o]){n[o]=n[o].bind(n);continue}if(o.startsWith("_")||"notifyFn"===o||"canNotify"===o||"name"===o)continue;const r=n[o];Array.isArray(r)?(n[o]=new window.Smart.ObservableArray(n[o]),n[o].canNotify=!1,n[o].notify(e._notify.bind(e)),n[o].canNotify=!0,n[o].propertyName=o):r&&"object"==typeof r&&r.constructor===window.Smart.DataAdapter||r&&"object"==typeof r&&r instanceof Date?n[o].propertyName=o:r&&"object"==typeof r&&(n[o]=new window.Smart.Observable(n[o]),n[o].canNotify=!1,n[o].notify(e._notify.bind(e)),n[o].canNotify=!0,n[o].propertyName=o,t(n[o]))}n.canNotify=!0};for(let n in e._data){if("function"==typeof e._data[n]){e._data[n]=e._data[n].bind(e._data);continue}if(n.startsWith("_")||"notifyFn"===n||"canNotify"===n||"name"===n)continue;const o=e._data[n];Array.isArray(o)?(e._data[n]=new window.Smart.ObservableArray(e._data[n]),e._data[n].canNotify=!1,e._data[n].notify(e._notify.bind(e)),e._data[n].canNotify=!0,e._data[n].propertyName=n):"object"==typeof o&&o.constructor===window.Smart.DataAdapter||"object"==typeof o&&o instanceof Date?e._data[n].propertyName=n:"object"==typeof o&&(e._data[n]=new window.Smart.Observable(e._data[n]),e._data[n].canNotify=!1,e._data[n].notify(e._notify.bind(e)),e._data[n].canNotify=!0,e._data[n].propertyName=n,t(e._data[n]))}e._data.canNotify=!0}_setPropertyFromData(e,t){const n=this;if(e.element.__updating||!e.bind)return;const o=e.bind[t];if("function"==typeof o)return;const r=o?o.split("."):[];let i=n._data;for(let e=0;e<r.length;e++){const t=r[e];if("string"==typeof i)break;if(void 0===i[t]){i=void 0;break}i=i[t]}if(e.bind.computed){const t={item:e,name:o,value:i};e.bind.computed(t),t.value!==i&&(i=t.value)}if(e.element.__updatingProperties=!0,o&&void 0!==i){if("observableArray"===i.name)"checkbox"===e.element.type?e.element[t]=i.indexOf(e.element.value)>=0:e.element[t]=i.toArray().slice(0);else if("observable"===i.name){const n=function(e){let t=null;for(let r in e){if("function"==typeof e[r])continue;if(r.startsWith("_")||"notifyFn"===r||"canNotify"===r||"name"===r)continue;const i=e[r];if(void 0!==i&&!(i&&Array.isArray(i)||i&&"object"==typeof i&&i.constructor===window.Smart.DataAdapter)){if(i&&"object"==typeof i&&(t=n(e[r])),r===o){t=i;break}if(t)return t}}return t},r=n(i);e.element[t]=r||i}else"radio"===e.element.type?e.element.value===i?e.element[t]=!0:e.element[t]=!1:e.element[t]=i;n._components[e.selector]&&!n._components[e.selector].rendered&&(n._components[e.selector].properties[t]=i)}else e.properties&&(e.element[t]=e.properties[t],n._components[e.selector]&&!n._components[e.selector].rendered&&(n._components[e.selector].properties[t]=e.properties[t]));e.element.__updatingProperties=!1}render(){const e=this;for(let t in e.template){const n=e.template[t],o=n.element?n.element:document.querySelector(t),r=n.properties,i=n.listeners,a=n.bind;if(!o)continue;n.selector=t,n.element=o,o._properties||(o._properties=[]);for(let t in r){const r=o._properties?o._properties[t]:null;r&&(r.notify=!0),e._setPropertyFromData(n,t)}for(let t in a){const r=o._properties?o._properties[t]:null;r&&(r.notify=!0),e._setPropertyFromData(n,t)}if(e._components&&e._components[t]&&!1===e._components[t].rendered){const o=e._components[t];n.element=o.instance=new window[o.name](t,o.properties),o.rendered=!0}const d=function(t){const o=n.element;for(let n in i)o.$||(o.$=window.Smart.Utilities.Extend(o)),o.$[t](n,(function(t){const o=i[n];if(o.indexOf(".")>=0){const n=o.split(".");let r=e._data[n[0]];for(let e=1;e<n.length;e++)r=r[n[e]];void 0!==r&&r(t)}else e._data[o]&&e._data[o](t)}));for(let n in a){const r=o._properties?o._properties[n]:null;if(r){const i=function(t){if(o.__updatingProperties)return;o.__updating=!0;const r=function(e){if("radio"===o.type){const t=o.parentNode.querySelectorAll('[type="radio"]');for(let n=0;n<t.length;n++)t[n].__updating=e}};r(!0);const i=a[n];if("radio"===o.type||"toggle"===o.type||"checkbox"===o.type)e._updateDataFromBooleanElement(o,a);else{(function(e,t,n){var o;for(o=0;o<t.length-1;o++)e=e[t[o]];e[t[o]]=n})(e._data,i.split("."),t.detail.value)}o.__updating=!1,r(!1)};"textarea"===o.type&&o.$[t]("input.keyup",(function(e){const t=new CustomEvent("keyup",{detail:{originalEvent:e,value:o.$.input.value}});i(t)})),o.$[t](r.attributeName+"-changed",(function(e){i(e)}))}}};d("unlisten"),o.isAttached&&d("listen"),o.onAttached=function(){d("listen")},o.onDetached=function(){d("unlisten")}}}}}});