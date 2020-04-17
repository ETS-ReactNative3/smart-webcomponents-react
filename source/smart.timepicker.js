
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=94)}({94:function(e,t){Smart("smart-time-picker",class extends Smart.BaseElement{static get properties(){return{autoSwitchToMinutes:{value:!1,type:"boolean"},footer:{value:!1,type:"boolean"},footerTemplate:{value:null,type:"any?"},format:{value:"12-hour",allowedValues:["12-hour","24-hour"],type:"string"},minuteInterval:{value:1,type:"number"},name:{value:"",type:"string"},selection:{value:"hour",allowedValues:["hour","minute"],type:"string"},value:{value:new Date,type:"any",reflectToAttribute:!1},view:{value:"portrait",allowedValues:["landscape","portrait"],type:"string"}}}static get listeners(){return{keydown:"_keydownHandler",resize:"_resizeHandler","header.click":"_headerClickHandler","picker.down":"_pickerDownHandler","picker.move":"_pickerMoveHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler"}}static get requires(){return{"Smart.Utilities.NumericProcessor":"smart.numeric.js","Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.Draw":"smart.draw.js"}}static get styleUrls(){return["smart.timepicker.css"]}template(){return'<div id="container" role="presentation">\n                <div id="header" class="smart-header smart-unselectable" role="heading" aria-level="1">\n                    <div id="hourMinuteContainer" class="smart-hour-minute-container">\n                        <div id="hourContainer" class="smart-hour-container" role="button"></div>\n                        <div role="presentation">:</div>\n                        <div id="minuteContainer" class="smart-minute-container" role="button"></div>\n                    </div>\n                    <div id="ampmContainer" class="smart-am-pm-container" role="presentation">\n                        <div id="amContainer" class="smart-am-container" role="button">AM</div>\n                        <div id="pmContainer" class="smart-pm-container" role="button">PM</div>\n                    </div>\n                </div>\n                <div id="main" class="smart-main-container">\n                    <div id="svgContainer" class="smart-svg-container">\n                        <div id="picker" class="smart-svg-picker" role="slider"></div>\n                    </div>\n                    <div id="footer" class="smart-footer"></div>\n                </div>\n                <input id="hiddenInput" type="hidden" name="[[name]]">\n            </div>'}ready(){super.ready()}render(){this._createElement(),super.render()}setHours(e){const t=this;(e=24===e?0:Math.max(0,Math.min(e,23)))<12?t._selectAmPm("am"):t._selectAmPm("pm"),"12-hour"===t.format&&(0===e?e=12:e>12&&(e-=12)),t._updateHours(e,arguments[1]),"hour"===t.selection&&(t._inInnerCircle="24-hour"===t.format&&(0===e||e>12),t._drawArrow(!0,e,arguments[2]),t.hasAnimation||(t._inInnerCircle=!1))}setMinutes(e){const t=this;e=60===e?0:Math.max(0,Math.min(e,59)),t._updateMinutes(e),"minute"===t.selection&&t._drawArrow(!0,e,arguments[1])}propertyChangedHandler(e,t,r){super.propertyChangedHandler(e,t,r);const i=this;switch(e){case"disabled":case"unfocusable":i._setFocusable();break;case"footer":case"view":i._resizeHandler();break;case"footerTemplate":i._validateFooterTemplate();break;case"format":{let e=i.value.getHours();"12-hour"===r?(i.$ampmContainer.removeClass("smart-hidden"),i.value.getHours()<12?i._selectAmPm("am"):i._selectAmPm("pm"),0===e?e=12:e>12&&(e-=12)):i.$ampmContainer.addClass("smart-hidden"),i.$.hourContainer.innerHTML=e,"hour"===i.selection&&(i.$.picker.setAttribute("aria-valuenow",e),i._draw.clear(),i._renderSVG());break}case"minuteInterval":{const e=Math.max(1,Math.min(r,60));e!==r&&(i.minuteInterval=e),"minute"===i.selection&&(i.interval=e);break}case"selection":"hour"===r?i._changeToHourSelection():i._changeToMinuteSelection();break;case"value":{i._oldValue=t,i._validateValue();const e=i.value.getHours()===t.getHours(),r=i.value.getMinutes()===t.getMinutes();e&&r||(r?i.setHours(i.value.getHours()):(e||i.setHours(i.value.getHours(),!0),i.setMinutes(i.value.getMinutes()))),delete i._oldValue;break}}}_applyInitialSettings(){const e=this,t=e.value;let r,i;r=t.getHours(),i=t.getMinutes(),"12-hour"===e.format?r<12?(e._ampm="am",e.$amContainer.addClass("smart-selected"),0===r&&(r=12)):(e._ampm="pm",e.$pmContainer.addClass("smart-selected"),r>12&&(r-=12)):e.$ampmContainer.addClass("smart-hidden"),i=i.toString(),1===i.length&&(i="0"+i),e.$.hourContainer.innerHTML=r,e.$.minuteContainer.innerHTML=i,"hour"===e.selection?(e.$hourContainer.addClass("smart-selected"),e.$.picker.setAttribute("aria-valuenow",r)):(e.$minuteContainer.addClass("smart-selected"),e.$.picker.setAttribute("aria-valuenow",i))}_changeSelection(e,t){const r=this,i=e.pageX,n=e.pageY,a=r._getCenterCoordinates(),s=Math.sqrt(Math.pow(a.x-i,2)+Math.pow(a.y-n,2));if(r._measurements.center=a,"down"===e.type){if(s>r._measurements.radius)return void e.stopPropagation();r._dragging=!0}"24-hour"===r.format&&"hour"===r.selection&&s<r._measurements.radius-50?r._inInnerCircle=!0:r._inInnerCircle=!1;let o=-1*Math.atan2(n-a.y,i-a.x)*180/Math.PI;o<0&&(o+=360),r._angle=o;let l=r._numericProcessor.getValueByAngle(r._angle);"hour"===r.selection?("24-hour"===r.format&&r._inInnerCircle?0!==l&&12!==l?l+=12:l=0:0===l&&(l=12),r._updateHours(l)):(60===l&&(l=0),r._updateMinutes(l)),void 0!==r._oldTimePart&&(cancelAnimationFrame(r._animationFrameId),delete r._animationFrameId,r._drawArrow(!0,l,t))}_changeToHourSelection(){const e=this,t=e._centralCircle.parentElement||e._centralCircle.parentNode;let r=e.value.getHours();cancelAnimationFrame(e._animationFrameId),delete e._animationFrameId,e.interval=1,e.$hourContainer.addClass("smart-selected"),e.$minuteContainer.removeClass("smart-selected"),t.removeChild(e._centralCircle),t.removeChild(e._arrow),t.removeChild(e._head),e._getMeasurements(),e._numericProcessor.getAngleRangeCoefficient(),e._draw.clear(),t.appendChild(e._centralCircle),t.appendChild(e._arrow),t.appendChild(e._head),e._renderHours(),"24-hour"===e.format&&(0===r||r>12)?e._inInnerCircle=!0:"12-hour"===e.format&&(r%=12,0===r&&(r=12)),e._drawArrow(!0,void 0,!0),e._inInnerCircle=!1,e.$.picker.firstElementChild.setAttribute("aria-hidden",!0),e.$.picker.setAttribute("aria-valuenow",r)}_changeToMinuteSelection(){const e=this._centralCircle.parentElement||this._centralCircle.parentNode;this._inInnerCircle=!1,cancelAnimationFrame(this._animationFrameId),delete this._animationFrameId,this.interval=this.minuteInterval,this.$hourContainer.removeClass("smart-selected"),this.$minuteContainer.addClass("smart-selected"),e.removeChild(this._centralCircle),e.removeChild(this._arrow),e.removeChild(this._head),this._getMeasurements(),this._numericProcessor.getAngleRangeCoefficient(),this._draw.clear(),e.appendChild(this._centralCircle),e.appendChild(this._arrow),e.appendChild(this._head),this._renderMinutes(),this._drawArrow(!0,void 0,!0),this.$.picker.firstElementChild.setAttribute("aria-hidden",!0),this.$.picker.setAttribute("aria-valuenow",this.value.getMinutes())}_computeArrowBodyPoints(e,t,r,i){const n=Math.sin(t),a=Math.cos(t),s=e-r*a+i*n,o=e+r*n+i*a,l=e+r*a+i*n,d=e-r*n+i*a,u="M "+(e+r*a)+","+(e-r*n)+" L "+(e-r*a)+","+(e+r*n)+" L "+s+","+o+" "+l+","+d;return this._headCenter={x:(s+l)/2,y:(o+d)/2},u}_createElement(){const e=this;e.setAttribute("role","dialog"),e.coerce=!0,e.min=0,e._drawMin="0",e.startAngle=-270,e.endAngle=90,e._angleDifference=e.endAngle-e.startAngle,e.ticksVisibility="none",e._tickIntervalHandler={},e._tickIntervalHandler.labelsSize={},e._distance={majorTickDistance:0,minorTickDistance:0,labelDistance:10},e._measurements={},e._validateInitialPropertyValues(),e._applyInitialSettings(),e._numericProcessor=new Smart.Utilities.DecimalNumericProcessor(e),e._draw=new Smart.Utilities.Draw(e.$.picker),e._isVisible()?(e._setPickerSize(),e._getMeasurements(),e._numericProcessor.getAngleRangeCoefficient(),e._renderSVG(),e._setFocusable(),e.$.hiddenInput.value=e.value,e.enableShadowDOM&&e.appendChild(e.$.hiddenInput)):e._renderingSuspended=!0}_documentMoveHandler(e){const t=this;t._dragging&&t._changeSelection(e,!0)}_documentUpHandler(){const e=this;e._dragging?(e._inInnerCircle=!1,e._dragging=!1,e.autoSwitchToMinutes&&"hour"===e.selection&&(e.hasAnimation?function t(){e._animationFrameId?requestAnimationFrame(t):(e.$picker.addClass("animate"),setTimeout((function(){e.selection="minute",e._changeToMinuteSelection()}),250),setTimeout((function(){e.$picker.removeClass("animate")}),550))}():(e.selection="minute",e._changeToMinuteSelection()))):e.hasAttribute("focus")&&(e.$.fireEvent("blur"),e.removeAttribute("focus"))}_drawArrow(e,t,r){const i=this,n="hour"===i.selection,a="12-hour"===i.format;let s,o,l=i._oldTimePart;if(delete i._oldTimePart,void 0===t&&(n?(t=i.value.getHours(),a&&t>12&&(t-=12)):t=i.value.getMinutes()),void 0===l||r||!i.hasAnimation)return void i._drawArrowSVG(e,t);if(n&&!a)return void i._animate24HourView(l,t);n?(s=.2,o=12,t%=o,l%=o):(s=1,o=60);let d=t-l,u=l-t;d<0&&(d+=o),u<0&&(u+=o),u<d&&(s*=-1),function r(){l+=s,l=parseFloat((l%o).toFixed(1)),l<0&&(l+=o),i._drawArrowSVG(e,l),e=!0,l!==t%o?i._animationFrameId=requestAnimationFrame(r):delete i._animationFrameId}()}_animate24HourView(e,t){const r=this;let i=.2;r._inInnerCircle=!1;const n=0===e||e>12,a=0===t||t>12;if(n!==a){if(e=n?Math.abs(e-12):(e+12)%24,r._inInnerCircle=a,r._drawArrowSVG(!0,e),e===t)return}else r._inInnerCircle=a;let s=e,o=t;r._inInnerCircle&&(0===o&&s<18?o=12:0===s&&o<18&&(s=12));let l=o-s,d=s-o;l<0&&(l+=12),d<0&&(d+=12),d<l&&(i*=-1),function n(a){r._inInnerCircle=a,a?((e=parseFloat((e+i).toFixed(1)))<0?e+=24:e<1&&(e+=12),12!==e&&24!==e||(e=0)):(12!==(e+=i)&&(e=parseFloat((e%12).toFixed(1))),e<=0&&(e+=12)),r._drawArrowSVG(!0,e),e!==t?r._animationFrameId=requestAnimationFrame((function(){n(a)})):(delete r._animationFrameId,r._inInnerCircle=!1)}(r._inInnerCircle)}_drawArrowSVG(e,t){const r=this,i=r._measurements,n=r._numericProcessor.getAngleByValue(t);let a;a=r._inInnerCircle?r._computeArrowBodyPoints(i.radius,n,1,i.innerRadius-r._largestLabelSize/2-45):r._computeArrowBodyPoints(i.radius,n,1,i.innerRadius-r._largestLabelSize/2),e?(r._arrow.setAttribute("d",a),r._head.setAttribute("cx",r._headCenter.x),r._head.setAttribute("cy",r._headCenter.y),r._head.setAttribute("r",r._largestLabelSize),r._headRect=r._head.getBoundingClientRect(),t%1==0&&r._highlightLabel(t)):(r._arrow=r._draw.path(a,{class:"smart-needle"}),r._head=r._draw.circle(r._headCenter.x,r._headCenter.y,r._largestLabelSize,{class:"smart-needle-central-circle"}),r._headRect=r._head.getBoundingClientRect())}_drawLabel(e,t,r){const i=this,n=i._measurements,a=n.radius,s={class:"smart-label smart-unselectable","font-size":n.fontSize,"font-family":n.fontFamily,"font-weight":n.fontWeight,"font-style":n.fontStyle};"hour"===i.selection?i._plotInnerCircle?t>0?t+=12:t="00":0===t&&(t=12):1===t.toString().length&&(t="0"+t);const o=i._draw.measureText(t,0,s),l=a-r-i._largestLabelSize/2,d=a+l*Math.sin(e),u=a+l*Math.cos(e);i._draw.text(t,Math.round(d)-o.width/2,Math.round(u)-o.height/2,o.width,o.height,0,s).setAttribute("value",parseFloat(t))}_getCenterCoordinates(){const e=this.$.picker.getBoundingClientRect(),t=this._measurements.radius,r=document.body.scrollLeft||document.documentElement.scrollLeft,i=document.body.scrollTop||document.documentElement.scrollTop;return{x:e.left+r+t,y:e.top+i+t}}_getMeasurements(){const e=this,t=e._measurements,r=document.createElement("div");let i,n,a,s,o,l;r.className="smart-label",r.style.position="absolute",r.style.visibility="hidden",e.$.svgContainer.appendChild(r),"hour"===e.selection?(i="1",n="23",e.max=12,e._drawMax="12",e._range=12):(i="00",n="55",e.max=60,e._drawMax="60",e._range=60),r.innerHTML=i,a=r.offsetWidth,o=r.offsetHeight,r.innerHTML=n,s=r.offsetWidth,l=r.offsetHeight,e._largestLabelSize=Math.max(a,o,s,l),e._tickIntervalHandler.labelsSize.minLabelSize=o,e._tickIntervalHandler.labelsSize.maxLabelSize=l;const d=window.getComputedStyle(r);t.fontSize=d.fontSize,t.fontFamily=d.fontFamily,t.fontWeight=d.fontWeight,t.fontStyle=d.fontStyle,e.$.svgContainer.removeChild(r)}_headerClickHandler(e){const t=this;if(!t.disabled&&!t.readonly)switch(e.target){case t.$.hourContainer:"hour"!==t.selection&&(t.selection="hour",t._changeToHourSelection());break;case t.$.minuteContainer:"minute"!==t.selection&&(t.selection="minute",t._changeToMinuteSelection());break;case t.$.amContainer:if(!t.$amContainer.hasClass("smart-selected")){t._selectAmPm("am");const e=new Date(t.value.getTime());t.value.setHours(t.value.getHours()-12),t.$.hiddenInput.value=t.value,t.$.fireEvent("change",{value:t.value,oldValue:e})}break;case t.$.pmContainer:if(!t.$pmContainer.hasClass("smart-selected")){t._selectAmPm("pm");const e=new Date(t.value.getTime());t.value.setHours(t.value.getHours()+12),t.$.hiddenInput.value=t.value,t.$.fireEvent("change",{value:t.value,oldValue:e})}}}_highlightLabel(e){const t=this;if(t._highlightedLabel){if(parseFloat(t._highlightedLabel.getAttribute("value"))===e)return;t._highlightedLabel.classList.remove("smart-selected"),t._highlightedLabel=void 0}let r;"hour"===t.selection?(void 0===e&&(e=t.value.getHours()),"12-hour"===t.format&&(0===e?e=12:e>12&&(e-=12)),r=e):(void 0===e&&(e=t.value.getMinutes()),r=5*Math.round(e/5),60===r&&(r=0));const i=t.$.picker.querySelector('.smart-label[value="'+r+'"]');i&&(r===e||t._overlapsLabel(i))&&(t._highlightedLabel=i,i.classList.add("smart-selected"))}_isVisible(){return!!(this.offsetWidth||this.offsetHeight||this.getClientRects().length)}_keydownHandler(e){const t=this;if(t._dragging)return;const r=(t.shadowRoot||t.getRootNode()).activeElement,i=e.key;if(!t.$.header.contains(r)||"Enter"!==i&&" "!==i){if(r===t.$.picker&&!e.altKey){let r;if("ArrowRight"===i||"ArrowUp"===i?r=1:"ArrowLeft"!==i&&"ArrowDown"!==i||(r=-1),r)if(e.preventDefault(),"hour"===t.selection){let e=t.value.getHours();0===e&&-1===r?e=23:23===e&&1===r?e=0:e+=r,"12-hour"===t.format&&(e>=12&&t.$amContainer.hasClass("smart-selected")?e-=12:e<12&&t.$pmContainer.hasClass("smart-selected")&&(e+=12)),t.setHours(e,void 0,!0)}else{let e=t.value.getMinutes();r*=t.minuteInterval,e+r>=60?e=0:e<-1*r?e=60%r==0?60+r:60-60%r:e+=r,t.setMinutes(e,!0)}}}else e.preventDefault(),t._headerClickHandler({target:r})}_overlapsLabel(e){const t=this,r=e.getBoundingClientRect();let i=t._headRect;return 0===i.height&&(i=t._headRect=t._head.getBoundingClientRect()),!(r.right-10<i.left||r.left+10>i.right||r.bottom-10<i.top||r.top+10>i.bottom)}_parseDateString(e,t){const r=e.indexOf("Date("),i=e.indexOf(")");let n=e;if(-1!==r&&-1!==i){if(n=e.slice(r+5,i),n=n.replace(/'/g,"").replace(/"/g,"").replace(/^\s+|\s+$|\s+(?=\s)/g,""),""===n.trim())return new Date;if(new RegExp(/(^(\d+)(\s*,\s*\d+)+$)/g).test(n))return n=n.replace(/\s/g,""),n=n.split(","),n.map((function(e,t){n[t]=parseInt(e)})),n.unshift(null),n=new(Function.prototype.bind.apply(Date,n)),n}if(""===n.trim())return t;if(!isNaN(n))return new Date(parseInt(n,10));try{n=new Date(n)}catch(e){n=t}return isNaN(n.getTime())?t:n}_pickerDownHandler(e){this.disabled||this.readonly||!Smart.Utilities.Core.isMobile&&1!==e.which||(this._changeSelection(e),this.$.fireEvent("focus"),this.setAttribute("focus",""))}_pickerMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_renderHours(){const e=this;e._highlightedLabel=void 0,e._majorTicksInterval=1,e._numericProcessor.addGaugeTicksAndLabels(),"24-hour"===e.format?(e._plotInnerCircle=!0,e._distance.labelDistance=55,e._numericProcessor.addGaugeTicksAndLabels(),e._plotInnerCircle=!1,e._distance.labelDistance=10,e.$.picker.setAttribute("aria-valuemin",0),e.$.picker.setAttribute("aria-valuemax",23)):(e.$.picker.setAttribute("aria-valuemin",1),e.$.picker.setAttribute("aria-valuemax",12))}_renderMinutes(){this._highlightedLabel=void 0,this._majorTicksInterval=5,this._numericProcessor.addGaugeTicksAndLabels(),this.$.picker.setAttribute("aria-valuemin",0),this.$.picker.setAttribute("aria-valuemax",59)}_renderSVG(){const e=this;if(e._isVisible()&&!e._renderingSuspended){if(e._centralCircle=e._draw.circle(e._measurements.radius,e._measurements.radius,4,{class:"smart-needle-central-circle"}),"hour"===e.selection&&"24-hour"===e.format&&(0===e.value.getHours()||e.value.getHours()>12)&&(e._inInnerCircle=!0),e._drawArrow(!1),e._inInnerCircle=!1,"hour"===e.selection){e.interval=1,e._renderHours();let t=e.value.getHours();"12-hour"===e.format&&t>12&&(t-=12),e._highlightLabel(t)}else e.interval=e.minuteInterval,e._renderMinutes(),e._highlightLabel(e.value.getMinutes());e.$.picker.firstElementChild.setAttribute("aria-hidden",!0)}else e._renderingSuspended=!0}_resizeHandler(){const e=this;let t=!1;e.isRendered&&(e._isVisible()?(e._renderingSuspended=!1,t=!0,e._getMeasurements(),e._numericProcessor.getAngleRangeCoefficient(),e._setPickerSize(),e._sizeChanged||t?(e._draw.clear(),e._renderSVG(),e._sizeChanged=!1):(e._headRect=e._head.getBoundingClientRect(),e._highlightLabel())):e._renderingSuspended=!0)}_selectAmPm(e){const t=this;"am"===e?(t._ampm="am",t.$pmContainer.removeClass("smart-selected"),t.$amContainer.addClass("smart-selected")):(t._ampm="pm",t.$amContainer.removeClass("smart-selected"),t.$pmContainer.addClass("smart-selected"))}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.$.hourContainer.removeAttribute("tabindex"),e.$.minuteContainer.removeAttribute("tabindex"),e.$.amContainer.removeAttribute("tabindex"),e.$.pmContainer.removeAttribute("tabindex"),void e.$.picker.removeAttribute("tabindex");const t=e.tabIndex>0?e.tabIndex:0;e.$.hourContainer.tabIndex=t,e.$.minuteContainer.tabIndex=t,e.$.amContainer.tabIndex=t,e.$.pmContainer.tabIndex=t,e.$.picker.tabIndex=t}_setPickerSize(){const e=this,t=e.$.svgContainer.offsetWidth,r=e.$.svgContainer.offsetHeight;let i=.9*Math.min(t,r);void 0!==e._pickerSize&&e._pickerSize!==i?e._sizeChanged=!0:e._sizeChanged=!1,e._pickerSize=i,e._measurements.radius=i/2,e._measurements.innerRadius=e._measurements.radius-10,i+="px",e.$.picker.style.width=i,e.$.picker.style.height=i}_updateHours(e,t){const r=this;let i=e;"12-hour"===r.format?"am"===r._ampm?12===i&&(i=0):i<12&&(i+=12):i=e;const n=void 0!==r._oldValue?r._oldValue:new Date(r.value.getTime()),a=n.getHours();i!==a?(r._oldTimePart=a,void 0===r._oldValue&&r.value.setHours(i),r.$.hourContainer.innerHTML=e,!0!==t&&(r.$.hiddenInput.value=r.value,r.$.fireEvent("change",{value:r.value,oldValue:n})),"hour"===r.selection&&r.$.picker.setAttribute("aria-valuenow",e)):delete r._oldTimePart}_updateMinutes(e){const t=this,r=void 0!==t._oldValue?t._oldValue:new Date(t.value.getTime()),i=r.getMinutes();e!==i?(t._oldTimePart=i,void 0===t._oldValue&&t.value.setMinutes(e),"minute"===t.selection&&t.$.picker.setAttribute("aria-valuenow",e),1===(e=e.toString()).length&&(e="0"+e),t.$.minuteContainer.innerHTML=e,t.$.hiddenInput.value=t.value,t.$.fireEvent("change",{value:t.value,oldValue:r})):delete t._oldTimePart}_validateFooterTemplate(){const e=this,t=e.footerTemplate;if(null===t)return void(e.$.footer.innerHTML="");let r;if(t instanceof HTMLTemplateElement?r=t:"string"==typeof t&&(r=document.getElementById(t),r instanceof HTMLTemplateElement||(r=void 0)),void 0===r)return e.footerTemplate=null,void(e.$.footer.innerHTML="");const i=document.importNode(r.content,!0);if(e.enableShadowDOM)return e.$.footer.innerHTML="<slot></slot>",void e.appendChild(i);e.$.footer.appendChild(i)}_validateInitialPropertyValues(){this._validateFooterTemplate(),this.minuteInterval=Math.max(1,Math.min(this.minuteInterval,60)),this._validateValue()}_validateValue(){const e=this,t=e.value,r=void 0!==e._oldValue?this._oldValue:new Date;if(!(t instanceof Date))if("string"==typeof t){if(/^\d{1,2}:\d{1,2}$/.test(t)){const i=t.split(":");return void(e.value=new Date(r.getFullYear(),r.getMonth(),r.getDate(),parseFloat(i[0]),parseFloat(i[1])))}e.value=e._parseDateString(t,r)}else e.value=r}})}});