
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=31)}({31:function(e,t){Smart("smart-drop-down-button",class extends Smart.ContentElement{static get properties(){return{autoCloseDelay:{value:100,type:"number"},dropDownAppendTo:{value:null,type:"any"},dropDownButtonPosition:{allowedValues:["none","left","right","top","bottom"],value:"right",type:"string"},dropDownHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMaxWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinHeight:{value:"",type:"any",validator:"_propertyValidator"},dropDownMinWidth:{value:"",type:"any",validator:"_propertyValidator"},dropDownOpenMode:{allowedValues:["none","default","dropDownButton","auto"],value:"default",type:"string"},dropDownOverlay:{value:!1,type:"boolean"},dropDownPlaceholder:{value:"No Items",type:"string"},dropDownPosition:{allowedValues:["auto","top","bottom","overlay-top","overlay-center","overlay-bottom","center-bottom","center-top"],value:"auto",type:"string"},dropDownWidth:{value:"",type:"any",validator:"_propertyValidator"},hint:{value:"",type:"string"},horizontalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},label:{value:"",type:"string"},messages:{extend:!0,value:{en:{invalidNode:'smart-drop-down-button: Invalid parameter "{{node}}" when calling {{method}}.'}},type:"object"},name:{value:"",type:"string"},opened:{value:!1,type:"boolean"},placeholder:{value:"",type:"string"},resizeIndicator:{value:!1,type:"boolean"},resizeMode:{value:"none",allowedValues:["none","horizontal","vertical","both"],type:"string"},verticalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]}}}static get listeners(){return{"actionButton.down":"_buttonsDownHandler","actionButton.mouseenter":"_buttonsMouseEventsHandler","actionButton.mouseleave":"_buttonsMouseEventsHandler","document.selectstart":"_selectStartHandler","document.dragstart":"_dragStartHandler","document.down":"_documentDownHandler","document.up":"_documentUpHandler","document.move":"_documentMoveHandler","dropDownButton.down":"_buttonsDownHandler","dropDownButton.mouseenter":"_buttonsMouseEventsHandler","dropDownButton.mouseleave":"_buttonsMouseEventsHandler",keydown:"_keyDownHandler",keyup:"_keyUpHandler",focus:"_focusEventHandler",blur:"_blurEventHandler","dropDownContainer.transitionend":"_dropDownTransitionendHandler",mouseenter:"_mouseEnterHandler",mouseleave:"_mouseLeaveHandler",resize:"_resizeHandler","resizeBar.move":"_resizeBarMoveHandler",styleChanged:"_styleChangedHandler"}}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div id="buttonsContainer" class="smart-buttons-container" role="presentation">\n                            <span id="actionButton" class="smart-action-button">[[placeholder]]</span>\n                            <span id="dropDownButton" class="smart-drop-down-button">\n                                <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-container smart-visibility-hidden" role="dialog">\n                            <smart-scroll-viewer id="scrollViewer"\n                                right-to-left="[[rightToLeft]]"\n                                horizontal-scroll-bar-visibility="[[horizontalScrollBarVisibility]]"\n                                vertical-scroll-bar-visibility="[[verticalScrollBarVisibility]]">\n                                <content></content>\n                            </smart-scroll-viewer>\n                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">\n                                <div></div>\n                            </div>\n                         </div>\n                    </div>\n                    <span class="smart-hint" id="hint">[[hint]]</span>\n                </div>'}static get styleUrls(){return["smart.scrollviewer.css","smart.dropdown.css","smart.dropdownbutton.css"]}attached(){super.attached(),this.isCompleted&&this.$.dropDownContainer&&(this._positionDetection.dropDownAttached("_setDropDownSize"),this._positionDetection.checkBrowserBounds())}detached(){super.detached(),this.$.dropDownContainer&&(this.close(),this._positionDetection.dropDownDetached())}propertyChangedHandler(e,t,o){const n=this;switch(e){case"disabled":case"unfocusable":n._setFocusable();break;case"dropDownAppendTo":n._positionDetection.dropDownAppendToChangedHandler();break;case"dropDownHeight":case"dropDownMaxHeight":case"dropDownMaxWidth":case"dropDownMinHeight":case"dropDownMinWidth":case"dropDownWidth":n._setDropDownSize();break;case"dropDownOpenMode":n._setFocusable(),n.close(),n._setAriaRelations();break;case"dropDownOverlay":o||n._positionDetection.removeOverlay();break;case"dropDownPlaceholder":n.$.dropDownContainer.hasAttribute("empty")&&(n.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=o,n.opened&&n.$.scrollViewer.refresh());break;case"dropDownPosition":n._positionDetection.dropDownPositionChangedHandler();break;case"innerHTML":""===o.trim()?(n.$.dropDownContainer.setAttribute("empty",""),requestAnimationFrame(()=>n.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=n.dropDownPlaceholder)):(n.$.dropDownContainer.removeAttribute("empty"),n.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=o),n.opened&&n.$.scrollViewer.refresh();break;case"opened":o?n.open():n.close();break;case"placeholder":""!==t&&""!==o||n._setFocusable();break;case"resizeIndicator":o?n.$.dropDownContainer.setAttribute("resize-indicator",""):n.$.dropDownContainer.removeAttribute("resize-indicator");break;case"resizeMode":n.$.dropDownContainer.setAttribute("resize-mode",n.resizeMode),n.opened&&n.$.scrollViewer.refresh();break;case"label":o?n._ariaButton.setAttribute("aria-labelledby",n.$.label.id):"DropDownButton"===n.elementName&&n._ariaButton.setAttribute("aria-labelledby",n.$.actionButton.id)}}appendChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.appendChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e?(t.$.scrollViewer.appendChild(e),t.opened&&t.$.scrollViewer.refresh()):t.error(t.localize("invalidNode",{method:"removeChild",node:"node"}))}removeChild(e){const t=this;if(!t.isCompleted||e instanceof HTMLElement&&e.classList.contains("smart-resize-trigger-container")){const e=Array.prototype.slice.call(arguments,2);return HTMLElement.prototype.removeChild.apply(t,e.concat(Array.prototype.slice.call(arguments)))}e?t.$.dropDownContainer.contains(e)&&(t.$.scrollViewer.removeChild(e),t.opened&&t.$.scrollViewer.refresh()):t.error(t.localize("invalidNode",{method:"removeChild",node:"node"}))}removeAll(){const e=this;e.isCompleted&&e.$.scrollViewer.removeAll()}_open(){const e=this;if(!e.disabled&&e.offsetHeight&&e.$dropDownContainer.hasClass("smart-visibility-hidden")){if(e.$dropDownContainer.hasClass("not-in-view")&&e.$dropDownContainer.removeClass("not-in-view"),e.$.dropDownContainer.style.transition=null,e.dropDownAppendTo&&e.dropDownAppendTo.length>0){const t=e.getBoundingClientRect();if(e.$.container.contains(e.$.dropDownContainer)){let t=0;const o=setInterval((function(){const n=e.getBoundingClientRect();t++,n.top===e._positionTop&&t<10||(e.open(),clearInterval(o),e._positionTop=n.top)}),100);return}t.top!==e._positionTop&&(e._positionTop=t.top)}e.$.fireEvent("opening").defaultPrevented||(e.opened=!0,e._ariaButton.setAttribute("aria-expanded",!0),e._positionDetection.placeOverlay(),e._positionDetection.checkBrowserBounds("vertically"),e._positionDetection.positionDropDown(),e._positionDetection.checkBrowserBounds("horizontally"),e.$dropDownContainer.removeClass("smart-visibility-hidden"),e.$.fireEvent("open"),e.$.dropDownButton&&("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("selected",""):e.$.dropDownButton.removeAttribute("selected")),e.$.input&&e.$.input.focus())}}open(){const e=this,t=document.querySelectorAll("smart-drop-down-button, smart-color-picker");for(let o=0;o<t.length;o++)t[o]!==e&&t[o].opened&&t[o].close();e._open(),e.$.scrollViewer.refresh()}scrollTo(e,t){this.isCompleted&&this.$.scrollViewer.scrollTo(e,t)}ready(){super.ready()}render(){const e=this;e.rightToLeft&&(e.dropDownButtonPosition="right"===e.dropDownButtonPosition?"left":"right"),e.classList.add("smart-drop-down-box"),e._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),e._positionDetection=new Smart.Utilities.PositionDetection(e,e.$.dropDownContainer,e.$.container,"close"),e._positionDetection.getDropDownParent(!0),e._positionDetection.setDropDownPosition(),e._calculateDropDownSize(),e.$.dropDownContainer.setAttribute("resize-mode",e.resizeMode),e.resizeIndicator&&e.$.dropDownContainer.setAttribute("resize-indicator",""),e._positionDetection.handleAutoPositioning(),e.$.label&&!e.$.label.id&&(e.$.label.id=e.id+"Label"),e.$.actionButton&&!e.$.actionButton.id&&(e.$.actionButton.id=e.id+"ActionButton"),e.$.hint&&!e.$.hint.id&&(e.$.hint.id=e.id+"Hint"),e._createElement(),e.opened?e.open():e.hasAnimation&&e._edgeMacFF&&e.$dropDownContainer.addClass("not-in-view"),e._positionTop=e.getBoundingClientRect().top,super.render()}_setAriaRelations(e){const t=this;let o,n;"dropDownButton"!==t.dropDownOpenMode?(o=t.$.dropDownButton,o.setAttribute("aria-hidden",!0),n=t,t.$.actionButton.removeAttribute("role")):(o=t,n=t.$.dropDownButton,n.removeAttribute("aria-hidden"),t.$.actionButton.setAttribute("role","button")),t._ariaButton=n,n.setAttribute("role","button"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-owns",t.$.dropDownContainer.id),n.setAttribute("aria-describedby",t.$.hint.id),t.label?n.setAttribute("aria-labelledby",t.$.label.id):"DropDownButton"===t.elementName&&n.setAttribute("aria-labelledby",t.$.actionButton.id),o.setAttribute("role","presentation"),o.removeAttribute("aria-owns"),e?n.setAttribute("aria-expanded",t.opened):(o.removeAttribute("aria-describedby"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-labelledby"))}_setDropDownSize(){const e=this;e._dropDownSize||e._calculateDropDownSize(),["dropDownMinWidth","dropDownMinHeight","dropDownMaxWidth","dropDownMaxHeight"].forEach(t=>{e.$.dropDownContainer.style[t.replace("dropDown","").replace(/^./,"m")]=e[t]?e[t]+(e[t].toString().endsWith("%")?"%":"px"):null}),e.dropDownWidth?"auto"!==e.dropDownWidth?e.$.dropDownContainer.style.width=("initial"===e.dropDownWidth?e.offsetWidth:parseFloat(e.dropDownWidth))+"px":e.$.dropDownContainer.style.width="auto":e.$.dropDownContainer.style.width="auto"===e._dropDownSize.width?"auto":(parseFloat(e._dropDownSize.width)||0)+"px",e.dropDownHeight&&"auto"!==e.dropDownHeight?e.$.dropDownContainer.style.height=parseFloat(e.dropDownHeight)+((e.dropDownHeight+"").indexOf("%")>-1?"%":"px"):e.$.dropDownContainer.style.height=e._dropDownSize.height}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),e.$.actionButton.removeAttribute("tabindex"),void e.$.dropDownButton.removeAttribute("tabindex");let t=e.tabIndex>0?e.tabIndex:0;"dropDownButton"===e.dropDownOpenMode?(e.removeAttribute("tabindex"),e.$.actionButton.setAttribute("tabindex",t),e.$.dropDownButton.setAttribute("tabindex",t)):(e.$.actionButton.removeAttribute("tabindex"),e.$.dropDownButton.removeAttribute("tabindex"),e.tabIndex=t)}_calculateDropDownSize(){const e=this;e._dropDownSize={};const t=window.getComputedStyle(e.$.dropDownContainer),o=parseFloat(t.getPropertyValue("border-top-width").trim()),n=parseFloat(t.getPropertyValue("border-bottom-width").trim()),r=parseFloat(t.getPropertyValue("margin-top").trim()),i=parseFloat(t.getPropertyValue("margin-bottom").trim()),a=parseFloat(t.getPropertyValue("padding-top").trim()),s=parseFloat(t.getPropertyValue("padding-bottom").trim());Smart.Utilities.Core.CSSVariablesSupport()&&(e._dropDownSize.width=t.getPropertyValue("--smart-drop-down-list-drop-down-width").trim(),e._dropDownSize.height=t.getPropertyValue("--smart-drop-down-list-drop-down-height").trim()),(!e._dropDownSize.width||e._dropDownSize.width.indexOf("initial")>-1)&&(e._dropDownSize.width=e.offsetWidth),e._dropDownSize.height||(e._dropDownSize.height="auto"),e._dropDownSize.minHeight=parseFloat(t.getPropertyValue("min-height").trim()),e._dropDownSize.maxHeight=parseFloat(t.getPropertyValue("max-height").trim()),e._dropDownSize.borderWidth=(isNaN(o)?0:o)+(isNaN(n)?0:n),e._dropDownSize.paddingWidth=(isNaN(a)?0:a)+(isNaN(s)?0:s),e._dropDownSize.marginWidth=(isNaN(r)?0:r)+(isNaN(i)?0:i)}_createElement(){const e=this;""===e.innerHTML.trim()&&(e.$.dropDownContainer.setAttribute("empty",""),e.$.scrollViewer.$.scrollViewerContentContainer.innerHTML=e.dropDownPlaceholder),e._setDropDownSize(),e._setFocusable(),e._setAriaRelations(!0),e.$.arrow.noRipple=!0}_dragStartHandler(e){this._resizeDetails&&this._resizeDetails.started&&e.preventDefault()}_dropDownTransitionendHandler(){const e=this;e._edgeMacFF&&!e.opened&&e.hasAnimation&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view"))}_blurEventHandler(){const e=this;e.hasAttribute("focus")&&(e.$.dropDownButton&&(e.removeAttribute("focus"),e.$.dropDownButton.removeAttribute("focus")),e.$.actionButton&&(e.removeAttribute("focus"),e.$.actionButton.removeAttribute("focus")),e.$.fireEvent("blur"))}_focusEventHandler(){const e=this;e.hasAttribute("focus")||(e.$.dropDownButton&&(e.setAttribute("focus",""),e.$.dropDownButton.setAttribute("focus","")),e.$.actionButton&&(e.setAttribute("focus",""),e.$.actionButton.setAttribute("focus","")),e.$.fireEvent("focus"))}_getUpEventTarget(e){const t=this;let o=e;if(o===t.$.dropDownContainer)return"dropDownContainer";for(o=void 0===o.parentElement?o.getRootNode().host:o.parentElement;o;){if(o===t.$.dropDownContainer){o="dropDownContainer";break}o=void 0===o.parentElement?o.getRootNode().host:o.parentElement}return o}close(){const e=this;e.$dropDownContainer.hasClass("smart-visibility-hidden")||e.$.fireEvent("closing").defaultPrevented||(e.$dropDownContainer.addClass("smart-visibility-hidden"),e.$.fireEvent("close"),e.$.dropDownButton&&e.$.dropDownButton.removeAttribute("selected"),e.opened=!1,e._ariaButton.setAttribute("aria-expanded",!1),e._preventDropDownClose=!1,e._positionDetection.removeOverlay(!0),e._edgeMacFF&&!e.hasAnimation&&(e.$.dropDownContainer.style.top=e.$.dropDownContainer.style.left="",e.$dropDownContainer.addClass("not-in-view")))}_documentUpHandler(e){const t=this,o=t.hasAttribute("resizing");if(t.$.actionButton.removeAttribute("active"),t._resizeDetails&&t._resizeDetails.started)return t._resizeDetails.started=t._resizeDetails.resizeEventFired=!1,t.removeAttribute("resizing"),t._preventDropDownClose=!1,t.focus(),void t.$.fireEvent("resizeEnd",{position:{left:e.pageX,top:e.pageY}});if(t.disabled||t._isDropDownClicked||t.readonly)return void delete t._isDropDownClicked;if(t._overlayDown)return t.close(),void delete t._overlayDown;let n=e.originalEvent.target;if(t.enableShadowDOM&&(n=e.originalEvent.composedPath()[0]),t._preventsSelectStart=!1,void 0===n||n===t.$.resizeBar)return;const r=n.closest(".smart-action-button");let i;if(t._buttonClicked&&("dropDownButton"===t.dropDownOpenMode&&r&&t._buttonClicked===t.$.actionButton?t.$.fireEvent("actionButtonClick"):n.closest(".smart-drop-down-button")!==t._buttonClicked&&r!==t._buttonClicked||(i=!0,t.$.fireEvent("dropDownButtonClick"))),t._buttonClicked=void 0,!t.editable&&r===t.$.actionButton||n.closest(".smart-drop-down-button")===t.$.dropDownButton)return"dropDownButton"===t.dropDownOpenMode&&r===t.$.actionButton?void t.close():void(t.$dropDownContainer.hasClass("smart-visibility-hidden")&&"none"!==t.dropDownOpenMode&&i&&"pointercancel"!==e.originalEvent.type?t.open():t.close());n=t._getUpEventTarget(n),void 0!==n&&(("dropDownContainer"!==n&&"item"!==n||"item"===n&&"checkBox"!==t.selectionMode&&t.selectionMode.indexOf("Many")<0)&&t.close(),o&&t.$.scrollViewer&&t.$.scrollViewer.refresh())}_keyDownHandler(e){const t=this,o=(t.shadowRoot||t.getRootNode()).activeElement||document.activeElement;if(!(t.disabled||t.readonly||o!==t&&o!==t.$.dropDownButton&&o!==t.$.actionButton))switch(e.key){case"Enter":case" ":e.preventDefault(),e.target!==t.$.actionButton&&(t.opened&&"Enter"===e.key?t.close():t.opened||t.readonly||"none"===t.dropDownOpenMode||t.open()),"dropDownButton"===t.dropDOwnOpenMode&&e.target.setAttribute("active","");break;case"End":t.$.scrollViewer.scrollTop=t.$.scrollViewer.scrollHeight;break;case"Home":t.$.scrollViewer.scrollTop=0;break;case"PageUp":case"PageDown":t.$.scrollViewer.scrollTop+=(e.key.indexOf("Down")>-1?1:-1)*t.$.dropDownContainer.offsetHeight;break;case"ArrowUp":case"ArrowDown":if(e.altKey)return void(t.disabled||t.readonly||"none"===t.dropDownOpenMode||(t.$dropDownContainer.hasClass("smart-visibility-hidden")?t.open():t.close()));e.preventDefault(),t.$.scrollViewer.scrollTop+=10*(e.key.indexOf("Down")>-1?1:-1);break;case"Escape":e.preventDefault(),t.close()}}_keyUpHandler(e){const t=this.enableShadowDOM?e.composedPath()[0]:e.target;"Enter"!==e.key&&" "!==e.key||t.removeAttribute("active")}_propertyValidator(e,t){return"number"!=typeof t&&"string"!=typeof t?e:t}_mouseEnterHandler(){const e=this;e._isElementHovered=!0,"auto"!==e.dropDownOpenMode||e.disabled||e.readonly||e.open()}_mouseLeaveHandler(){const e=this;e.removeAttribute("hover"),e._isElementHovered=!1,"auto"!==e.dropDownOpenMode||e.disabled||e.readonly||e._autoClose()}_autoClose(){const e=this;e._autoCloseTimeout=setTimeout(function(){e._isElementHovered||e.close(),clearTimeout(e._autoCloseTimeout)}.bind(e),e.autoCloseDelay)}_documentMoveHandler(e){const t=this,o=t.enableShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("auto"===t.dropDownOpenMode&&null!==t.dropDownAppendTo&&(t.contains(o)||t.$.dropDownContainer.contains(o)?t._isElementHovered=!0:(t._isElementHovered=!1,t._autoClose())),!t._resizeDetails||t._resizeDetails&&!t._resizeDetails.started)return;t.setAttribute("resizing",""),t._resizeDetails.resizeEventFired||(t.$.fireEvent("resizeStart",{position:{left:e.pageX,top:e.pageY}}),t._resizeDetails.resizeEventFired=!0);const n=document.documentElement,r=t.$.dropDownContainer.getBoundingClientRect(),i=t.getBoundingClientRect(),a=t.$.dropDownContainer.hasAttribute("top")?"top":"bottom";let s;function l(){if(s=e.pageY-t._resizeDetails.y,"bottom"===a)t._resizeDetails.height=Math.min(n.clientHeight-r.top-6,Math.max(0,t._resizeDetails.height+s)),t._resizeDetails.y=Math.max(r.top+n.scrollTop-t._resizeDetails.offsetY,Math.min(n.clientHeight+n.scrollTop-1.5*t._resizeDetails.offsetY,e.pageY));else{if(t._resizeDetails.height=Math.min(t._dropDownSize.maxHeight,Math.max(0,Math.min(i.top,t._resizeDetails.height-s))),s=Math.max(0,r.top+(r.height-Math.max(t._dropDownSize.minHeight,t._resizeDetails.height))),t.dropDownAppendTo&&t.dropDownAppendTo.length>0){const e=Math.abs(parseFloat(getComputedStyle(t.$.dropDownContainer).getPropertyValue("margin-bottom")))||0;t.$.dropDownContainer.style.top=t.dropDownAppendTo&&t.dropDownAppendTo.length>0?e+s+"px":""}const o=i.top+n.scrollTop+t._resizeDetails.offsetYtop;t._resizeDetails.y=Math.max(t._resizeDetails.offsetYtop,Math.min(o,Math.max(o-t._dropDownSize.maxHeight,e.pageY)))}t.$.dropDownContainer.style.height=t._resizeDetails.height+"px"}function d(){s=e.pageX-t._resizeDetails.x,t._resizeDetails.width=Math.min(n.clientWidth-r.left-6,Math.max(0,t._resizeDetails.width+s)),t.$.dropDownContainer.style.width=t._resizeDetails.width+"px",t._resizeDetails.x=Math.max(r.left+n.scrollLeft-t._resizeDetails.offsetXR,Math.min(n.clientWidth+n.scrollLeft-1.5*t._resizeDetails.offsetXR,e.pageX))}switch(t.resizeMode){case"vertical":l();break;case"horizontal":d();break;case"both":d(),l()}}_documentDownHandler(e){const t=this;if(t.disabled||t.readonly)return;let o=e.originalEvent.target;if(o===t._overlay&&(t._overlayDown=!0),t.enableShadowDOM){o=e.originalEvent.composedPath()[0];let n=o;for(;n;){if(n.closest(".smart-drop-down-container")===t.$.dropDownContainer){t._isDropDownClicked=!0;break}n=n.getRootNode().host}}else t._isDropDownClicked=o.closest(".smart-drop-down-container")===t.$.dropDownContainer;if(t._buttonClicked=o.closest(".smart-action-button")||o.closest(".smart-drop-down-button"),t._isDropDownClicked&&(t._preventDropDownClose=!0),o!==t.$.resizeBar||"none"===t.resizeMode)return;t._resizeDetails||(t._resizeDetails={});const n=t.$.dropDownContainer.getBoundingClientRect();t._resizeDetails.started=!0,t._resizeDetails.x=e.pageX,t._resizeDetails.y=e.pageY,t._resizeDetails.width=t.$.dropDownContainer.offsetWidth,t._resizeDetails.height=t.$.dropDownContainer.offsetHeight,t._resizeDetails.offsetXL=e.clientX-n.left,t._resizeDetails.offsetXR=n.left+t.$.dropDownContainer.offsetWidth-e.clientX,t._resizeDetails.offsetY=n.top+t.$.dropDownContainer.offsetHeight-e.clientY,t._resizeDetails.offsetYtop=e.clientY-n.top,t._preventDropDownClose=!0}_resizeHandler(){const e=this;"none"===e.resizeMode&&(e._calculateDropDownSize(),e._setDropDownSize())}_resizeBarMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_styleChangedHandler(e){const t=this;if(t.dropDownAppendTo&&t.dropDownAppendTo.length>0){const o=e.detail.styleProperties,n=["font-size","font-family","font-style","font-weight"];for(let e=0;e<n.length;e++)o[n[e]]&&(t.$.dropDownContainer.style[n[e]]=o[n[e]].value)}t._dropDownSize&&"auto"===t._dropDownSize.height&&t._setDropDownSize()}_buttonsDownHandler(e){const t=this;if(!t.disabled){if(t.hasRippleAnimation)if("dropDownButton"===t.dropDownOpenMode)Smart.Utilities.Animation.Ripple.animate(e.target,e.pageX,e.pageY);else if(e.target===t.$.dropDownButton||!t.editable){const o=t.$.buttonsContainer;o.firstElementChild.noRipple=!0,Smart.Utilities.Animation.Ripple.animate(o,e.pageX,e.pageY),o.firstElementChild.noRipple=!1}t._preventsSelectStart=!0,"dropDownButton"===t.dropDownOpenMode&&e.target===t.$.actionButton&&t.$.actionButton.setAttribute("active",""),t.opened&&(t._preventDropDownClose=!0)}}_buttonsMouseEventsHandler(e){const t=this;t.disabled||("mouseenter"===e.type?(t.setAttribute("hover",""),e.target.setAttribute("hover","")):(t.removeAttribute("hover"),e.target.removeAttribute("hover")))}_selectStartHandler(e){this._preventsSelectStart&&e.preventDefault()}})}});