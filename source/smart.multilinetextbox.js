
/* Smart UI v12.0.1 (2022-01-20) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-multiline-text-box",class extends Smart.TextBox{static get properties(){return{autoCapitalize:{value:"none",allowedValues:["none","words","characters"],type:"string"},autoComplete:{value:"off",allowedValues:["on","off"],type:"string"},autoExpand:{value:!1,type:"boolean"},cols:{value:20,type:"number?"},enterKeyBehavior:{value:"newLine",allowedValues:["submit","clearOnSubmit","newLine"],type:"string"},horizontalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},minLength:{value:0,type:"number"},resizable:{value:!1,type:"boolean"},rows:{value:5,type:"number?"},selectionDirection:{value:"none",allowedValues:["forward","backward","none"],type:"string"},selectionEnd:{value:0,reflectToAttribute:!1,type:"number"},selectionStart:{value:0,reflectToAttribute:!1,type:"number"},spellCheck:{value:!1,type:"boolean"},type:{value:"textarea",type:"string",defaultReflectToAttribute:!0,readonly:!0},verticalScrollBarVisibility:{type:"string",value:"auto",allowedValues:["auto","disabled","hidden","visible"]},wrap:{value:"soft",allowedValues:["hard","soft","off"],type:"string"}}}static get styleUrls(){return["smart.textbox.css","smart.multilinetextbox.css"]}static get listeners(){return{"document.mousemove":"_documentSelectionOutsideHandler","container.resize":"_handleScrollbarsDisplay","document.move":"_resizeMoveHandler","document.up":"_upHandler",focus:"_focusHandler","horizontalScrollBar.change":"_horizontalScrollbarHandler",keydown:"_keyDownHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler",resize:"_handleScrollbarsDisplay","resizeElement.down":"_resizeDownHandler",styleChanged:"_handleScrollbarsDisplay","input.change":"_textBoxChangeHandler","input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_textBoxKeyDownHandler","input.keyup":"_keyUpHandler","input.paste":"_textBoxChangeHandler","input.select":"_textBoxSelectHandler","input.touchmove":"_inputTouchmoveHandler","input.touchstart":"_inputTouchstartHandler",wheel:"_mouseWheelHandler","verticalScrollBar.change":"_verticalScrollbarHandler"}}attached(){const e=this;super.attached(),e._scrollView||(e._scrollView=new Smart.Utilities.Scroll(e.$.input,e.$.horizontalScrollBar,e.$.verticalScrollBar))}detached(){const e=this;super.detached(),e._scrollView&&(e._scrollView.unlisten(),delete e._scrollView)}static get requires(){return{"Smart.ScrollBar":"smart.scrollbar.js"}}template(){return'<div id="container" role="presentation">\n                    <span id="label" class="smart-label">[[label]]</span>\n                    <div id="innerContainer" class="smart-inner-container" role="presentation">\n                            <textarea class="smart-input" id="input"\n                                autocapitalize="[[autoCapitalize]]"\n                                autocomplete="off"\n                                cols="[[cols]]"\n                                disabled="[[disabled]]"\n                                maxlength="[[maxLength]]"\n                                minlength="[[minLength]]"\n                                name="[[name]]"\n                                placeholder="[[placeholder]]"\n                                readonly="[[readonly]]"\n                                required="[[required]]"\n                                rows="[[rows]]"\n                                spellcheck="[[spellCheck]]"\n                                wrap="[[wrap]]"\n                                aria-label="[[placeholder]]"\n                                autocomplete="[[inputPurpose]]"></textarea>\n                            <smart-scroll-bar id="verticalScrollBar" theme="[[theme]]" right-to-left="[[rightToLeft]]" animation="[[animation]]" disabled="[[disabled]]" orientation="vertical"></smart-scroll-bar>\n                            <smart-scroll-bar id="horizontalScrollBar" theme="[[theme]]" right-to-left="[[rightToLeft]]" animation="[[animation]]" disabled="[[disabled]]"></smart-scroll-bar>\n                            <div id="resizeElement" class="smart-resize-element" aria-label="Resize"></div>\n\n                            <textarea id="textBoxHidden"\n                            class="smart-text-box-hidden"\n                            autocapitalize="[[autoCapitalize]]"\n                            autocomplete="off"\n                            cols="[[cols]]"\n                            disabled="[[disabled]]"\n                            inner-h-t-m-l="[[value]]"\n                            maxlength="[[maxLength]]"\n                            minlength="[[minLength]]"\n                            name="[[name]]"\n                            placeholder="[[placeholder]]"\n                            readonly="[[readonly]]"\n                            required="[[required]]"\n                            rows="[[rows]]"\n                            spellcheck="[[spellCheck]]"\n                            wrap="[[wrap]]"></textarea>\n                    </div>\n                    <span id="hint" class="smart-hidden smart-hint">[[hint]]</span>\n                </div>'}propertyChangedHandler(e,t,l){const a=this;switch(e){case"autoExpand":a._autoExpandUpdate();break;case"displayMode":switch(l){case"escaped":a.$.input.value=a._toEscapedDisplayMode(a.value);break;default:a.$.input.value=a.value=a._toDefaultDisplayMode(a.$.input.value)}a._autoExpandUpdate(),a._handleScrollbarsDisplay();break;case"value":switch(a._preventProgramaticValueChange?(a._userValue="escaped"===a.displayMode?a._toDefaultDisplayMode(a.$.input.value):a.$.input.value,a._programmaticValue=l):a._userValue=a._programmaticValue=l,a.displayMode){case"escaped":a.$.input.value=a._toEscapedDisplayMode(a._userValue);break;default:a.$.input.value=a._userValue}a._oldValue=t,a._autoExpandUpdate(),a._handleScrollbarsDisplay();break;case"horizontalScrollBarVisibility":case"verticalScrollBarVisibility":case"singleLine":case"wrap":case"resizable":case"placeholder":a._autoExpandUpdate(),a._handleScrollbarsDisplay();break;case"selectionEnd":case"selectionStart":a._handleSelectedText();break;case"rows":case"cols":a._updateSizeRowsCols();break;case"disabled":a._setFocusable(),a._ariaPropertyChangedHandler("disabled",l);break;case"animation":break;case"readonly":a._ariaPropertyChangedHandler("readonly",l);break;default:super.propertyChangedHandler(e,t,l)}}selection(e){const t=this;let l=t.$.input.selectionStart,a=t.$.input.selectionEnd,i=t.value;return"escaped"===t.displayMode?(i=t.$.input.value.substring(l,a),"escaped"===e?i:t._toDefaultDisplayMode(i)):"escaped"===e?(i=i.substring(l,a),t._toEscapedDisplayMode(i)):(i=i.substring(l,a),i)}select(e,t){const l=this,a=Array.from(arguments).slice(0,2);let i,n;for(let e in a)a[e]=parseInt(a[e])||0;return 2===a.length?(i=Math.min([e,t]),n=Math.max([e,t])):i=a[0],2===a.length?(i=parseInt(i),i=i>0?i<l.$.input.length?l.$.input.length:i:0,n<i?n=i:n>l.$.input.length&&(i=0),l.$.input.focus(),void l.$.input.setSelectionRange(i,n)):1===a.length?(l.$.input.focus(),void l.$.input.setSelectionRange(i,i+1)):void l.$.input.select()}_autoExpandUpdate(){const e=this,t=e.$.input,l=e.$.textBoxHidden,a=e.$.verticalScrollBar;if(!e.autoExpand)return void(t.style.height=a.style.height=l.style.height=null);const i=parseFloat(window.getComputedStyle(e).getPropertyValue("max-height"));l.style.height=0,l.value=t.value;let n=0;e.resizeTrigger&&(n=e.resizeTrigger.clientHeight,n===e.clientHeight&&(n=0)),t.style.height=a.style.height=(isNaN(i)?l.scrollHeight:Math.min((i||0)-n,l.scrollHeight))+"px"}_blurHandler(){const e=this;e._outsideAutoScroll&&clearInterval(e._outsideAutoScroll),e.removeAttribute("focus"),e._preventProgramaticValueChange=!1,e._oldValue=e.value,e.value=e._userValue||e.value,e.$.fireEvent("blur")}_createElement(){const e=this;e.$.input.id||(e.$.input.id=e.id+"Input"),e.autoFocus&&(navigator.userAgent.match(/Edge/)?setTimeout((function(){e.$.input.focus(),e.setAttribute("focus","")}),10):(e.$.input.focus(),e.setAttribute("focus","")));const t=e.$.input.innerHTML;e.value?e.$.input.innerHTML="escaped"===e.displayMode?e._toEscapedDisplayMode(e.value):e.value:t.length>0&&"escaped"===e.displayMode?(e.value=t,e.$.input.innerHTML=e._toEscapedDisplayMode(t)):t.length>0&&(e.value=t),e._setFocusable(),e._syncTextBoxContentOnInitialization(),e._scrollView=new Smart.Utilities.Scroll(e.$.input,e.$.horizontalScrollBar,e.$.verticalScrollBar),e._autoExpandUpdate(),e._handleScrollbarsDisplay(),e._initializationValue=e._oldValue=e.value,e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e._handleHintContainer(),e.setAttribute("role","textbox"),e.setAttribute("aria-multiline",!0),e.setAttribute("aria-describedby",e.$.hint.id),e.setAttribute("aria-labelledby",e.$.label.id),e.$.verticalScrollBar.setAttribute("aria-controls",e.$.input.id),e.$.horizontalScrollBar.setAttribute("aria-controls",e.$.input.id)}_handleScrollbarsDisplay(e){const t=this,l=t.$.input;requestAnimationFrame((()=>{switch(t._autoExpandUpdate(),t.horizontalScrollBarVisibility){case"disabled":t.$container.addClass("hscroll"),t.$.horizontalScrollBar.disabled=!0;break;case"hidden":t.$container.removeClass("hscroll");break;case"visible":t.$container.addClass("hscroll"),t._scrollView.scrollWidth=l.scrollWidth-l.clientWidth,t._scrollView.scrollTo(t.$.input.scrollLeft,!0),t.$.horizontalScrollBar.disabled=!1;break;default:l.scrollWidth>l.clientWidth?(t.$container.addClass("hscroll"),t._scrollView.scrollWidth=l.scrollWidth-l.clientWidth,e&&"resize"===e.type?t.$.input.scrollLeft=t._scrollView.scrollLeft:t._scrollView.scrollTo(t.$.input.scrollLeft,!0)):t.$container.removeClass("hscroll"),t.$.horizontalScrollBar.disabled=!1}switch(t.verticalScrollBarVisibility){case"disabled":t.$container.addClass("vscroll"),t.$.verticalScrollBar.disabled=!0;break;case"hidden":t.$container.removeClass("vscroll");break;case"visible":t.$container.addClass("vscroll"),t._scrollView.scrollHeight=l.scrollHeight-l.clientHeight,t._scrollView.scrollTo(t.$.input.scrollTop),t.$.verticalScrollBar.disabled=!1;break;default:l.scrollHeight>l.clientHeight?(t.$container.addClass("vscroll"),t._scrollView.scrollHeight=l.scrollHeight-l.clientHeight,e&&"resize"===e.type?t.$.input.scrollTop=t._scrollView.scrollTop:t._scrollView.scrollTo(t.$.input.scrollTop)):t.$container.removeClass("vscroll"),t.$.verticalScrollBar.disabled=!1}}))}_focusHandler(e){const t=this;if(!t.disabled){if(e.target===t)return t.$.input.focus(),void(t._edgeSelect=!1);if(t.setAttribute("focus",""),t.selectAllOnFocus)if(navigator.userAgent.match(/Edge/)){const e=t.$.input.scrollTop;if(t._edgeSelect)return void(t._edgeSelect=!1);setTimeout((function(){t._edgeSelect=!0,t.$.input.select(),t.$.input.scrollTop=e}),5)}else t.$.input.select();t.$.fireEvent("focus")}}_getScrollLeft(e,t){const l=this;return l.rightToLeft?(Smart.Utilities.Core.Browser.Chrome?(t||(t=l.$.input.scrollWidth-l.$.input.offsetWidth),e=t-e):e*=-1,e):e}_horizontalScrollbarHandler(e){const t=this;t.disabled||"hidden"===t.horizontalScrollBarVisibility||"disabled"===t.horizontalScrollBarVisibility||(e.stopPropagation(),t.$.input.scrollLeft=t._getScrollLeft(e.detail.value))}_keyDownHandler(e){const t=this,l=e.key,a=e.shiftKey,i=e.ctrlKey,n=t.$.input.value;function r(l){let a=t.$.input.selectionStart,i=t.$.input.selectionEnd,n=t.$.input.value;e.preventDefault(),t.$.input.value=n.substring(0,a)+l+n.substring(i,n.length),t.value=t._toDefaultDisplayMode(t.$.input.value),t.$.input.selectionStart=a+2,t.$.input.selectionEnd=a+2}if(t.allowVerticalScrollbar&&t.$.input.selectionEnd>t.$.input.value.length-5&&t._scrollView.scrollTo(t._scrollView.scrollTop+(e.deltaY<0?-t.offsetHeight:t.offsetHeight)),l.indexOf("Arrow")>-1)e.stopPropagation();else switch(l){case"Enter":if("newLine"===t.enterKeyBehavior&&!i&&!a||"newLine"!==t.enterKeyBehavior&&(i||a)){"escaped"===t.displayMode&&r("\\n");break}e.preventDefault(),t._userValue="escaped"===t.displayMode?t._toDefaultDisplayMode(t.$.input.value):t.$.input.value,t.value=t._userValue,("submit"===t.enterKeyBehavior||"clearOnSubmit"===t.enterKeyBehavior||""!==n&&t._userValue!==t._oldValue)&&t.$.fireEvent("change",{oldValue:t._oldValue,value:n,type:"submit"}),"clearOnSubmit"===t.enterKeyBehavior&&(t.$.input.value=""),t._oldValue=t.value=t._toDefaultDisplayMode(t.$.input.value),t._submitted=!0,"escaped"===t.displayMode&&t.enterKeyBehavior.toLowerCase().indexOf("submit")<0&&!i&&!a&&r("\\n"),("submit"===t.enterKeyBehavior||"newLine"===t.enterKeyBehavior&&i)&&t.$.input.blur();break;case"Escape":if("none"===t.escKeyMode)return;switch(t.escKeyMode){case"none":break;case"clearValue":t.value=t.$.input.value="";break;case"previousValue":t.$.input.value="escaped"===t.displayMode?t._toEscapedDisplayMode(t._oldValue):t._oldValue}break;case" ":"escaped"===t.displayMode&&r("\\s");break;case"Backspace":if("escaped"===t.displayMode&&t.$.input.selectionStart===t.$.input.selectionEnd){let e=t.$.input.selectionStart;"\\"!==n[e-2]||"s"!==n[e-1]&&"n"!==n[e-1]||(t.$.input.value=t.$.input.value.substring(0,e-2)+t.$.input.value.substring(e-2,t.$.input.value.length),t.$.input.selectionStart=e-2)}t._scrollView&&t._handleScrollbarsDisplay()}}_keyUpHandler(e){const t=this;switch(e.key){case"ArrowLeft":case"ArrowUp":case"ArrowDown":t._handlePointerInEscapedSymbol();break;case"ArrowRight":t._handlePointerInEscapedSymbol("next")}t._userValue="escaped"===t.displayMode?t._toDefaultDisplayMode(t.$.input.value):t.$.input.value,t._submitKeyUpHandler()}_textBoxKeyDownHandler(e){const t=this,l=e.key;t._scrollView&&t._handleScrollbarsDisplay(),t.value&&t.value.length>0?t.$.addClass("has-value"):t.$.removeClass("has-value"),-1===["Enter","Escape"].indexOf(l)&&(t._preventProgramaticValueChange=!0),["ArrowLeft","ArrowUp","ArrowDown","ArrowRight"].indexOf(l)>-1&&t._scrollView.scrollTo(t.$.input.scrollTop),["PageUp","PageDown"].indexOf(l)>-1&&Smart.Utilities.Core.Browser.Chrome&&("PageUp"===e.key&&(t.$.input.setSelectionRange(0,0),t.$.input.scrollTop=0),"PageDown"===e.key&&(t.$.input.setSelectionRange(t.$.input.value.length,t.$.input.value.length),t.$.input.scrollTop=t._scrollView.verticalScrollBar.max),e.preventDefault())}_mouseWheelHandler(e){const t=this;t.disabled||t.$.verticalScrollBar.disabled||(t._scrollView.scrollTo(t._scrollView.scrollTop+(e.deltaY<0?-t.offsetHeight:t.offsetHeight)),t.$.input.scrollTop+=e.deltaY<0?-t.offsetHeight:t.offsetHeight,t.$.input.scrollTop>0&&e.preventDefault())}_syncTextBoxContentOnInitialization(){const e=this;let t;t=""===e.value?e.innerHTML:e.value,"escaped"!==e.displayMode?e.$.input.value=e.value=e._initializationValue=t:t.match(/\r\n|\n\r|\n|\r|\s|\t|\f|\r/g)?(e.value=e._initializationValue=t,e.$.input.value=e._toEscapedDisplayMode(t)):(e.value=e._initializationValue=e._toDefaultDisplayMode(t),e.$.input.value=t)}_textBoxChangeHandler(e){const t=this,l=e.clipboardData||e.originalEvent&&e.originalEvent.clipboardData||window.clipboardData,a=t.value;if("escaped"===t.displayMode){const a=t.$.input.selectionStart,i=t.$.input.selectionEnd;if(l){let n=l.getData("text"),r=t.$.input.value;e.preventDefault(),n=t._toEscapedDisplayMode(n),t.$.input.value=r.substring(0,a)+n+r.substring(i,r.length)}t.value=t._toDefaultDisplayMode(t.$.input.value)}else t.value=t.$.input.value;t._handleScrollbarsDisplay(),t.value.length>0?t.$.addClass("has-value"):t.$.removeClass("has-value"),l||t.$.fireEvent("change",{value:t.value,oldValue:a,type:"blur"}),t._handleHintContainer()}_inputTouchmoveHandler(e){const t=this;if((t._resizeStarted||t._touchmoveInside)&&e.cancelable)return e.preventDefault(),void e.stopPropagation();const l=t.$.container.classList.contains("vscroll"),a=t._touchCoords;if(!t.$.container.classList.contains("hscroll")&&!l||!a)return;const i=t._scrollView,n=e.touches[0];let r,o,s,c;t._touchCoords=[n.pageX,n.pageY],l?(r=i.scrollTop,o=i.scrollHeight,s=n.pageY,c=a[1]):(r=i.scrollLeft,o=i.scrollWidth,s=n.pageX,c=a[0]);const u=parseFloat(s.toFixed(5)),d=parseFloat(c.toFixed(5));0===r&&u>=d||r===o&&u<=d||(s!==c&&(t._touchmoveInside=!0),e.cancelable&&(e.preventDefault(),e.stopPropagation()))}_inputTouchstartHandler(e){const t=e.touches[0];this._touchCoords=[t.pageX,t.pageY]}_resizeDownHandler(){const e=this;!e.disabled&&e.resizable&&(e._resizeStarted=!0,e.$container.addClass("smart-resize"),e.readonly||e.$.input.setAttribute("readonly",""))}_resizeMoveHandler(e){const t=this;if(t.disabled||!t.resizable||!t._resizeStarted)return;const l=t.getBoundingClientRect(),a=50,i=50,n=t.rightToLeft?l.width+l.left-e.clientX:e.clientX-l.left,r=e.clientY-l.top;n>a&&(t.style.width=n+"px"),r>i&&(t.style.height=r+"px")}_updateSizeRowsCols(){const e=this;e.$.container.removeAttribute("style"),setTimeout((function(){if(!("disabled"!==e.horizontalScrollBarVisibility&&"hidden"!==e.horizontalScrollBarVisibility||"disabled"!==e.verticalScrollBarVisibility&&"hidden"!==e.verticalScrollBarVisibility))return;const t=e.getBoundingClientRect();e.$.container.style.width=t.width+"px",e.$.container.style.height=t.height+"px"}),0)}_upHandler(e){const t=this;delete t._touchCoords,delete t._touchmoveInside,t._selectionStarted=!1,t.disabled||(e.originalEvent.target!==t.$.input?(t.$container.removeClass("smart-resize"),t.readonly||t.$.input.removeAttribute("readonly"),t._resizeStarted&&t.$.input.focus(),t._resizeStarted=!1):t._handlePointerInEscapedSymbol())}_verticalScrollbarHandler(e){const t=this;t.disabled||"disabled"===t.verticalScrollBarVisibility||"hidden"===t.verticalScrollBarVisibility||(e.stopPropagation(),t.$.input.scrollTop=e.detail.value)}_documentDownHandler(e){const t=this;t._selectionStarted=!1,e.originalEvent&&t.$.input.contains(e.originalEvent.target)&&(t._selectionStarted=!0,t._selectionStartTime=new Date,t._pointerDown={pageX:e.pageX,pageY:e.pageY},t._edgeSelect=!1)}_documentSelectionOutsideHandler(e){const t=this;if(clearInterval(t._outsideAutoScroll),!t._selectionStarted)return;const l=t.$.input.getBoundingClientRect(),a=l.y+10,i=l.y+l.height-10;function n(l){const a=t.getBoundingClientRect(),i=document.documentElement,n=l?"Left":"Top";(l?a.left+i.scrollLeft-e.pageX:a.top+i.scrollTop-e.pageY)>0?(t.$.input["scroll"+n]-=10,t._scrollView["scroll"+n]-=10):(t.$.input["scroll"+n]+=10,t._scrollView["scroll"+n]+=10)}e.pageY>a&&e.pageY<i||!(new Date-t._selectionStartTime<300)&&(Math.abs(t._pointerDown.pageX-e.pageX)>=3||Math.abs(t._pointerDown.pageY-e.pageY)>=3)&&(t._outsideAutoScroll=setInterval((function(){n(),n(!0)}),10))}_selectStartHandler(){}_styleChangedHandler(){}});