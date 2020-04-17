
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=20)}({20:function(e,t){Smart("smart-color-picker",class extends Smart.DropDownButton{static get properties(){return{applyValueMode:{value:"instantly",allowedValues:["instantly","useButtons"],type:"string"},columnCount:{value:8,type:"number"},gridThemeColors:{value:null,type:"array?",reflectToAttribute:!1},gridShadeColors:{value:null,type:"array?",reflectToAttribute:!1},gridStandardColors:{value:null,type:"array?",reflectToAttribute:!1},paletteColors:{value:null,type:"array?",reflectToAttribute:!1},paletteCustomColors:{value:null,type:"array?",reflectToAttribute:!1},disableUndo:{value:!1,type:"boolean"},displayMode:{value:"default",allowedValues:["default","grid","palette","radial","hexagonal","spectrumGrid","materialGrid"],type:"string"},dropDownAppendTo:{value:null,type:"any"},dropDownHeight:{value:"auto",type:"string"},dropDownWidth:{value:"auto",type:"string"},editable:{value:!1,type:"boolean"},editAlphaChannel:{value:!1,type:"boolean"},enableCustomColors:{value:!1,type:"boolean"},hidePreviewContainer:{value:!1,type:"boolean"},hideRGBEditor:{value:!1,type:"boolean"},hideHEXEditor:{value:!1,type:"boolean"},hideAlphaEditor:{value:!1,type:"boolean"},messages:{value:{en:{redPrefix:"R:",greenPrefix:"G:",bluePrefix:"B:",hexPrefix:"#:",alphaPrefix:"Alpha:",ok:"OK",cancel:"CANCEL",customColor:"CUSTOM COLOR",standardColors:"Standard colors",themeColors:"Theme colors"}},type:"object",extend:!0},name:{value:"",type:"string"},palette:{value:"default",allowedValues:["default","gray","red","green","blue","custom"],type:"string"},placeholder:{value:"Please Select Color",type:"string"},tooltipDisplayMode:{value:"hex",allowedValues:["none","rgba","rgb","hex"],type:"string"},value:{value:null,type:"string?"},valueDisplayMode:{value:"default",allowedValues:["default","colorBox","colorCode","none"],type:"string"},valueFormat:{value:"default",allowedValues:["default","rgb","rgba","hex"],type:"string"},inverted:{value:!1,type:"boolean"},hideContentToFit:{value:["RGB","HEX","alpha","previewContainer"],type:"array"}}}static get listeners(){return{"input.change":"_inputChangeHandler","input.focus":"_focusEventHandler","input.blur":"_blurEventHandler","colorPanel.cancelButtonClick":"_cancelButtonHandler","colorPanel.okButtonClick":"_okButtonHandler","colorPanel.customColorSelection":"_customColorSelectionHandler","colorPanel.change":"_colorPanelChangeHandler",keydown:"_keyDownHandler"}}static get requires(){return{"Smart.ColorPanel":"smart.colorpanel.js","Smart.DropDownButton":"smart.dropdownbutton.js"}}static get styleUrls(){return["smart.colorpanel.css","smart.colorpicker.css"]}template(){return'<div id="container" role="presentation">\n                    <span class="smart-label" id="label">[[label]]</span>\n                    <div id="content" class="smart-content" role="presentation">\n                        <div id="buttonsContainer" class="smart-buttons-container" role="presentation">\n                            <div id="actionButton" class="smart-action-button">\n                                <div id="colorSampleContainer" class="smart-color-box color-picker-sample-container" role="presentation">\n                                    <div id="colorSample" class="color-picker-sample"></div>\n                                </div>\n                                <input type="text" id="input" class="smart-input smart-color-input color-picker-action-input" placeholder="[[placeholder]]" spellcheck="false" autocomplete="off" aria-label="[[placeholder]]" />\n                            </div>\n                            <span id="dropDownButton" class="smart-drop-down-button">\n                                <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                            </span>\n                        </div>\n                        <div id="dropDownContainer" class="smart-drop-down smart-drop-down-color-picker smart-drop-down-container smart-visibility-hidden" role="dialog">\n                            <smart-color-panel id="colorPanel" wait\n                                             animation="[[animation]]"\n                                             apply-value-mode="[[applyValueMode]]"\n                                             column-count="[[columnCount]]"\n                                             disabled="[[disabled]]"\n                                             display-mode="[[displayMode]]"\n                                             edit-alpha-channel="[[editAlphaChannel]]"\n                                             enable-custom-colors="[[enableCustomColors]]"\n                                             grid-theme-colors="[[gridThemeColors]]"\n                                             grid-shade-colors="[[gridShadeColors]]"\n                                             grid-standard-colors="[[gridStandardColors]]"\n                                             hide-content-to-fit="[[hideContentToFit]]"\n                                             hide-preview-container="[[hidePreviewContainer]]"\n                                             hide-r-g-b-editor="[[hideRGBEditor]]"\n                                             hide-h-e-x-editor="[[hideHEXEditor]]"\n                                             hide-alpha-editor="[[hideAlphaEditor]]"\n                                             inverted="[[inverted]]"\n                                             locale="[[locale]]"\n                                             messages="[[messages]]"\n                                             name="[[name]]"\n                                             palette-colors="[[paletteColors]]"\n                                             palette-custom-colors="[[paletteCustomColors]]"\n                                             palette="[[palette]]"\n                                             right-to-left="[[rightToLeft]]"\n                                             theme="[[theme]]"\n                                             tooltip-display-mode="[[tooltipDisplayMode]]"\n                                             value="{{value}}"\n                                             value-format="[[valueFormat]]">\n                            </smart-color-panel>\n                            <div id="resizeBar" class="smart-drop-down-resize-bar" aria-label="Resize">\n                                <div></div>\n                            </div>\n                        </div>\n                    </div>\n                    <span class="smart-hint" id="hint">[[hint]]</span>\n                </div>'}propertyChangedHandler(e,t,o){const a=this;switch(e){case"editable":case"disabled":case"readonly":a.$.input.readOnly=a.disabled||a.readonly||!a.editable;break;case"value":a.$.colorPanel._isValidColor(a.value)&&a._applyValue(a.value);break;case"displayMode":a._applyValue(a.value);break;case"dropDownOpenMode":super.propertyChangedHandler(e,t,o),"dropDownButton"===o?a.$.actionButton.setAttribute("aria-label",a.value||a.placeholder):a.$.actionButton.removeAttribute("aria-label");break;case"resizeMode":a.$.dropDownContainer.setAttribute("resize-mode",a.resizeMode);break;case"valueDisplayMode":"none"===o?a.$.actionButton.setAttribute("role","presentation"):a.$.actionButton.removeAttribute("role");break;default:super.propertyChangedHandler(e,t,o)}"displayMode"===e&&a.$.colorPanel._hideControlsByPriority()}open(){const e=this,t=document.querySelectorAll("smart-drop-down-button, smart-color-picker");e.$.colorPanel._initializeOnOpening&&(delete e.$.colorPanel._initializeOnOpening,e.$.colorPanel._generateGridStructures(),e.$.colorPanel._applyValue(e.value),e.$.colorPanel._hideControlsByPriority());for(let o=0;o<t.length;o++)t[o]!==e&&t[o].opened&&t[o].close();e.$.colorPanel&&e.$.colorPanel.$container.hasClass("custom-color-selection")&&e.$.colorPanel._handleCancelButtonClick(),e._open()}blur(){this.$.input.blur()}focus(){this.$.input.focus()}_createElement(){const e=this;e.$.colorPanel._initializeOnOpening=!e.opened,e.$.colorPanel.wait=!1,e.$.colorPanel.setAttribute("role","presentation"),e.$.input.readOnly=e.disabled||e.readonly||!e.editable,e.editable&&(e.dropDownOpenMode="dropDownButton"),e._setAriaRelations(!0),"none"===e.valueDisplayMode?e.$.actionButton.setAttribute("role","presentation"):e.$.actionButton.removeAttribute("role"),e._applyValue(e.$.colorPanel.value),e._setFocusable()}_colorPanelChangeHandler(e){this._applyValue(e.detail.value),e.stopPropagation(),this.$.fireEvent("change",e.detail)}_cancelButtonHandler(e){const t=this;e.stopPropagation(),t.$.colorPanel.$.container.className.indexOf("custom-color-selection")>-1||t.close(),t.$.fireEvent(e.type,e.detail)}_customColorSelectionHandler(e){e.stopPropagation(),this._positionDetection.checkBrowserBounds("vertically"),this._positionDetection.positionDropDown(),this._positionDetection.checkBrowserBounds("horizontally"),this.$.fireEvent(e.type,e.detail)}_okButtonHandler(e){const t=this;e.stopPropagation(),t.$.colorPanel.$.container.className.indexOf("custom-color-selection")>-1||(t._applyValue(t.$.colorPanel.value),t.close()),t.$.fireEvent(e.type,e.detail)}_setFocusable(){const e=this;if(!e.disabled&&!e.unfocusable){let t=e.tabIndex>0?e.tabIndex:0;return e.$.input.tabIndex=t,void("dropDownButton"===e.dropDownOpenMode?e.$.dropDownButton.setAttribute("tabindex",t):e.$.dropDownButton.removeAttribute("tabindex"))}e.$.input.tabIndex=-1,e.$.dropDownButton.removeAttribute("tabindex")}_inputChangeHandler(e){e.preventDefault(),e.stopPropagation(),this.value=this.$.colorPanel.value=this.$.input.value}_applyValue(e){const t=this;t.value=t.$.colorPanel.value=t.$.colorSample.style.backgroundColor=t.$.input.value=e,e?(t.$colorSampleContainer.removeClass("no-color"),t.$.colorSample.setAttribute("aria-label",e)):(t.$colorSampleContainer.addClass("no-color"),t.$.colorSample.setAttribute("aria-label","No color")),t.label||t._ariaButton.setAttribute("aria-label",e||t.placeholder),"dropDownButton"===t.dropDownOpenMode&&t.$.actionButton.setAttribute("aria-label",e||t.placeholder)}_keyDownHandler(e){const t=this,o=t.shadowRoot||t.isInShadowDOM?e.composedPath()[0]:e.target,a=(t.shadowRoot||t.getRootNode()).activeElement||document.activeElement;if(!(t.disabled||t.readonly||a!==t&&a!==t.$.dropDownButton&&a!==t.$.input))switch(e.key){case"Enter":case" ":o!==t.$.input?t.opened&&"Enter"===e.key?(e.preventDefault(),t.close()):t.opened||t.readonly||"none"===t.dropDownOpenMode||(e.preventDefault(),t.open()):"Enter"===e.key&&(e.preventDefault(),t.$.colorPanel.value=t.$.input.value);break;case"ArrowUp":case"ArrowDown":if(e.altKey)return void(t.disabled||t.readonly||"none"===t.dropDownOpenMode||("ArrowDown"===e.key?t.open():t.close()));e.preventDefault();break;case"Escape":e.preventDefault(),t.close()}}})}});