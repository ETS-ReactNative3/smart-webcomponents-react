
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-multi-combo-input",class extends Smart.CheckInput{static get properties(){return{allowItemsAdd:{value:!1,type:"boolean"},allowItemsRemove:{value:!1,type:"boolean"},autoAddNewTags:{value:!0,type:"boolean"},colorItems:{value:!0,type:"boolean"},inputTagsMode:{allowedValues:["one","many"],value:"many",type:"string"},hideInputTagsCloseButton:{value:!1,type:"boolean"},messages:{value:{en:{newItem:"New item",tagLabelOne:"{{value}} item selected",tagLabel:"{{value}} items selected",selectAll:"Select All",unselectAll:"Unselect All"}},type:"object",extend:!0},pills:{value:!1,type:"boolean"},singleSelect:{value:!1,type:"boolean"},selectAll:{value:!1,type:"boolean"}}}template(){return'<div id="inputContainer" role="presentation"><div class="smart-action-button" role="presentation" id="actionButton"> <input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /></div><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}_downHandler(e){const t=this,l=e.originalEvent.target;t.readonly&&l&&l.classList&&!l.classList.contains("smart-drop-down-list-unselect-button")?t._dropDownButtonDownHandler(e):t._tokenCloseButtonClick!==l.closest(".smart-drop-down-list-unselect-button")&&(t._tokenCloseButtonClick=l.closest(".smart-drop-down-list-unselect-button"),t.readonly&&t._dropDownButtonDownHandler(e))}focus(){const e=this;e.readonly?HTMLElement.prototype.focus.apply(e,[]):e.$.input.focus()}_setFocusable(){const e=this;if(e.readonly){if(e.disabled||e.unfocusable)return void e.removeAttribute("tabindex");e.tabIndex=e.tabIndex>0?e.tabIndex:0,e.$.listen("keydown",e._keyDownHandler),e.$.listen("keyup",e._keyUpHandler)}}_documentUpHandler(e){const t=this,l=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(t._tokenCloseButtonClick&&t._tokenCloseButtonClick===l.closest(".smart-drop-down-list-unselect-button")){const e=l.closest(".smart-token"),[a,s]=[e.getAttribute("data-label"),e.getAttribute("value")],n=t._selectedItems.findIndex((e=>a===e.label&&s===e.value)),[o,i]=[t.value,t.$.input.dataValue];let r,d;return n>-1&&t._selectedItems.splice(n,1),t.set("value",d=t._selectedItems.map((e=>e.label)).join(t.separator)),t.$.input.dataValue=r=t._selectedItems.map((e=>e.value)).join(t.separator),t._updateValue(),t.$.actionButton.contains(e)&&t.$.actionButton.removeChild(e),t.close(),void(d===o&&r===i||t.$.fireEvent("change",{value:r,label:d,oldValue:i,oldLabel:o}))}if(!t.contains(l))if(t.$.dropDownContainer.contains(l.shadowParent||l)){if(t._isPointerDown){if(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),l.hasAttribute("add-new"))return;t.focus()}}else t.opened&&(t._preventLookup=!0),t._isPointerDown||t.close(),t._isPointerDown=!1}get selectedItems(){return this._selectedItems?this._selectedItems:[]}set selectedItems(e){this._selectedItems=e,this._updateValue()}_performSelect(e,t){const l=this;if(!e)return void l.close();const a=e.target?e.target.closest("li"):e;if(!a)return;l._selectedItems||(l._selectedItems=[]),a.classList.toggle("selected"),l.singleSelect&&(l._selectedItems=[],a.classList.add("selected"));const s=a.classList.contains("selected"),n={label:a.getAttribute("data-label"),value:a.getAttribute("value"),color:a.getAttribute("color"),image:a.getAttribute("image")},o=l.$.menu.children;for(let e=0;e<o.length;e++)l.singleSelect&&o[e]!==a&&o[e].classList.remove("selected"),o[e].classList.remove("active"),o[e].setAttribute("aria-selected",!1);if(s){if(l.dataSource&&l.dataSource[0]&&"string"==typeof l.dataSource[0])l._selectedItems.push(n);else{const e=l.dataSource.findIndex((e=>e.label===n.label&&""+e.value===n.value));l.dataSource&&e>=0?l._selectedItems.push(l.dataSource[e]):l._selectedItems.push(n)}if(e.noActiveState||(l._setActiveDescendant(a),a.classList.add("active")),l.dataSource)if(l.dataSource[0]&&"string"==typeof l.dataSource[0]){const e=l.dataSource.findIndex((e=>e===n.label));l.set("selectedIndex",e)}else{const e=l.dataSource.findIndex((e=>e.label===n.label&&""+e.value===n.value));l.set("selectedIndex",e)}}else{if(l.dataSource&&l.dataSource[0]&&"string"==typeof l.dataSource[0]){const e=l.dataSource.findIndex((e=>e===n.label));if(e>-1){const e=l._selectedItems.findIndex((e=>e===n.label));l._selectedItems.splice(e,1),l.set("selectedIndex",-1)}else l.set("selectedIndex",e)}else{const e=l.dataSource.findIndex((e=>e.label===n.label&&""+e.value===n.value));if(l.dataSource)if(e>-1){const e=l._selectedItems.findIndex((e=>e.label===n.label&&""+e.value===n.value));l._selectedItems.splice(e,1),l.set("selectedIndex",-1)}else l.set("selectedIndex",e)}a.classList.remove("active")}a.setAttribute("aria-selected",s),l._updateValue(t),l.singleSelect&&l.close()}_updateValue(e){const t=this;let l=t._selectedItems,a=t.value,s=t.$.input.dataValue,[n,o]=[[],[]];l||(l=[]);for(let e=0;e<l.length;e++){const t=l[e];t?(n.push(t.label),o.push(t.value)):(n.push(""),o.push(""))}if(t._createTags(),t.set("selectedValues",l.map((e=>e.value))),n=n.join(t.separator),t.set("value",n),t.$.input.dataValue=o=o.join(t.separator),t.$.input.value="",t.setAttribute("value",t.value),e||n===a&&o===s||t.$.fireEvent("change",{value:o,label:n,oldValue:s,oldLabel:a}),t.selectAll&&t._setSelectAllItemState(),!t.opened)return;const i=t.getBoundingClientRect(),r=window.scrollX,d=window.scrollY;t.$.dropDownContainer.style.left=-3+i.left+r+"px",t.$.dropDownContainer.style.top=i.bottom+d+1+"px"}_createTags(){const e=this,t=e._selectedItems||[];let l,a=document.createDocumentFragment();for(;"SPAN"===e.$.actionButton.firstElementChild.nodeName;)e.$.actionButton.removeChild(e.$.actionButton.firstElementChild);if(0===t.length&&"one"===e.inputTagsMode&&e.readonly){const s="one"===e.inputTagsMode?t.length>1?e.localize("tagLabel",{value:t.length,count:e.dataSource.length}):e.localize("tagLabelOne",{value:t.length,count:e.dataSource.length}):"";l=document.createElement("span"),l.classList.add("smart-token"),l.innerHTML="<span class='smart-drop-down-list-selection-label' role=\"presentation\">"+s+"</span>",a.appendChild(l)}for(let s=0;s<t.length;s++){const n=t[s];if("one"===e.inputTagsMode&&!l||"many"===e.inputTagsMode){let s="one"===e.inputTagsMode?t.length>1?e.localize("tagLabel",{value:t.length,count:e.dataSource.length}):e.localize("tagLabelOne",{value:t.length,count:e.dataSource.length}):"string"==typeof n?n:n.label;"many"===e.inputTagsMode&&void 0===s&&(s=""),l=document.createElement("span"),l.classList.add("smart-token");let o=null,i="";if(n.image&&"many"===e.inputTagsMode&&(o=document.createElement("span"),o.style.backgroundImage=`url('${n.image}')`,o.className="smart-drop-down-list-selection-image",i=o.outerHTML),l.innerHTML=i+"<span class='smart-drop-down-list-selection-label' role=\"presentation\">"+s+"</span>",e.singleSelect||"one"===e.inputTagsMode||(l.innerHTML+='<span class=\'smart-drop-down-list-unselect-button\' role="button" aria-label="Unselect"></span>'),"many"===e.inputTagsMode){n.label?(l.setAttribute("data-label",n.label),l.setAttribute("value",n.value)):(l.setAttribute("data-label",""),l.setAttribute("value","")),l.setAttribute("separator",e.separator);const t=n.color;if(t&&e.colorItems){l.setAttribute("color",t),l.style.setProperty("--smart-primary",t);const e=new Smart.Color(t).getInvertedColor();l.style.setProperty("--smart-primary-color",e)}}if(""===s&&e.singleSelect)continue;a.appendChild(l)}}e.$.actionButton.insertBefore(a,e.$.input);const s=e.getBoundingClientRect(),n=window.scrollX,o=window.scrollY;e.$.scrollView.style.left=-3+s.left+n+"px",e.$.scrollView.style.top=s.bottom+o+1+"px"}_render(e){const t=this,l=(e,l)=>{let a=e,s=e,n=e,o=null;"object"==typeof e&&(a=e.label,s=void 0!==e.value?e.value:a,o=void 0!==e.color?e.color:"",n=void 0!==e.id?e.id:l);const i=document.createElement("li"),r=document.createElement("a");if(r.href="#",i.id=t.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),i.setAttribute("data-label",a),i.setAttribute("value",s),i.setAttribute("role","option"),i.setAttribute("aria-selected",!1),i.setAttribute("aria-label",a),void 0!==n&&(i.id=n),o&&t.colorItems){i.setAttribute("color",o),i.style.setProperty("--smart-primary",o);const e=new Smart.Color(o).getInvertedColor();i.style.setProperty("--smart-primary-color",e)}if(r.innerHTML=t.highlighter?t.highlighter(a):t._highlighter(a),r.setAttribute("aria-hidden",!0),e.icon&&(r.classList.add("icon"),r.classList.add(e.icon)),e.image){const t=document.createElement("span");t.style.backgroundImage=`url('${e.image}')`,t.className="smart-drop-down-list-selection-image",i.setAttribute("image",e.image),r.innerHTML=t.outerHTML+r.innerHTML}if(i.appendChild(r),t.allowItemsRemove){const l=document.createElement("span");l.classList.add("close-button"),r.appendChild(l),l.onpointerdown=l=>{l.preventDefault(),l.stopPropagation();const n=t.dataSource.findIndex((t=>t.value===e.value));if(n>=0){if(t.dataSource.splice(n,1),i.remove(),t.$.scrollView.refresh&&t.$.scrollView.refresh(),"one"===t.inputTagsMode){const e=t._selectedItems.findIndex((e=>e.label===a&&e.value===s));e>=0&&t._selectedItems.splice(e,1),t._createTags()}t.$.fireEvent("remove",{index:n,label:e.label,value:e.value})}}}return t.singleSelect&&""===e&&(i.innerHTML=""),i},a=e.map((function(e,t){return l(e,t)}));t.$.menu.innerHTML="",t._selectedItems||(t._selectedItems=[]);let s=t._selectedItems.map((e=>"string"==typeof e?e:e.value));s.length||(s=(t.$.input.dataValue||t.$.input.value).split(t.separator).map((e=>e.trim())));let n=Array.from(t.$.actionButton.getElementsByClassName("smart-token")).map((e=>e.textContent.trim()));if(t.allowItemsAdd){const e=document.createElement("div"),a=document.createElement("smart-button"),s=document.createElement("input");e.classList.add("add-new-item"),a.setAttribute("add-new",""),s.setAttribute("add-new",""),s.placeholder=t.localize("newItem"),s.classList.add("smart-input"),a.onclick=()=>{if(!s.value)return;const e={label:s.value,value:s.value.trim().replace(/ /gi,"")};t.dataSource||(t.dataSource=[]),t.dataSource.push(e);const a=l(e,t.dataSource.length-1);t.$.menu.appendChild(a),t.$.scrollView.refresh&&t.$.scrollView.refresh(),s.value="","one"===t.inputTagsMode&&t._createTags(),t.$.fireEvent("add",{label:e.label,value:e.value,index:t.dataSource.length-1})},s.onkeydown=e=>{"Enter"===e.key&&a.click()},e.appendChild(s),e.appendChild(a),t.$.menu.appendChild(e)}for(let e=0;e<a.length;e++){const l=a[e],o=l.getAttribute("value"),i=l.getAttribute("data-label"),r=s.findIndex((e=>""+e==""+o));r>-1&&("one"===t.inputTagsMode||n[r]===i)&&(l.classList.add("selected"),l.setAttribute("aria-selected",!0),t._setActiveDescendant(l),t._selectedItems.findIndex((e=>"string"==typeof e?e===i:e.label===i&&e.value===o))<0&&t._selectedItems.findIndex((e=>"string"==typeof e?e===o:""+e.value==""+o))<0&&t._selectedItems.push({label:l.getAttribute("data-label"),value:l.getAttribute("value")})),t._setSelectAllItemState(),t.$.menu.appendChild(l)}}_next(){const e=this;let t=e._selectedItems?e._selectedItems[e._selectedItems.length-1]:void 0;t&&(t=e.$.menu.querySelector(`.active[data-label="${t.label}"][value="${t.value}"]`));const l=t||e.$.menu.querySelector(".active");if(!l){const t=e.$.menu.firstElementChild;return t.classList.add("active","focused"),void e._setActiveDescendant(t)}const a=e.$.menu.children;for(let e=0;e<a.length;e++)a[e].classList.remove("active","focused");e._setActiveDescendant();let s=l.nextElementSibling;s||(s=e.$.menu.firstElementChild),s.classList.add("active","focused"),e._setActiveDescendant(s),e.ensureVisible()}_prev(){const e=this;let t=e._selectedItems?e._selectedItems[e._selectedItems.length-1]:void 0;t&&(t=e.$.menu.querySelector(`.active[data-label="${t.label}"][value="${t.value}"]`));const l=t||e.$.menu.querySelector(".active");if(!l){const t=e.$.menu.firstElementChild;return t.classList.add("active","focused"),void e._setActiveDescendant(t)}const a=e.$.menu.children;for(let e=0;e<a.length;e++)a[e].classList.remove("active","focused");e._setActiveDescendant();let s=l.previousElementSibling;s||(s=e.$.menu.lastElementChild),s.classList.add("active","focused"),e._setActiveDescendant(s),e.ensureVisible()}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode),e.shiftKey||e.altKey||e.ctrlKey?delete t._inputValue:(t._move(e),t._inputValue=t.$.input.value)}_keyUpHandler(e){const t=this;let l=t.$.input.value;if(t._selectedItems&&(l=t._selectedItems.map((e=>e.label)),t.$.input.value&&l.push(t.$.input.value),l=l.join(t.separator)),t.set("value",l),!e.shiftKey&&"F2"!==e.key){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 8:{if(t.readonly)break;if(t.opened&&t.close(),t._inputValue&&t._inputValue.length)break;if(!t._selectedItems){t.readonly||(t.$.input.dataValue=t.$.input.value);break}const e=t._selectedItems[t._selectedItems.length-1];if(!e)break;t.$.menu.querySelector(`li[data-label="${e.label}"][value="${e.value}"]`)&&(t._selectedItems.pop(),t._updateValue());break}case 9:case 13:if(!t.opened)return void(t.autoAddNewTags&&13===e.keyCode&&"many"===t.inputTagsMode&&t._autoCreateTags());t._performSelect(t.$.menu.querySelector(".active")),e.stopPropagation(),e.preventDefault();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault();break;default:t._lookup(e),!t.opened||e.ctrlKey||e.shiftKey||(e.stopPropagation(),e.preventDefault())}delete t._inputValue}}_blurHandler(){super._blurHandler(),this._autoCreateTags()}_autoCreateTags(){const e=this;if(!e.autoAddNewTags||"many"===!e.inputTagsMode)return;e.dataSource||(e.dataSource=[]);const t=e.$.input.value.trim();if(!e.dataSource.find((e=>"string"==typeof e?e===t:e.label===t))){e._tempItems||(e._tempItems=[]);let l=t.trim();if(t.indexOf(",")>=0){l=t.split(",");for(let t=0;t<l.length;t++){const a=l[t].trim();""!==a&&(e._tempItems.push(a),e._creteaTagsFromValue(a))}}else""!==l&&(e._tempItems.push(l),e._creteaTagsFromValue(l));e.query="",e._updateValue(!0)}}propertyChangedHandler(e,t,l){const a=this;if("disabled"===e&&a._setFocusable(),"value"===e){a.displayMember!==a.valueMember&&"string"!=typeof l?(a.value=l[a.displayMember],a.$.input.dataValue=l[a.valueMember]):a.$.input.dataValue="";const e=a.$.menu.children;for(let t=0;t<e.length;t++)e[t].classList.remove("selected"),e[t].setAttribute("aria-selected",!1);a._setActiveDescendant(a.$.menu.querySelector("active")),a._creteaTagsFromValue(l)}else if("separator"===e){const e=a.$.actionButton.children;for(let t=0;t<e.length;t++){const a=e[t];a.classList.contains("smart-token")&&a.setAttribute("separator",l)}}else if("inputTagsMode"===e)a._createTags();else if("theme"===e||"rightToLeft"===e)a.$.scrollView[e]=l,l?a.$.dropDownContainer.setAttribute(Smart.Utilities.Core.toDash(e),""):a.$.dropDownContainer.removeAttribute(Smart.Utilities.Core.toDash(e));else if("inverted"===e)l?a.$.dropDownContainer.setAttribute("inverted",""):a.$.dropDownContainer.removeAttribute("inverted");else if("selectAll"===e)a._handleSelectAllItem();else if("selectedIndex"===e){if(super.propertyChangedHandler(e,t,l),a._selectedItems=[],a.dataSource){const e=a.dataSource[l];e&&a._selectedItems.push(e),a._updateValue(!0)}}else super.propertyChangedHandler(e,t,l)}_createElement(){const e=this,t=document.createElement("ul"),l=document.createElement("smart-scroll-viewer"),a=document.createElement("div");if(l.rightToLeft=e.rightToLeft,l.theme=e.theme,l.horizontalScrollBarVisibility="hidden",l.classList.add("smart-multi-combo-input-scroll-viewer"),e.rightToLeft&&a.setAttribute("right-to-left",""),e.dataSource&&"string"==typeof e.dataSource&&(e.dataSource=e.$.deserialize(e.dataSource,"array")),a.setAttribute("theme",e.theme),a.classList.add("smart-multi-combo-input-drop-down-menu","smart-input-drop-down-menu","smart-check-input-drop-down-menu"),e.pills&&a.setAttribute("pills",""),e.singleSelect&&a.setAttribute("single-select",""),e.inverted?a.setAttribute("inverted",""):a.removeAttribute("inverted"),e.classList.add("smart-input"),a.appendChild(l),t.setAttribute("aria-multiselectable",!0),e.$.scrollView=l,e.$.menu=t,e.$.dropDownContainer=a,e.$.menu.onclick=function(t){t.stopPropagation(),t.preventDefault(),t.target&&t.target.hasAttribute("add-new")||(e._performSelect(t),e.focus())},e.classList.add("smart-input"),e.$.input.value="",e.selectedValues&&e.selectedValues.length>0){const t=e.dataSource.filter((t=>{if("string"==typeof t){if(e.selectedValues.indexOf(t)>=0)return!0}else if(e.selectedValues.indexOf(t.value)>=0)return!0}));e.selectedItems=t}else{const t=e.value;t&&e._creteaTagsFromValue(t)}e._handleSelectAllItem(),e._setFocusable()}_creteaTagsFromValue(e=""){const t=this;if(e){const e=t.value.split(",");for(t.$.input.value="",t._selectedItems=[];"SPAN"===t.$.actionButton.firstElementChild.nodeName;)t.$.actionButton.removeChild(t.$.actionButton.firstElementChild);for(let l=0,a=e.length;l<a;l+=1){const a=e[l].trim();if(a)if(t.dataSource){const e=t.dataSource.find((e=>{if(""+e.value===a)return e}));e&&e.label?t._selectedItems.push({label:e.label,value:e.value}):t._selectedItems.push({label:a,value:a})}else t._selectedItems.push({label:a,value:a})}t._createTags()}else t.$.input.value="",t._selectedItems=[],t._createTags()}_handleSelectAllItem(){const e=this;if(e.selectAll){if(!e.$.selectAll){const t=document.createElement("ul"),l=document.createElement("li"),a=document.createElement("a");a.href="#",a.innerHTML=e.localize("selectAll"),a.setAttribute("aria-hidden",!0),l.id=e.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),l.setAttribute("role","option"),l.setAttribute("value",e.localize("selectAll")),l.setAttribute("aria-label",e.localize("selectAll")),l.classList.add("smart-select-all"),l.appendChild(a),l.onclick=function(t){t.stopPropagation(),t.preventDefault(),Array.from(e.$.menu.children).find((e=>!e.classList.contains("selected")))?e._selectAll():e._clearSelection(),e._setSelectAllItemState(),l.classList.contains("selected")&&l.classList.add("active"),e.focus()},t.appendChild(l),e.$.selectAll=t}e._setSelectAllItemState(),e.$.dropDownContainer.insertBefore(e.$.selectAll,e.$.scrollView)}else e.$.selectAll&&e.$.selectAll.remove()}_setSelectAllItemState(){const e=this;if(!e.$.selectAll)return;const t=e.$.selectAll.firstElementChild,l=t.firstElementChild,a=!Array.from(e.$.menu.children).find((e=>!e.classList.contains("selected")));t.removeAttribute("indeterminate"),t.classList.remove("selected","active"),l.innerHTML=e.localize("selectAll"),e._selectedItems&&e._selectedItems.length>0&&(a?(t.classList.add("selected"),l.innerHTML=e.localize("unselectAll")):t.setAttribute("indeterminate",""))}_selectAll(){const e=this,t=e._selectedItems.length,l=e.$.input.dataValue,a=e.value;e._clearSelection(!0);const s=e.$.menu.children;for(let t=0;t<s.length;t++)s[t].classList.contains("selected")||e._performSelect({target:s[t],noActiveState:!0},!0);t!==e._selectedItems.length&&e.$.fireEvent("change",{value:e.$.input.dataValue,label:e.value,oldValue:l,oldLabel:a})}_clearSelection(e){const t=this;if(!t._selectedItems.length)return;const l=t.$.input.dataValue,a=t.value;for(t.$.input.dataValue="",t.value=t.$.input.value,t._selectedItems=[];"SPAN"===t.$.actionButton.firstElementChild.nodeName;)t.$.actionButton.removeChild(t.$.actionButton.firstElementChild);const s=t.$.menu.children;for(let e=0;e<s.length;e++)s[e].classList.remove("selected"),s[e].classList.remove("active"),s[e].setAttribute("aria-selected",!1);t._setActiveDescendant(t.$.menu.querySelector("active")),e||t.$.fireEvent("change",{value:"",label:"",oldValue:l,oldLabel:a});const n=t.getBoundingClientRect(),o=window.scrollX,i=window.scrollY;t.$.dropDownContainer.style.left=-3+n.left+o+"px",t.$.dropDownContainer.style.top=n.bottom+i+1+"px"}_open(){const e=this,t=e.getBoundingClientRect(),l=window.scrollX,a=window.scrollY;let s=0,n=0;if(!this.opened){if(e.timer&&clearTimeout(e.timer),e.$.scrollView.classList.remove("smart-input-drop-down-menu"),e.$.dropDownContainer.id=e.id+"_"+e.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),document.body.appendChild(e.$.dropDownContainer),e.setAttribute("aria-owns",e.$.dropDownContainer.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.dropDownContainer.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();s=e.left,n=e.top}e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.dropDownContainer.style.left=-3+t.left+l-s+"px",e.$.dropDownContainer.style.top=t.bottom+a-n+1+"px",e.$.dropDownContainer.classList.remove("open"),e.$.dropDownContainer.onpointerdown=function(){e._isPointerDown=!0},requestAnimationFrame((function(){const t=e.dropDownWidth;if(e.$.scrollView.refresh&&e.$.scrollView.refresh(),e._refreshMenu(),e.$.dropDownContainer.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open",""),t&&"string"==typeof t&&-1!==t.indexOf("%")){const l=parseFloat(t)/100;e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",e.offsetWidth*l+"px")}else if("auto"!==t&&t)e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",parseFloat(t)+"px");else if("auto"===t){if(e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.scrollView.$.scrollViewerContainer.classList.contains("vscroll")){const t=e.$.scrollView.offsetWidth+parseFloat(getComputedStyle(e.$.scrollView).getPropertyValue("--smart-scroll-bar-size"));e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",t+"px")}}else{e.$.menu.style.width="auto";let t=e.$.menu.offsetWidth;const l=e.$.menu.querySelectorAll("li");for(let t=0;t<l.length;t++)e._maxDropDownWidth=Math.max((l[t].firstElementChild||l[t]).offsetWidth,e._maxDropDownWidth);e.$.scrollView.computedVerticalScrollBarVisibility&&(t+=e.$.scrollView.$&&e.$.scrollView.$.verticalScrollBar?e.$.scrollView.$.verticalScrollBar.offsetWidth:30),e.$.dropDownContainer.style.setProperty("--smart-input-drop-down-menu-width",Math.max(t,e.offsetWidth-8)+"px"),e.$.menu.style.width=""}(e.shadowRoot||e.isInShadowDOM)&&e.$.scrollView._scrollView&&Smart.ScrollBar&&requestAnimationFrame((()=>e.$.scrollView._scrollView.vScrollBar.refresh()))})),e.$.scrollView.refresh&&e.$.scrollView.refresh(),e._refreshMenu(),this.opened=!0,e.setAttribute("aria-expanded",!0)}}close(){const e=this;return!!e.opened&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.dropDownContainer.parentNode&&!e.opened&&(document.body.removeChild(e.$.dropDownContainer),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e.$.dropDownContainer.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,e.setAttribute("aria-expanded",!1),e.focus(),e.$.fireEvent("close"),!0)}});