
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-path",class extends Smart.BaseElement{static get properties(){return{value:{value:"",type:"string"},hint:{value:"",type:"string"},label:{value:"",type:"string"},dataSource:{value:[{label:"notAPath"},{label:"validPath"}],type:"any",reflectToAttribute:!1},dropDownAppendTo:{value:null,type:"any"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownOverlay:{value:!1,type:"boolean"},messages:{extend:!0,value:{en:{incorrectArgument:"{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",missingReference:"{{elementType}}: Missing reference to {{file}} in method {{methodName}}.",notAPath:"Set to not a path",validPath:"Set to valid path"}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"Enter a path",type:"string"},pathFormat:{allowedValues:["windows","unix"],value:"windows",type:"string"},indicator:{value:!1,type:"boolean"},displayMember:{value:"",type:"string"},valueMember:{value:"",type:"string"},wrap:{value:!1,type:"boolean"}}}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div class="smart-buttons-container" id="buttonsContainer" role="presentation">\n                            <span id="dropDownButton" class="smart-drop-down-button" role="button" aria-label="Open popup">\n                                <span id="icon" aria-hidden="true"></span>\n                            </span>\n                            <div id="inputContainer" class="smart-path-input-container" role="presentation">\n                                <div id="pathWrapper" class="smart-path-input-wrapper" role="presentation"></div>\n                                <input id="input" autocomplete="off" spellcheck="false" type="text" name="[[name]]" class="smart-input smart-path-input" role="textbox" aria-autocomplete="none" aria-label="[[placeholder]]" />\n                                <div class="smart-path-multiline-container smart-hidden" id="multilineContainer" role="presentation">\n                                    <div id="multiline" contenteditable="true" spellcheck="false" class="smart-input smart-path-input" role="textbox" aria-autocomplete="none" aria-label="[[placeholder]]"></div>\n                                </div>\n                            </div>\n                            <span id="browseButton" class="smart-browse-button" role="button" aria-label="Browse">\n                                <span id="icon" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="listbox"></div>\n                    </div>\n                    <span class="smart-hint" id="hint">[[hint]]</span>\n                </div>'}static get listeners(){return{"inputContainer.change":"_inputChangeHandler","inputContainer.keydown":"_inputKeyDownHandler","inputContainer.keyup":"_inputKeyUpHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","container.mouseover":"_mouseOverEventHandler","container.mouseout":"_mouseOverEventHandler","dropDownContainer.mouseover":"_mouseOverEventHandler","dropDownContainer.mouseout":"_mouseOverEventHandler","inputContainer.focusin":"_focusHandler","inputContainer.focusout":"_focusHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler"}}static get styleUrls(){return["smart.dropdown.css","smart.path.css"]}propertyChangedHandler(e,t,o){super.propertyChangedHandler(e,t,o);const n=this;switch(e){case"dropDownAppendTo":n._positionDetection.dropDownAppendToChangedHandler(),n.rightToLeft?n.$.dropDownContainer.setAttribute("right-to-left",""):n.$.dropDownContainer.removeAttribute("right-to-left");break;case"dataSource":n._dataBind(),n._setDropDownSize(),n._positionDetection.checkBrowserBounds("vertically"),n._positionDetection.positionDropDown(),n._positionDetection.checkBrowserBounds("horizontally");break;case"dropDownMinWidth":case"dropDownWidth":case"dropDownMaxWidth":case"dropDownHeight":case"dropDownMinHeight":case"dropDownMaxHeight":n._setDropDownSize();break;case"dropDownOverlay":o||n._positionDetection.removeOverlay();break;case"wrap":n._setInput(),n._handleValue(n.value),(n.getRootNode()||document).activeElement!==n&&n._trim();break;case"readonly":n.$.multiline.readOnly=n.$.input.readOnly=o,o?(n.$.multiline.setAttribute("aria-readonly",!0),n.$.input.setAttribute("aria-readonly",!0)):(n.$.multiline.removeAttribute("aria-readonly"),n.$.input.removeAttribute("aria-readonly"));break;case"rightToLeft":o?n.$.dropDownContainer.setAttribute("right-to-left",""):n.$.dropDownContainer.removeAttribute("right-to-left");break;case"value":case"pathFormat":n._handleValue(n.value),"value"===e&&n.value!==t&&n.$.fireEvent("change",{oldValue:t,value:n.value}),(n.getRootNode()||document).activeElement!==n&&n._trim();break;case"placeholder":n.$.input.placeholder=n.$.multiline.placeholder=n.placeholder}}attached(){const e=this;super.attached(),e.isCompleted&&e.$.dropDownContainer&&(e._positionDetection.dropDownAttached("_setDropDownSize"),e._positionDetection.checkBrowserBounds())}detached(){const e=this;super.detached(),e.$.dropDownContainer&&(e.close(),e._positionDetection.dropDownDetached())}render(){const e=this;e._setInput(),e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDownContainer,e.$.container,"close"),e._positionDetection.getDropDownParent(!0),e._positionDetection.setDropDownPosition(),e._calculateDropDownSize(),e._positionDetection.handleAutoPositioning(),e._setDropDownSize(),e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.dropDownContainer.id||(e.$.dropDownContainer.id=e.id+"DropDown"),e.$.hint.id||(e.$.hint.id=e.id+"Hint"),e.setAttribute("role","combobox"),e.setAttribute("aria-describedby",e.$.hint.id),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-labelledby",e.$.label.id),e.setAttribute("aria-owns",e.$.dropDownContainer.id),e.$.dropDownButton.setAttribute("aria-controls",e.$.dropDownContainer.id),e.rightToLeft&&e.$.dropDownContainer.setAttribute("right-to-left",""),e.wrap?e._wrapRefresh():e._handleValue(e.value),e._trim(),e.opened&&e.open(),super.render()}blur(){this.$[this.wrap?"multiline":"input"].blur()}focus(){this.$[this.wrap?"multiline":"input"].focus()}setToNotAPath(){this._setPathTo("//")}setToEmptyPath(){this._setPathTo("////")}_setPathTo(e){const t=this,o=t.value;t.set("value",e),t.$.input.value=t.$.multiline.value="",o!==t.value&&t.$.fireEvent("change",{oldValue:o,value:t.value})}close(){const e=this;e.$dropDownContainer.hasClass("smart-visibility-hidden")||e.$.fireEvent("closing").defaultPrevented||(e.$dropDownContainer.addClass("smart-visibility-hidden"),e.$.fireEvent("close"),e.opened=e._isDropDownClicked=e._preventDropDownClose=!1,e.setAttribute("aria-expanded",!1),e._positionDetection.removeOverlay(!0),e._edgeMacFF&&!e.hasAnimation&&e.$.dropDownContainer&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view")))}open(){const e=this;if(!e.disabled&&e.offsetHeight&&e.$dropDownContainer.hasClass("smart-visibility-hidden")){if(e.dataSource.length&&!e.$.dropDownContainer.firstElementChild&&e._dataBind(),e._handleItemSelection(),e._updateDropDown(),e.$dropDownContainer.hasClass("not-in-view")&&e.$dropDownContainer.removeClass("not-in-view"),e.$.dropDownContainer.style.transition=null,e.dropDownAppendTo&&e.dropDownAppendTo.length>0){const t=e.getBoundingClientRect();if(e.$.container.contains(e.$.dropDownContainer)){let t=0;const o=setInterval((function(){const n=e.getBoundingClientRect();t++,n.top===e._positionTop&&t<10||(e.open(),clearInterval(o),e._positionTop=n.top)}),100);return}t.top!==e._positionTop&&(e._positionTop=t.top)}e.$.fireEvent("opening").defaultPrevented||(e.opened=!0,e.setAttribute("aria-expanded",!0),e._positionDetection.placeOverlay(),e._positionDetection.checkBrowserBounds("vertically"),e._positionDetection.positionDropDown(),e._positionDetection.checkBrowserBounds("horizontally"),e.$dropDownContainer.removeClass("smart-visibility-hidden"),e.$.fireEvent("open"),e._handleKeyStrokes("Home"),Smart.Utilities.Core.isMobile||(e.wrap?e.$.multiline.focus():e.$.input.focus()))}}_calculateDropDownSize(){const e=this;e._dropDownSize={};const t=window.getComputedStyle(e.$.dropDownContainer),o=parseFloat(t.getPropertyValue("border-top-width").trim()),n=parseFloat(t.getPropertyValue("border-bottom-width").trim()),i=parseFloat(t.getPropertyValue("margin-top").trim()),r=parseFloat(t.getPropertyValue("margin-bottom").trim()),a=parseFloat(t.getPropertyValue("padding-top").trim()),l=parseFloat(t.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(e._dropDownSize.width=t.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),e._dropDownSize.height=t.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!e._dropDownSize.width||e._dropDownSize.width.indexOf("initial")>-1)&&(e._dropDownSize.width=e.offsetWidth),e._dropDownSize.height||(e._dropDownSize.height="auto"),e._dropDownSize.minHeight=parseFloat(t.getPropertyValue("min-height").trim()),e._dropDownSize.maxHeight=parseFloat(t.getPropertyValue("max-height").trim()),e._dropDownSize.borderWidth=(isNaN(o)?0:o)+(isNaN(n)?0:n),e._dropDownSize.paddingWidth=(isNaN(a)?0:a)+(isNaN(l)?0:l),e._dropDownSize.marginWidth=(isNaN(i)?0:i)+(isNaN(r)?0:r)}_focusHandler(e){const t=this;if("focusin"===e.type)return t.setAttribute("focus",""),t.wrap?t._wrapRefresh():t._handleValue(t.value),void t._refreshInputSelection(!0);if(t._buttonClicked||t._isDropDownClicked)t.focus();else{if(t.removeAttribute("focus"),t.wrap){const e=t.value;t._handleValue(t.$.multiline.value,!0),t.value!==e&&t.$.fireEvent("change",{oldValue:e,value:t.value})}else t._handleValue(t.$.input.value,!0);t._buttonClicked||t._isDropDownClicked||t.close(),t._trim()}}_setInput(){const e=this;let t=e.$.input,o=e.$.multiline;o.value||Object.defineProperty(o,"value",{get(){return this.textContent},set(e){this.innerHTML=e,e?this.removeAttribute("show-placeholder"):this.setAttribute("show-placeholder",""),t.value=this.textContent}}),o.readOnly||Object.defineProperty(o,"readOnly",{get(){return this.getAttribute("contenteditable")},set(e){this.setAttribute("contenteditable",!e)}}),e.wrap?(t.$.addClass("smart-hidden"),e.$multilineContainer.removeClass("smart-hidden")):(t.$.removeClass("smart-hidden"),e.$multilineContainer.addClass("smart-hidden")),t.placeholder=o.placeholder=e.placeholder,t.readOnly=o.readOnly=e.readonly,o.value="",o.setAttribute("placeholder",e.placeholder),o.setAttribute("readonly",e.readonly)}_handleItemSelection(e,t){const o=this,n=o.$.dropDownContainer.getElementsByClassName("smart-path-item");for(let e=0;e<n.length;e++)n[e].removeAttribute("active");if(!e||e.hasAttribute("disabled"))return;t&&o.$.fireEvent(t,{label:e.label,value:e.value});const i=o.value;e.setAttribute("active",""),"notAPath"===e.value?(o.set("value","//"),o.$.input.value=o.$.multiline.value=""):"validPath"===e.value&&(o.set("value","////"),o.$.input.value=o.$.multiline.value=""),i!==o.value&&o.$.fireEvent("change",{oldValue:i,value:o.value}),o.close()}_handleKeyStrokes(e){const t=this,o=[].slice.call(t.$.dropDownContainer.children),n=o.find((e=>e.hasAttribute("focus"))),i=function(e,t){if(!e)return;let o;for(o=e[t+"ElementSibling"];o;){if(!o.hasAttribute("disabled"))return o;o=o[t+"ElementSibling"]}};let r;if(o.length){switch(e){case"ArrowDown":r=n?i(n,"next"):o.find((e=>!e.hasAttribute("disabled")));break;case"ArrowUp":r=n?i(n,"previous"):o.find((e=>!e.hasAttribute("disabled")));break;case"Home":r=o.find((e=>!e.hasAttribute("disabled")));break;case"End":for(let e=o.length-1;e>=0;e--)if(!o[e].hasAttribute("disabled")){r=o[e];break}}r&&(o.map((e=>e.removeAttribute("focus"))),r.setAttribute("focus",""),t.setAttribute("aria-activedescendant",r.id))}}_getPathType(e){if(e&&e.length)return 0===e.indexOf("//rel//")?"rel":0===e.indexOf("//abs//")?"abs":0===e.indexOf("//unc//")?"unc":/(^|[\/\\])(\.{1,2})[\/\\]/g.test(e)?"rel":/^[\w\d]{1}:\\/gim.test(e)||/^\/[\w\d]+\//gim.test(e)?"abs":/^\\\\[\w\d]+\\/gim.test(e)||/^\/\/[\w\d]+\//gim.test(e)?"unc":"rel"}_getDriveName(e,t){const o=this;let n;return"rel"===t?(n=e[0].replace(/[:\\\/]+|\s/gim,""),e[0]=n):"abs"===t?(n=e[0].replace(/[:\\\/]+|[.]{1,}|\s/gim,""),"windows"===o.pathFormat?n+=":":"unix"===o.pathFormat&&(n="/"+n),e[0]=n):"unc"===t&&(n=e[0].replace(/[:\\/]+|[.]{1,}|\s/gim,""),n="windows"===o.pathFormat?"\\\\"+n:"//"+n,e[0]=n),n}_handleValue(e){const t=this;if("//"===e||"////"===e)return void(t.$.multiline.value=t.$.input.value="");e=e.trim();const o=t._getPathType(e);if(!e||!e.length||!o)return t.set("value","//"),void(t.$.multiline.value=t.$.input.value="");const n=(e=(e=e.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>|]+)/gim,"")).replace(/[\\|\/]+/gim,">")).split(">").filter((e=>e.length));if(!n.length)return t.$.multiline.value=t.$.input.value="",void t.set("value",t._formatValue(o));for(let e=0;e<n.length-1;e++)if("..."!==n[e]){if(!1===/^\.+$/g.test(n[e]))for(;"."===n[e].charAt(n[e].length-1);)n[e]=n[e].slice(0,n[e].length-1)}else n[e]="";if("rel"===o)for(let e=0;e<n.length-1;e++)/^\.{3,}$/g.test(n[e])&&(n[e]="");else for(let e=0;e<n.length-1;e++)/^\.+$/g.test(n[e])&&(n[e]="");const i=t._getDriveName(n,o);t.set("value",t._formatValue(t._constructPath(n,">",i),o)),t.$.multiline.value=t.$.input.value=t._constructPath(n,"windows"===t.pathFormat?"\\":"/",i)}_constructPath(e,t,o){let n="";for(let i=0;i<e.length;i++){let r=e[i];const a=0===r.indexOf("<div>");r=r.replace(/(<div>)|(<\/div>)/gim,""),r!==o&&(r=r.replace(/[:\\\/]+|\s+$/gim,"")),this.wrap?r=r!==o?t+r:r:r+=t,a&&(r='<div role="presentation">'+r+"</div>"),n+=r}return!this.wrap&&(e.length>1||1===e.length&&e[0].indexOf(":")<0)&&(n=n.slice(0,-1)),n}_trim(){const e=this;if((e.getRootNode()||document).activeElement===e)return;const t="windows"===e.pathFormat?"\\":"/",o=e.value;if(!o||"//"===o||"////"===o)return void(e.$.multiline.value=e.$.input.value="");const n=e.$.pathWrapper,i=e.wrap?e.$.multiline:e.$.input;let r=o.replace(/^(\/+((abs)|(rel)|(unc))\/+)|([?*"<>]+)/gim,"").split("/");const a=e._getDriveName(r,e._getPathType(o));if(e.wrap){let o=e._trimVertically(r,a);for(;n.offsetHeight>e.offsetHeight;){const i=o.length<=2?0:1;if(!o.length)break;o.splice(i,1,"..."),o=e._trimVertically(o,a),n.innerHTML=e._constructPath(o,t,a?o[0]:void 0),n.offsetHeight>e.offsetHeight&&o.splice(i,1)}r=o}for(n.innerHTML=e._constructPath(r,t,a?r[0]:void 0);n.offsetWidth>i.offsetWidth;){const o=r.length<=2?0:1;if(!r.length)break;r.splice(o,1,"..."),n.innerHTML=e._constructPath(r,t,a?r[0]:void 0),n.offsetWidth>i.offsetWidth&&r.splice(o,1)}r.length||(n.innerHTML="..."),e.$.multiline.value=e.$.input.value=n.innerHTML}_trimVertically(e,t){const o=this,n=o.$.pathWrapper,i=o.wrap?o.$.multiline:o.$.input,r="windows"===o.pathFormat?"\\":"/",a=()=>{let t=-1;for(let o=0;o<e.length;o++)0!==o&&e[o].indexOf("<div>")<0&&(t=o);return t};for(let t=0;t<e.length;t++)e[t]=e[t].replace(/(<div>)|(<\/div>)/gim,"");for(n.innerHTML=o._constructPath(e,r,t?e[0]:void 0);n.offsetWidth>i.offsetWidth;){let i=a();if(i<=1||"..."===e[i])break;e[i]="<div>"+e[i]+"</div>",n.innerHTML=o._constructPath(e,r,t?e[0]:void 0)}return e.length||(n.innerHTML="..."),o.$.multiline.value=o.$.input.value=n.innerHTML,e}_formatValue(e,t){const o=this;return e||(e=o.wrap?o.$.multiline.value:o.$.input.value),t?"//"+t+"//"+e.replace(/[:]+|\\+|\/+/gim,"").replace(/>/g,"/"):"//"}_inputChangeHandler(e){const t=this,o=t.value;e.preventDefault(),e.stopPropagation(),t._handleValue((t.wrap?t.$.multiline:t.$.input).value,!0),o!==t.value&&t.$.fireEvent("change",{oldValue:o,value:t.value}),t._updateDropDown()}_updateDropDown(){const e=this,t=e.$.dropDownContainer.children,o=e.wrap?e.$.multiline:e.$.input;let n,i;for(let e=0;e<t.length;e++){const o=t[e];if("notAPath"===o.value?n=o:"validPath"===o.value&&(i=o),n&&i)break}n&&(!o.value.length||e.indicator?(n.setAttribute("disabled",""),n.setAttribute("aria-disabled",!0),n.hasAttribute("focus")&&n.removeAttribute("focus")):(n.removeAttribute("disabled"),n.removeAttribute("aria-disabled"))),i&&(o.value.length||e.indicator?(i.setAttribute("disabled",""),i.setAttribute("aria-disabled",!0),i.hasAttribute("focus")&&i.removeAttribute("focus")):(i.removeAttribute("disabled"),i.removeAttribute("aria-disabled")))}_dataBind(){const e=this,t=e.dataSource;let o=[];if(e.$.dropDownContainer.innerHTML="",t&&t.length&&("string"==typeof t&&(e.dataSource=JSON.parse(t)),Array.isArray(t))){const n=document.createDocumentFragment();for(let i=0;i<t.length;i++){const r=t[i],a=e._createItem(r);o.push(a),n&&n.appendChild(a)}e.$.dropDownContainer.appendChild(n)}}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let o=e.originalEvent.target;if(o===t._overlay&&(t._overlayDown=!0),t.shadowRoot||t.isInShadowDOM){o=e.originalEvent.composedPath()[0];let n=o;for(;n;){if(n.closest(".smart-drop-down-container")===t.$.dropDownContainer){t._isDropDownClicked=!0;break}n=n.getRootNode().host}}else t._isDropDownClicked=o.closest(".smart-drop-down-container")===t.$.dropDownContainer;(t.shadowRoot||t).contains(o)&&(t._buttonClicked=o.closest(".smart-browse-button")||o.closest(".smart-drop-down-button"),t._isPathInputDown=o.closest(".smart-path-input"));let n=o.closest(".smart-path-item");t.$.dropDownContainer.contains(n)||(n=void 0),n&&(!t.hasRippleAnimation||n.hasAttribute("disabled")||n.hasAttribute("readonly")||Smart.Utilities.Animation.Ripple.animate(n,e.pageX,e.pageY),t._itemClicked=n,t._preventDropDownClose=!0),t._isDropDownClicked&&(t._preventDropDownClose=!0)}_documentUpHandler(e){if("pointercancel"===e.originalEvent.type)return;const t=this;let o=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;const n=o.closest(".smart-path-item");if(n!==t._itemClicked){if(t._itemClicked=void 0,t._buttonClicked&&(t.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(t._buttonClicked,e.pageX+t._buttonClicked.offsetWidth/4,e.pageY+t._buttonClicked.offsetHeight/4),o.closest(".smart-browse-button")===t._buttonClicked&&t._buttonClicked===t.$.browseButton?t.$.fireEvent("browseButtonClick"):o.closest(".smart-drop-down-button")===t._buttonClicked&&t._buttonClicked===t.$.dropDownButton&&t.$.fireEvent("dropDownButtonClick")),o.closest(".smart-drop-down-button")===t._buttonClicked&&t._buttonClicked===t.$.dropDownButton)return t.$dropDownContainer.hasClass("smart-visibility-hidden")?t.open():t.close(),void(t._buttonClicked=void 0);t._buttonClicked=void 0,t._isDropDownClicked&&(t._isDropDownClicked=!1),t._isPathInputDown!==t.$.input&&t._isPathInputDown!==t.$.multiline?(o=t._getUpEventTarget(o),void 0!==o&&("dropDownContainer"!==o&&"item"!==o||"item"===o)&&t.close()):t._isPathInputDown=void 0}else t._handleItemSelection(n,"itemClick")}_inputKeyDownHandler(e){const t=this;if(t.opened)switch(e.key){case"ArrowDown":case"ArrowUp":case"Home":case"End":return e.preventDefault(),e.altKey&&"ArrowUp"===e.key?void t.close():void t._handleKeyStrokes(e.key)}else{if(e.altKey&&"ArrowDown"===e.key)return e.preventDefault(),void t.open();if("PageDown"===e.key||"PageUp"===e.key)return void e.preventDefault()}return"Enter"===e.key?(t.wrap&&e.preventDefault(),void(t.opened&&(t._handleItemSelection(t._focusedItem(),"itemClick"),t.close()))):t.opened&&"Escape"===e.key?(e.preventDefault(),void t.close()):void(/^[a-z0-9\/\\.:\s]$/gim.test(e.key)&&t.$.multiline.removeAttribute("show-placeholder"))}_focusedItem(){const e=this.$.dropDownContainer.children;for(let t=0;t<e.length;t++)if(e[t].hasAttribute("focus"))return e[t]}_inputKeyUpHandler(e){const t=this;if(t.wrap){const o=t.$.multiline.value;if(o||t.$.multiline.setAttribute("show-placeholder",""),t.$.input.value=o,"Enter"===e.key){const e=t.value;t._handleValue(o),o||(t.set("value","//"),t.$.multiline.value=t.$.input.value=""),o&&t._refreshInputSelection(),t.value!==e&&t.$.fireEvent("change",{oldValue:e,value:o})}t._updateDropDown()}else t.opened&&t._inputChangeHandler(e),"Enter"!==e.key||t.$.input.value.length||t.set("value","//")}_refreshInputSelection(e){const t=this;if(t.disabled||t.readonly)return;if(!t.wrap)return void t.$.input.setSelectionRange(0,t.$.input.value.length);const o=new Range,n=window.getSelection(),i=t.$.multiline.childNodes[t.$.multiline.childNodes.length-1];i&&(o.setStart(i,i.length),o.collapse(!0),e&&o.selectNodeContents(i),n.removeAllRanges(),n.addRange(o))}_getUpEventTarget(e){const t=this;let o=e;for(o=void 0===o.parentElement?o.getRootNode().host:o.parentElement;o;){if(o===t.$.dropDownContainer){o="dropDownContainer";break}o=void 0===o.parentElement?o.getRootNode().host:o.parentElement}return o}_mouseOverEventHandler(e){const t=this.shadowRoot||this.isInShadowDOM?e.composedPath()[0]:e.target,o=t.closest(".smart-drop-down-button")||t.closest(".smart-browse-button")||t.closest(".smart-input")||t.closest(".smart-path-item");o&&!o.hasAttribute("disabled")&&("mouseover"===e.type?o.setAttribute("hover",""):o.removeAttribute("hover"))}_createItem(e){const t=this,o=document.createElement("div");"number"==typeof e&&(e=""+e);const n=function(t,o){return void 0!==e[t]?""+e[t]:e[o]};let i=("string"==typeof e?e:n(t.displayMember,"label"))||"",r=("string"==typeof e?e:n(t.valueMember,"value"))||"";return o.label=o.innerHTML=""+(t.localize(i)||i),o.value=""+(r||i),e.disabled?o.setAttribute("disabled",""):o.removeAttribute("disabled"),o.classList.add("smart-path-item"),o.setAttribute("role","option"),o.id||(o.id=t.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),o}_resizeHandler(){const e=this;e._wrapRefresh(),"none"===e.resizeMode&&(e._calculateDropDownSize(),e._setDropDownSize()),e._trim()}_wrapRefresh(){const e=this;e.wrap&&(e._handleValue(e.value),e.$.multiline.removeAttribute("position-absolute"),e.offsetHeight<e.$.multiline.offsetHeight&&e.$.multiline.setAttribute("position-absolute",""))}_styleChangedHandler(){this._trim()}_setDropDownSize(){const e=this;e._dropDownSize||e._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach((t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]=e[t]?e[t]+(e[t].toString().endsWith("%")?"%":"px"):null})),e.dropDownWidth?"auto"!==e.dropDownWidth?e.$.dropDownContainer.style.width=("initial"===e.dropDownWidth?e.offsetWidth:parseFloat(e.dropDownWidth))+"px":e.$.dropDownContainer.style.width="auto":e.$.dropDownContainer.style.width="auto"===e._dropDownSize.width?"auto":(parseFloat(e._dropDownSize.width)||0)+"px",e.dropDownHeight&&"auto"!==e.dropDownHeight?e.$.dropDownContainer.style.height=parseFloat(e.dropDownHeight)+((e.dropDownHeight+"").indexOf("%")>-1?"%":"px"):e.$.dropDownContainer.style.height=e._dropDownSize.height}});