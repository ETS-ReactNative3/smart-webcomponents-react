
/* Smart UI v10.0.1 (2021-08-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-password-text-box",class extends Smart.BaseElement{static get properties(){return{autoFocus:{value:!1,type:"boolean"},hint:{value:"",reflectToAttribute:!0,type:"string"},label:{value:"",reflectToAttribute:!0,type:"string"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},messages:{value:{en:{passwordStrength:"Password strength",short:"Short",weak:"Weak",far:"Far",good:"Good",strong:"Strong",showPassword:"Show password"}},type:"object",extend:!0},name:{value:"",type:"string"},passwordStrength:{value:null,type:"function?",reflectToAttribute:!1},placeholder:{value:"",type:"string"},selectAllOnFocus:{value:!1,type:"boolean"},showPasswordIcon:{value:!1,type:"boolean"},showPasswordStrength:{value:!1,type:"boolean"},tooltipArrow:{value:!1,type:"boolean"},tooltipDelay:{value:0,type:"number"},tooltipPosition:{allowedValues:["bottom","top","left","right","absolute"],value:"top",type:"string"},tooltipTemplate:{value:null,type:"string?"},type:{value:"password",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",reflectToAttribute:!1,type:"string"}}}static get listeners(){return{"document.up":"_documentUpHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","passwordIcon.down":"_showPassword","input.change":"_textBoxChangeHandler","input.paste":"_textBoxChangeHandler","input.keyup":"_textBoxChangeHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}static get requires(){return{"Smart.Tooltip":"smart.tooltip.js"}}static get styleUrls(){return["smart.textbox.css","smart.passwordtextbox.css"]}template(){return'<div id="container" role="presentation"><span id="label" class="smart-label">[[label]]</span><div id="innerContainer" class="smart-content" role="presentation"><input class="smart-input" type="password" id="input"\n                    disabled="[[disabled]]"\n                    maxlength="[[maxLength]]"\n                    minlength="[[minLength]]"\n                    name="[[name]]"\n                    placeholder="[[placeholder]]"\n                    readonly="[[readonly]]"\n                    value="[[value]]"/><span id="passwordIcon" title="Show Password" class="smart-password-icon smart-hidden" role="button" aria-label="Show Password"></span></div><span id="hint" class="smart-hint">[[hint]]</span><smart-tooltip id="tooltip"\n                    open-mode="manual"\n                    arrow="[[tooltipArrow]]"\n                    right-to-left="[[rightToLeft]]"\n                    tooltip-template="[[tooltipTemplate]]"\n                    position="[[tooltipPosition]]"\n                    delay="[[tooltipDelay]]"></smart-tooltip></div>'}propertyChangedHandler(e,t,s){const a=this;let o;switch(e){case"locale":case"messages":case"passwordStrength":o=a._evaluatePasswordStrength(),a._updateTooltipString(o),a.$.passwordIcon.setAttribute("title",a.localize("showPassword")),a._updatePasswordStrengthStyles(o);break;case"tooltipPosition":a.$.tooltip.position=a.tooltipPosition;break;case"tooltipTemplate":a.$.tooltip.tooltipTemplate=a.tooltipTemplate;break;case"value":o=a._evaluatePasswordStrength(),a._updateTooltipString(o),a._updatePasswordStrengthStyles(o);break;case"disabled":case"unfocusable":a._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(e,t,s)}}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.$.input.tabIndex=-1:e.$.input.removeAttribute("tabindex")}render(){this._createElement(),super.render()}focus(){this.$.input.focus()}blur(){this.$.input.blur()}reset(){const e=this;e.$.input.value=e.value=e._initializationValue}_createElement(){const e=this;e.autoFocus&&e.$.input.focus(),e.$.addClass("smart-input"),e._setFocusable(),e.$.tooltip.selector=e.$.innerContainer,e.$.passwordIcon.setAttribute("title",e.localize("showPassword")),e._updateTooltipString("short"),e._updatePasswordStrengthStyles(),e._initializationValue=e.value,e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e._handleHintContainer(),e.shadowRoot&&(e.$.tooltip.style.display="none",requestAnimationFrame((()=>e.$.tooltip.style.display=""))),e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.hint.id||(e.$.hint.id=e.id+"Hint"),e.setAttribute("role","presentation"),e.$.innerContainer.removeAttribute("aria-describedby"),e.$.input.setAttribute("aria-describedby",e.$.tooltip.id+" "+e.$.hint.id),e.$.input.setAttribute("aria-labelledby",e.$.label.id)}_handleHintContainer(){const e=this;if(!e.hint)return;const t=e.$.hint;if("function"==typeof e.hint){const s=e.value;e.hint(s,t)?e.$.addClass("invalid"):e.$.removeClass("invalid")}else"string"==typeof e.hint&&(t.innerHTML=e.hint,e.$.removeClass("invalid"))}_focusHandler(){const e=this;e.disabled||(e.selectAllOnFocus&&e.$.input.select(),e.showPasswordIcon&&e.$passwordIcon.removeClass("smart-hidden"),e.setAttribute("focus",""),e._valueBeforeChange=e.value,e.$.fireEvent("focus"),e.showPasswordStrength&&(e._tooltipOpened||(e.$.tooltip.open(),e._tooltipOpened=!0)))}_blurHandler(){const e=this;e.disabled||e._passwordIconPressed||(e._valueBeforeChange!==e.value&&(e.$.fireEvent("change",{value:e.value,oldValue:e._valueBeforeChange}),e._valueBeforeChange=""),e.showPasswordIcon&&e.$passwordIcon.addClass("smart-hidden"),e.removeAttribute("focus"),e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e.$.fireEvent("blur"),e._tooltipOpened&&(e.$.tooltip.close(),e._tooltipOpened=!1))}_showPassword(){const e=this;!e.disabled&&e.showPasswordIcon&&(e.$.input.type="text",e._passwordIconPressed=!0)}_documentUpHandler(){const e=this;!e.disabled&&e.showPasswordIcon&&e._passwordIconPressed&&(e.$.input.type="password",e._passwordIconPressed=!1,e.$.input.focus())}_textBoxChangeHandler(e){const t=this;if(t.disabled||t.readonly)return;const s=t.value;if(t.value=t.$.input.value,t.$.input){const e=t.$.input.value;s!==e&&t.$.fireEvent("changing",{oldValue:s,value:e})}e&&e.stopPropagation();let a=t._evaluatePasswordStrength();t._updateTooltipString(a),t._updatePasswordStrengthStyles(a)}_updatePasswordStrengthStyles(e){const t=this,s=["short","weak","far","good","strong"];e=e||"short";for(let e=0;e<s.length;e++)t.$container.removeClass("smart-password-"+s[e]);t.disabled||t.$container.addClass("smart-password-"+e)}_evaluatePasswordStrength(){const e=this,t=e.$.input.value,s=t.length,a="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";if(e.disabled)return;if(e.passwordStrength)return e.passwordStrength(t,a);let o=0,n=0,r=0,l=0;for(var i=0;i<s;i++){const e=t.charAt(i),s=t.charCodeAt(i);s>64&&s<91||s>96&&s<123||s>127&&s<155||s>159&&s<166?o+=1:!1!==isNaN(e)?-1===a.indexOf(e)||(r+=1):n+=1}return l=o+n+2*r+o*n/2+s,s<8?"short":l<20?"weak":l<30?"far":l<40?"good":"strong"}refresh(){}_keyUpHandler(){}_mouseWheelHandler(){}_resizeHandler(){}_selectStartHandler(){}_setDropDownSize(){}_styleChangedHandler(){}_mouseEventsHandler(e){"mouseenter"===e.type?this.setAttribute("hover",""):this.removeAttribute("hover")}_updateTooltipString(e){const t=this;t.$.tooltip.value='<span class="password-strength-label">'+t.localize("passwordStrength")+': </span><span class="password-strength-value">'+t.localize(e)+"</span>"}});