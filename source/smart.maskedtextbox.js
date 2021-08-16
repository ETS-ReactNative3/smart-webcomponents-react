
/* Smart UI v10.0.1 (2021-08-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-masked-text-box",class extends Smart.BaseElement{static get properties(){return{allowPromptAsInput:{value:!1,type:"boolean"},asciiOnly:{value:!1,type:"boolean"},autoFocus:{value:!1,type:"boolean"},autoShowMask:{value:!1,type:"boolean"},cutCopyMaskFormat:{value:"excludePromptAndLiterals",allowedValues:["excludePromptAndLiterals","includePrompt","includeLiterals","includePromptAndLiterals"],type:"string"},hidePromptOnLeave:{value:!1,type:"boolean"},hint:{value:"",reflectToAttribute:!0,type:"string"},isOverwriteMode:{value:!1,type:"boolean"},label:{value:"",reflectToAttribute:!0,type:"string"},mask:{value:"#####",type:"string"},maskCompleted:{value:!1,type:"boolean"},maskFull:{value:!1,type:"boolean"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},name:{value:"",type:"string"},placeholder:{value:"",type:"string"},promptChar:{value:"_",type:"string"},rejectInputOnFirstFailure:{value:!1,type:"boolean"},resetOnPrompt:{value:!1,type:"boolean"},resetOnSpace:{value:!1,type:"boolean"},selectAllOnFocus:{value:!1,type:"boolean"},textMaskFormat:{value:"excludePromptAndLiterals",allowedValues:["excludePromptAndLiterals","includePrompt","includeLiterals","includePromptAndLiterals"],type:"string"},validation:{value:null,type:"function?",reflectToAttribute:!1},value:{value:null,reflectToAttribute:!0,type:"string?"}}}static get listeners(){return{mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","input.copy":"_cutCopyHandler","input.change":"_textBoxChangeHandler","input.cut":"_cutCopyHandler","input.paste":"_textBoxPasteHandler","input.keydown":"_textBoxKeyDownHandler","input.keyup":"_textBoxKeyUpHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}static get styleUrls(){return["smart.textbox.css","smart.maskedtextbox.css"]}template(){return'<div id="container" role="presentation"><span id="label" inner-h-t-m-l="[[label]]" class="smart-hidden smart-label"></span><input class="smart-input" type="text" id="input"\n                   autocomplete="off"\n                   autocorrect="off"\n                   autocapitalize="off"\n                   disabled="[[disabled]]"\n                   maxlength="[[maxLength]]"\n                   minlength="[[minLength]]"\n                   name="[[name]]"\n                   placeholder="[[placeholder]]"\n                   readonly="[[readonly]]" /><span id="hint" inner-h-t-m-l="[[hint]]" class="smart-hidden smart-hint"></span></div>'}propertyChangedHandler(e,t,a){const r=this;let l;switch(e){case"hidePromptOnLeave":a&&!r._focused?r._hidePrompt():r._promptHidden&&r._showPrompt();break;case"maxLength":r.mask.length>0&&(r.maxLength=t);break;case"maskCompleted":case"maskFull":r[e]=t;break;case"promptChar":r._updatePromptChar();break;case"placeholder":r._isPlaceholderRequired()?(r.$.input.value="",r.$.removeClass("has-value")):r._updatePromptChar(),r._updatePromptChar();break;case"mask":l=r._getValueWithTextMaskFormat({start:0,end:r._mask.length},"excludePromptAndLiterals"),r._isPlaceholderRequired()?(r.$.input.value="",r.$.removeClass("has-value")):(r._initializeMask(),r._setValueToMask(l),r._isMobileChrome&&document.activeElement===r.$.input||r._setMask(),r.maxLength=r._mask.length,r._promptHidden&&r._hidePrompt());break;case"value":r._overwrite=!0,r._setValueToMask(a),r._overwrite=!1,r._isMobileChrome&&document.activeElement===r.$.input||r._setMask(),r._promptHidden&&r._hidePrompt(),r._updateMaskFullAndCompleted();break;case"disabled":case"unfocusable":r._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(e,t,a)}r.value=r._getValueWithTextMaskFormat({start:0,end:r._mask.length},r.textMaskFormat)}render(){this._createElement(),super.render()}focus(){this.$.input.focus()}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.$.input.tabIndex=-1:e.$.input.removeAttribute("tabindex")}_createElement(){const e=this;e.autoFocus&&e.$.input.focus(),e.$.addClass("smart-input"),e._setFocusable(),e._initializeMask(),e._updateMaxLength(),e._isPlaceholderRequired()?(e.$.input.value="",e.$.removeClass("has-value")):(e._setValueToMask(e.value),e._isMobileChrome&&document.activeElement===e.$.input||e._setMask(),e._updateMaskFullAndCompleted(),e.$.addClass("has-value")),e.$.input.selectionStart=e.$.input.selectionEnd=0,e._initializationValue=e._value=e.value,e._rejectInput=!1,e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.hint.id||(e.$.hint.id=e.id+"Hint"),e.hidePromptOnLeave&&!e._focused&&e._hidePrompt();const t=Smart.Utilities.Core;e._isMobileChrome=t.isMobile&&t.Browser.Chrome,e.setAttribute("role","presentation"),e.$.input.setAttribute("aria-describedby",e.$.hint.id),e.$.input.setAttribute("aria-labelledby",e.$.label.id)}_blurHandler(){const e=this,t=e._isPlaceholderRequired();e.disabled||(e._valueBeforeChange!==e.value&&(e.$.fireEvent("change",{value:e.value,oldValue:e._valueBeforeChange}),e._valueBeforeChange=""),e._isMobileChrome&&(e._overwrite=!0,e._setValueToMask(e.$.input.value),e._overwrite=!1,e._setMask()),e._focused=!1,e._hidePrompt(),e._validateMaskValue(),e.removeAttribute("focus"),e.$.input.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),t&&(e.$.input.value="",e.$.removeClass("has-value")),e.$.fireEvent("blur"))}_updateMaskFullAndCompleted(){const e=this;let t=!0,a=!0,r=!1;for(let l=0;l<e._mask.length;l++){const s=e._mask[l];"mask"===s.type&&(s.required&&(r=!0),""===s.character&&(s.required&&(a=!1),t=!1))}t||!a||r||(a=!1),e.maskFull=t,e.maskCompleted=a}_isPlaceholderRequired(){const e=this,t=e.value&&e.value.length>0,a=e.placeholder.length>0;return!t&&(a||e.autoShowMask)}_cleanMask(e,t){const a=this;e=e||0,t=t||a._mask.length;for(let r=e;r<t;r++)"mask"===a._mask[r].type&&(a._mask[r].character="")}_cutCopyHandler(e,t){const a=this,r=parseInt(a.$.input.selectionStart,10),l=parseInt(a.$.input.selectionEnd,10),s=a._getValueWithTextMaskFormat({start:r,end:l});return window.clipboardData&&(window.clipboardData.setData("text/plain",s),window.clipboardData.setData("text/html",s)),e&&a._preventDefault(e),"Copy"===t||(a._cleanMask(r,l),a.value=a._getValueWithTextMaskFormat({start:0,end:a._mask.length},a.textMaskFormat),a._isMobileChrome&&document.activeElement===a.$.input||a._setMask(),a.$.input.selectionStart=a.$.input.selectionEnd=r,a.maskFull=a.maskCompleted=!1),s}_documentUpHandler(){}_deleteHandler(e){const t=this,a=t.$.input.selectionStart,r=t.$.input.selectionEnd,l=e.key;let s=a;if(t._preventDefault(e),a===r)if("Backspace"===l||"Unidentified"===l)for(let e=a;e>0;e--){const r=t._mask[e-1];if("mask"===r.type){s=e-1,r.character="";break}s=a-1;break}else for(let e=a;e<t._mask.length;e++){const r=t._mask[e];if("mask"===r.type){s=e+1,r.character="";break}s=a+1;break}else t._cleanMask(a,r),"Delete"===l&&(s=r);t._isMobileChrome&&document.activeElement===t.$.input||t._setMask(),t._updateMaskFullAndCompleted(),t.value=t._getValueWithTextMaskFormat({start:0,end:t._mask.length},t.textMaskFormat),t.$.input.selectionStart=t.$.input.selectionEnd=s}_findNextOccupiedPosition(e){const t=this,a=t._mask.length;let r=e;for(let l=e;l<a;l++){let e=t._mask[l];if("mask"!==e.type||""!==e.character)break;r++}return r}select(){this.$.input.select()}_focusHandler(e){const t=this;if("INPUT"===e.context.nodeName.toUpperCase()){if(!t.disabled)if(t.setAttribute("focus",""),t.selectAllOnFocus&&t.$.input.select(),t._focused=!0,t._isMobileChrome)t._removeMask();else{if(t._showPrompt(),t._isPlaceholderRequired()){t._initializeMask(),t._setValueToMask(t.value),t._setMask();const e=t._getEditableSelectionStart(0);t.$.input.selectionStart=t.$.input.selectionEnd=e}t.$.fireEvent("focus")}}else t.$.input.focus()}_setMask(){const e=this;let t="";for(let a=0;a<e._mask.length;a++){const r=e._mask[a];let l;if("literal"===r.type||"separator"===r.type||"placeholder"===r.type||"currency"===r.type)l=r.character;else if("mask"===r.type&&""!==r.character)switch(r.escapeSymbol){case">":l=r.character.toUpperCase();break;case"<":l=r.character.toLowerCase();break;case"|":case"\\":default:l=r.character}else l=r.defaultCharacter;t+=l}e.$.input.value=t}_removeMask(){const e=this;let t="";for(let a=0;a<e._mask.length;a++){const r=e._mask[a];r.character!==r.defaultCharacter&&(t+=r.character)}e.$.input.value=t}_getEditableSelectionStart(e,t){const a=this;for(let r=e;r<a._mask.length;r++){const e=a._mask[r];if("mask"===e.type&&(""===e.character||a.isOverwriteMode||" "===t&&a.resetOnSpace||t===a.promptChar&&a.resetOnPrompt))return r}return-1}_getNonEditableSelectionStart(e,t){const a=this;for(let r=e;r<a._mask.length;r++){const e=a._mask[r];if("mask"!==e.type&&e.character===t)return r}return-1}_getValueWithTextMaskFormat(e,t){const a=this,r=e?e.start:0,l=e?e.end:a._mask.length||a.$.input.value.length;let s="";if("includePromptAndLiterals"===(t=t||a.cutCopyMaskFormat))return a.$.input.value.substring(r,l);for(let e=r;e<l;e++){const r=a._mask[e];switch(t){case"excludePromptAndLiterals":if("mask"!==r.type)continue;s=""===r.character?s+" ":s+r.character;break;case"includePrompt":if("mask"!==r.type)continue;s=""===r.character?s+r.defaultCharacter:s+r.character;break;case"includeLiterals":if("mask"===r.type&&""===r.character)continue;s+=r.character}}return s.trim()}_hidePrompt(){const e=this,t=new RegExp(e.promptChar,"g");!e.disabled&&e.hidePromptOnLeave&&0!==e.mask.length&&(e.$.input.value=e.$.input.value.replace(t," "),e._promptHidden=!0)}_initializeMask(){const e=this;let t,a=e.mask.length;if(e._mask=[],void 0!==e.mask&&null!==e.mask&&0!==e.mask.length)for(let r=0;r<a;r++){const a=e.mask.charAt(r);let l={};switch(l.defaultCharacter=e.promptChar,a){case"0":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="0",l.regex="\\d",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"9":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="9",l.regex="(\\d|\\s)",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"#":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="#",l.regex="(\\d|\\s|[+]|[-])",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"L":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="L",l.regex="([a-zA-Zа-яА-Я])",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"?":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="?",l.regex="[a-zA-Zа-яА-Я]?",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"&":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="&",l.regex="[^\\s]",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"C":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="C",l.regex=".",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"A":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="A",l.regex="[a-zA-Zа-яА-Я0-9]",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"a":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="a",l.regex="[a-zA-Zа-яА-Я0-9]?",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"Z":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="Z",l.regex="[a-zA-Z0-9]",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"z":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="z",l.regex="[a-zA-Z0-9]?",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"Y":l.editable=!0,l.required=!0,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="Y",l.regex="[a-zA-Z]",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case"y":l.editable=!0,l.required=!1,l.escapeSymbol=t,l.type="\\"===l.escapeSymbol?"literal":"mask",l.maskCharacter="y",l.regex="[a-zA-Z]?",l.character="\\"===l.escapeSymbol?l.maskCharacter:"",l.defaultCharacter=e.promptChar,t=null;break;case".":l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="placeholder",l.maskCharacter=".",l.regex=null,l.character=".",l.defaultCharacter=e.promptChar,t=null;break;case",":l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="placeholder",l.maskCharacter=",",l.regex=null,l.character=",",l.defaultCharacter=e.promptChar,t=null;break;case":":l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="separator",l.maskCharacter=":",l.regex=null,l.character=":",l.defaultCharacter=e.promptChar,t=null;break;case"/":l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="separator",l.maskCharacter="/",l.regex=null,l.character="/",l.defaultCharacter=e.promptChar,t=null;break;case"$":l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="currency",l.maskCharacter="$",l.regex=null,l.character="$",l.defaultCharacter=e.promptChar,t=null;break;case"<":t?"|"===t?t=null:"\\"===t?(l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="literal",l.maskCharacter="<",l.regex="<",l.character="<",l.defaultCharacter=e.promptChar,t=null):t="<":t="<";break;case">":t?"|"===t?t=null:"\\"===t?(l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="literal",l.maskCharacter=">",l.regex=">",l.character=">",l.defaultCharacter=e.promptChar,t=null):t=">":t=">";break;case"|":t&&"\\"===t?(l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="literal",l.maskCharacter="|",l.regex="|",l.character="|",l.defaultCharacter=e.promptChar,t=null):t="|";break;case"\\":t&&"\\"===t?(l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="literal",l.maskCharacter="\\",l.regex="\\",l.character="\\",l.defaultCharacter=e.promptChar,t=null):t="\\";break;default:l.editable=!1,l.required=!0,l.escapeSymbol=t,l.type="literal",l.maskCharacter=a,l.regex=null,l.character=a,l.defaultCharacter=a,t=null}t||l.type&&e._mask.push(l)}}_keyDownHandler(){}_validateInput(e,t){const a=this._mask[t];return new RegExp(a.regex).test(e)}_setValueToMask(e,t){const a=this,r=e||"",l=r.length,s=t&&t.start?t.start:0,n=t&&t.end?t.end:a._mask.length;let o=s,i=0;for(;o<n&&i<l;)"mask"===a._mask[o].type&&i++,(a._setCharAtPosition(r.charAt(i-1),o)||"mask"!==a._mask[o].type)&&o++;if(o<n)for(let e=o;e<n;e++)"mask"===a._mask[e].type&&(a._mask[e].character="");t&&(t.start=o)}_preventDefault(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()}_showPrompt(){const e=this;!e.disabled&&e._promptHidden&&(e._isMobileChrome&&document.activeElement===e.$.input||e._setMask())}_textBoxChangeHandler(e){const t=this;t.disabled||t.readonly||(t.value=t._getValueWithTextMaskFormat({start:0,end:t._mask.length},t.textMaskFormat),t._valueBeforeChange!==t.value&&(t.$.fireEvent("change",{value:t.value,oldValue:t._valueBeforeChange}),t._valueBeforeChange="",t._validateMaskValue()),e&&e.stopPropagation())}_textBoxKeyDownHandler(e){const t=this,a=e.key;if(t._isMobileChrome)return;const r=e.ctrlKey,l=t.$.input.selectionEnd,s=new RegExp("xxx[\0-]+xxx");let n=t.$.input.selectionStart;if(r&&["KeyA","KeyC","KeyV","KeyX"].indexOf(e.code)>-1){const a=function(e,a){const r=document.createElement("textarea");r.style.position="absolute",r.style.left="-1000px",r.style.top="-1000px",document.body.appendChild(r),r.focus(),"Paste"===e?setTimeout((function(){let e=r.value;0===e.length&&window.clipboardData&&(r.value=window.clipboardData.getData("Text"),e=r.value),r.parentNode.removeChild(r),t.$.input.focus(),a(e)}),25):(r.value=t._cutCopyHandler(null,e),r.focus(),r.setSelectionRange(0,r.value.length),setTimeout((function(){document.designMode="off",r.focus(),r.parentNode.removeChild(r),t.$.input.focus()}),25),window.clipboardData&&window.clipboardData.setData("Text",r.value))};switch(e.code){case"KeyA":t.$.input.setSelectionRange(0,t.$.input.value.length);break;case"KeyC":a("Copy");break;case"KeyV":a("Paste",(function(e){const a=t.context;t.context=t,t._textBoxPasteHandler(null,e),t.context=a}));break;case"KeyX":a("Cut")}return}if("Backspace"===a)return t._deleteHandler(e),void t._updateMaskFullAndCompleted();if("Delete"===a)return t._deleteHandler(e),void t._updateMaskFullAndCompleted();if(!t.allowPromptAsInput&&a===t.promptChar)return void t._preventDefault(e);if(t.disabled||t.readonly||t.asciiOnly&&!s.test(a)||!/^[a-zA-ZÀ-ÿа-яА-Я0-9.!@?#"$%&:';()*\+,\/;\-=[\\\]\^_{|}<>~` ]+$/.test(a)||a.length>1)return;if(t._preventDefault(e),n===l&&n===t.$.input.value.length)return;if(" "===a&&!t.resetOnSpace)return;n=t._getEditableSelectionStart(n,a);const o=function(){n=t._getNonEditableSelectionStart(t.$.input.selectionStart,a),-1!==n&&(t.$.input.selectionStart=t.$.input.selectionEnd=n+1)};-1!==n&&t._setCharAtPosition(a,n)?(t._isMobileChrome&&document.activeElement===t.$.input||t._setMask(),t._updateMaskFullAndCompleted(),t.$.input.selectionStart=t.$.input.selectionEnd=n+1):o()}_textBoxKeyUpHandler(){const e=this,t=e.value;e.value=e._getValueWithTextMaskFormat({start:0,end:e._mask.length},e.textMaskFormat),t!==e.value&&e.$.fireEvent("changing",{value:e.value,oldValue:t})}_textBoxPasteHandler(e,t){const a=this,r=a.$.input.value,l=a.$.input.selectionStart;let s,n=a.$.input.selectionEnd;if(e&&a._preventDefault(e),window.clipboardData&&window.clipboardData.getData?s=window.clipboardData.getData("Text"):e&&e.clipboardData&&e.clipboardData.getData?s=e.clipboardData.getData("text/plain"):t&&(s=t),n-l!==r.length){if(l===n&&(a.$.input.selectionEnd=n=a._mask.length),a.rejectInputOnFirstFailure){let e=0;for(let t=l;t<n;t++)if("mask"===a._mask[t].type){if(!a._validateInput(s.charAt(e),t))return void(a.$.input.selectionStart=a.$.input.selectionEnd=l);if(e++,e>s.length)break}}const e={start:l,end:n};a._overwrite=!0,a._setValueToMask(s,e),a._isMobileChrome&&document.activeElement===a.$.input||a._setMask(),a._updateMaskFullAndCompleted(),a.$.input.selectionStart=a.$.input.selectionEnd=e.start,a.value=a._getValueWithTextMaskFormat({start:0,end:a._mask.length},a.textMaskFormat)}}_setCharAtPosition(e,t){const a=this,r=a._mask[t];if(" "===e&&a.resetOnSpace&&(e=""),"mask"!==r.type||a.readonly||a.disabled||!r.editable)return!1;if(""===e&&!a.resetOnSpace)return!1;if(e===a.promptChar&&!a.resetOnPrompt&&a.allowPromptAsInput)return!1;if(!a.isOverwriteMode&&""!==e&&e!==a.promptChar&&""!==r.character&&!a._overwrite)return!1;const l=r.regex;if(l){if(new RegExp(l,"i").test(e)){switch(r.escapeSymbol){case">":e=e.toUpperCase();break;case"<":e=e.toLowerCase()}return a._mask[t].character=e,!0}return a.resetOnSpace&&""===e?(a._mask[t].character=e,!0):!(!a.resetOnPrompt||e!==a.promptChar||!a.allowPromptAsInput||(a._mask[t].character="",0))}return!1}_updateMaxLength(){const e=this;e._mask.length>0&&(e.maxLength=e._mask.length)}_updatePromptChar(){const e=this;for(let t=0;t<e._mask.length;t++)e._mask[t].defaultCharacter=e.promptChar;e._isMobileChrome&&document.activeElement===e.$.input||e._setMask()}_validateMaskValue(){const e=this;if(e.readonly||e.disabled||!e.validation||"function"!=typeof e.validation)return;const t=e.value,a=e.validation(t);a?e.removeAttribute("error"):e.setAttribute("error",""),e.$.fireEvent("validation",{success:a})}_keyUpHandler(){}refresh(){}_resizeHandler(){}_selectStartHandler(){}_mouseWheelHandler(){}_applySelection(){}_setDropDownSize(){}_styleChangedHandler(){}});