
/* Smart UI v12.0.1 (2022-01-20) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-gauge",class extends Smart.Tank{static get properties(){return{analogDisplayType:{value:"needle",allowedValues:["needle","fill","line"],type:"string"},animationDuration:{value:300,type:"number"},digitalDisplay:{value:!1,type:"boolean"},digitalDisplayPosition:{value:"bottom",allowedValues:["top","bottom","right","left","center"],type:"string"},drawNeedle:{value:null,type:"function?"},endAngle:{value:210,type:"number"},needlePosition:{value:"center",allowedValues:["center","edge"],type:"string"},ranges:{value:[],type:"array"},scalePosition:{value:"inside",allowedValues:["outside","inside","none"],type:"string"},showRanges:{value:!1,type:"boolean"},sizeMode:{value:"circle",allowedValues:["circle","auto","none"],type:"string"},startAngle:{value:-30,type:"number"}}}static get listeners(){return{down:"_downHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","document.selectstart":"_selectStartHandler",keydown:"_keydownHandler",move:"_trackMoveHandler"}}static get requires(){return{"Smart.Utilities.Draw":"smart.draw.js","Smart.NumericTextBox":"smart.numerictextbox.js"}}static get styleUrls(){return["smart.numerictextbox.css","smart.gauge.css"]}template(){return'<div id="container" role="presentation">\n                <div id="svgContainer" class="smart-svg-container" role="presentation" aria-hidden="true"></div>\n                <div class="smart-digital-display-container" role="presentation">\n                    <smart-numeric-text-box id="digitalDisplay"\n                                            class="smart-digital-display"\n                                            decimal-separator="[[decimalSeparator]]"\n                                            max="[[max]]"\n                                            min="[[min]]"\n                                            name="[[name]]"\n                                            placeholder="Digital display"\n                                            readonly\n                                            right-to-left="[[rightToLeft]]"\n                                            input-format="[[scaleType]]"\n                                            scientific-notation="[[scientificNotation]]"\n                                            show-unit="[[showUnit]]"\n                                            unit="[[unit]]"\n                                            unfocusable\n                                            validation="interaction"\n                                            word-length="[[wordLength]]"\n                                            role="tooltip">\n                    </smart-numeric-text-box>\n                </div>\n            </div>'}attached(){const e=this;super.attached(),e.isCompleted&&(e._trackListener&&(e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down((function(t){e._SVGElementDownHandler(t)}))),e._fillListener&&(e._fillListener=new Smart.Utilities.InputEvents(e._fill),e._fillListener.down((function(t){e._SVGElementDownHandler(t)}))),e._lineListener&&(e._lineListener=new Smart.Utilities.InputEvents(e._line),e._lineListener.down((function(t){e._SVGElementDownHandler(t)}))))}detached(){super.detached(),this._unlisten()}ready(){super.ready()}getOptimalSize(){const e=this;return e._renderingSuspended?{width:0,height:0}:"auto"!==e.sizeMode?{width:e.offsetWidth,height:e._updateSize(!0)}:{width:e.offsetWidth,height:e.offsetHeight}}val(e){const t=this;if(void 0===e)return t._getEventValue();if("date"===t.mode&&(e=(e=Smart.Utilities.DateTime.validateDate(e)).getTimeStamp()),t._numericProcessor.compare(e,t.value)){const i=t.value;if(t._validateValue(e,t.value),!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);t._animate(i)}}_createElement(){const e=this;e.$.digitalDisplay.id||(e.$.digitalDisplay.id=e.id+"DigitalDisplay"),e.setAttribute("aria-describedby",e.$.digitalDisplay.id),"numeric"===e.mode?e._getEventValue=function(){return e.value}:(e._handleDateScale(),e.digitalDisplay=!1),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._draw=new Smart.Utilities.Draw(e.$.svgContainer),e._isVisible()?(e._renderingSuspended=!1,e._setSettingsObject(),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._measurements={},e._validateInitialPropertyValues(),e._getMeasurements(),e._setDrawVariables(),e._getRange(),e._numericProcessor.getAngleRangeCoefficient(),"numeric"!==e.mode&&e.coerce?e._coerceInitialDateValue=!0:e._validateValue(),e._initTickIntervalHandler(),e._renderAnalogItems(),delete e._preventResizeHandler,e._setFocusable(),e._setUpdatePointerMethod()):e._renderingSuspended=!0}propertyChangedHandler(e,t,i){function a(i,a,r,s){const l=i&&a?"both":e;n._validateMinMax(l,!1,t),"logarithmicScale"!==e&&"scaleType"!==e&&("wordLength"!==e&&n[e]===t||"wordLength"===e&&n.min===r&&n.max===s)||(n._setDrawVariables(),n._getRange(),n._numericProcessor.getAngleRangeCoefficient(),n._initTickIntervalHandler(),n._renderAnalogItems(),n._validateValue(n.value,n.value),n._updatePointer())}const n=this;if(n._isVisible()&&!n._renderingSuspended)switch(e){case"analogDisplayType":delete n._customSVGElements,n._getMeasurements(),"needle"===i&&"center"===n.digitalDisplayPosition?n.digitalDisplayPosition="bottom":"needle"===t&&"bottom"===n.digitalDisplayPosition&&(n.digitalDisplayPosition="center"),n._renderAnalogItems(),n._setUpdatePointerMethod();break;case"coerce":if(i){const e=n.value;n._validateValue(e),n._updatePointer(),n._valueBeforeCoercion=e}else void 0!==n._valueBeforeCoercion&&(n._validateValue(n._valueBeforeCoercion),n._updatePointer());break;case"customInterval":i?(n._customTicks&&(n.customTicks=n._customTicks),n._numericProcessor.validateCustomTicks()):"date"===n.mode&&(n._customTicks=n.customTicks),n._initTickIntervalHandler(),n._renderAnalogItems(),n._coerceCustomInterval();break;case"customTicks":if("date"===n.mode&&!n.customInterval)return n._customTicks=i,void(n.customTicks=t);n._numericProcessor.validateCustomTicks(),n.customInterval&&(n._initTickIntervalHandler(),n._renderAnalogItems(),n._coerceCustomInterval());break;case"dateLabelFormatString":case"showUnit":case"unit":n._initTickIntervalHandler(),n._renderAnalogItems();break;case"decimalSeparator":case"scientificNotation":if("date"===n.mode)return;n._initTickIntervalHandler(),n._renderAnalogItems();break;case"digitalDisplay":case"digitalDisplayPosition":if("date"===n.mode)return void("digitalDisplay"===e&&(n.digitalDisplay=!1));n._updateSize();break;case"mechanicalAction":case"messages":break;case"disabled":case"readonly":case"unfocusable":super.propertyChangedHandler(e,t,i);break;case"drawNeedle":if("needle"!==n.analogDisplayType)return;null===t&&n._draw.removeElement(n._needle),null!==i?n._updatePointer():(n._renderAnalogItems(),delete n._customSVGElements);break;case"endAngle":case"startAngle":n._validateAngles(),n._numericProcessor.getAngleRangeCoefficient(),n._renderAnalogItems();break;case"interval":n._numericProcessor.validateInterval(n.interval),n._validateValue(),n._updatePointer();break;case"inverted":case"labelFormatFunction":case"rightToLeft":case"showRanges":n._renderAnalogItems();break;case"labelsVisibility":if("all"===t&&"endPoints"===i||"endPoints"===t&&"all"===i)return;n._getMeasurements(),n._renderAnalogItems();break;case"logarithmicScale":if("date"===n.mode)return void(n.logarithmicScale=!1);n._initTickIntervalHandler(),a(!0,!0);break;case"max":case"min":"date"===n.mode&&(delete n._dateInterval,n[e]=Smart.Utilities.DateTime.validateDate(i).getTimeStamp()),a("min"===e,"max"===e);break;case"mode":n.mode=t;break;case"needlePosition":"needle"===n.analogDisplayType&&n._updatePointer();break;case"precisionDigits":case"significantDigits":if("date"===n.mode)return;"precisionDigits"===e&&"integer"===n.scaleType&&n.error(n.localize("noInteger",{elementType:n.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==n.precisionDigits?n.precisionDigits=null:"precisionDigits"===e&&null!==n.significantDigits&&(n.significantDigits=null),null!==i&&(n.$.digitalDisplay.precisionDigits=n.precisionDigits,n.$.digitalDisplay.significantDigits=n.significantDigits),n._initTickIntervalHandler(),n._renderAnalogItems();break;case"ranges":if(!n.showRanges)return;n._renderAnalogItems();break;case"scaleType":if("date"===n.mode)return void(n.scaleType="integer");n._numericProcessor=new Smart.Utilities.NumericProcessor(n,"scaleType"),a(!0,!0);break;case"scalePosition":case"ticksPosition":n._getMeasurements(),n._renderAnalogItems();break;case"sizeMode":if("none"===i)return;n._preventResizeHandler=!0,"circle"===i?(n.$.container.removeAttribute("style"),n.style.height=n.offsetWidth+"px",n._measurements.cachedHeight=n.offsetHeight):"auto"===i&&(n.$.container.style.height=n.offsetWidth+"px",n._updateSize());break;case"theme":super.propertyChangedHandler(e,t,i),n._getMeasurements(),n._renderAnalogItems();break;case"ticksVisibility":if("minor"===t&&"major"===i||"major"===t&&"minor"===i)return;n._getMeasurements(),n._renderAnalogItems();break;case"validation":"strict"===i&&n._validateValue(n.value,n.value);break;case"value":{"date"===n.mode&&(i=(i=Smart.Utilities.DateTime.validateDate(i)).getTimeStamp()),n._validateValue(i,t);const e=i.toString();n.value.toString()===e&&(n._drawValue=n.logarithmicScale?Math.log10(e).toString():e),n._animate(t);break}case"wordLength":if("date"===n.mode)return void(n.wordLength="uint64");n._wordLengthNumber=n._numericProcessor.getWordLength(n.wordLength),"integer"===n.scaleType&&a(!0,!0,n.min,n.max);break;default:super.propertyChangedHandler(e,t,i)}else n._renderingSuspended=!0}_addAnalogDisplay(){const e=this,t=e._measurements,i=t.radius,a=e._draw;if("needle"===e.analogDisplayType){e._drawNeedle(!1);const n=(t.needleWidth+5)/2;e._centralCircle=a.circle(i,i,n,{class:"smart-needle-central-circle"}),e._minCoordinates.push(i-n),e._maxCoordinates.push(i+n)}else{const n=i-e._distance.trackDistance-t.trackBorderWidth/2-1;e._track=a.pieslice(i,i,n-t.trackWidth,n,e.startAngle,e.endAngle,0,{class:"smart-track"}),e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down((function(t){e._SVGElementDownHandler(t)}))}}_calculateTickAndLabelDistance(){const e=this,t=e._measurements;if("none"===e.scalePosition)return e._plotLabels=!1,e._plotTicks=!1,t.innerRadius=t.radius,{majorTickDistance:0,minorTickDistance:0,labelDistance:0,needleDistance:0,trackDistance:0};const i=e._tickIntervalHandler.labelsSize,a=e._largestLabelSize||Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);let n,r,s,l=1,o=0;return e._largestLabelSize=a,"outside"===e.scalePosition&&(l=a,n=l+t.majorTickSize-t.minorTickSize,r=0),"needle"===e.analogDisplayType?(s="outside"===e.scalePosition?l+t.majorTickSize:l+t.majorTickSize+a,"none"===e.ticksVisibility&&(r=0,s-=t.majorTickSize),"none"===e.labelsVisibility&&(s-=a,"outside"===e.scalePosition&&(l-=a,n-=a))):"none"===e.labelsVisibility&&"none"===e.ticksVisibility?o=0:"outside"===e.scalePosition?"scale"===e.ticksPosition?("none"===e.labelsVisibility&&(l=1,n=1+t.majorTickSize-t.minorTickSize),o="none"!==e.ticksVisibility?l+t.majorTickSize+2:a):"none"!==e.labelsVisibility?(n-=(t.trackWidth+t.trackBorderWidth)/4,o=l-1):(l=1,n=(t.trackWidth+t.trackBorderWidth)/4+1,o=0):"scale"===e.ticksPosition?(l=t.trackWidth+1.5*t.trackBorderWidth+2,"none"===e.ticksVisibility&&(r=l)):n=(t.trackWidth+t.trackBorderWidth)/4+1,void 0===n&&(n=l),void 0===r&&(r=l+t.majorTickSize),t.innerRadius=t.radius-r,delete e._plotLabels,delete e._plotTicks,delete e._equalToHalfRadius,"inside"===e.scalePosition?t.innerRadius<a&&(e._plotLabels=!1,"scale"===e.ticksPosition?"needle"!==e.analogDisplayType&&t.innerRadius<t.majorTickSize&&(e._plotTicks=!1):(e._equalToHalfRadius=!0,t.innerRadius=t.radius/2)):t.radius-o-t.trackBorderWidth<t.trackWidth&&(t.trackWidth=t.radius-o-t.trackBorderWidth,t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2,n=l+(t.majorTickSize-t.minorTickSize)/2)),{majorTickDistance:l,minorTickDistance:n,labelDistance:r,needleDistance:s,trackDistance:o}}_calculateTickInterval(){const e=this,t=e._tickIntervalHandler.getInterval("radial",e._drawMin,e._drawMax,e.$.container,e.logarithmicScale);t.major!==e._majorTicksInterval?(e._intervalHasChanged=!0,e._majorTicksInterval=t.major):e._intervalHasChanged=!0,e._minorTicksInterval=t.minor,"date"===e.mode&&e._calculateDateInterval(t.major)}_computeNeedlePointsCenter(e,t){const i=this,a=i._measurements,n=a.innerRadius,r=a.radius,s=Math.sin(t),l=Math.cos(t);let o;return o="inside"===i.scalePosition?.9*(n-i._largestLabelSize):.9*(n-i._distance.needleDistance),"M "+(r+e*l)+","+(r-e*s)+" L "+(r-e*l)+","+(r+e*s)+" L "+(r+o*s)+","+(r+o*l)+" Z"}_computeNeedlePointsEdge(e,t,i){const a=this._measurements.radius,n=a-this._distance.needleDistance,r=n-i,s=Math.sin(t),l=Math.cos(t),o=a+r*s,d=a+r*l;return"M "+(o+e*l)+","+(d-e*s)+" L "+(o-e*l)+","+(d+e*s)+" L "+(a+n*s)+","+(a+n*l)+" Z"}_documentMoveHandler(e){if(!this._dragging)return;const t=this,i=t._getAngleByCoordinate(e.pageX,e.pageY),a=t._getQuadrant(i),n=t._getRotationDirection();if(t._normalizedStartAngle===t.endAngle){let e;!t.inverted&&!t.rightToLeft||t.rightToLeft&&t.inverted?t._lockCW&&"ccw"===n?(e=t.endAngle,t._unlockRotation("_lockCW",i,a,e,{firstCondition:i>e,secondCondition:i<e})):t._lockCCW&&"cw"===n&&(e=t._normalizedStartAngle,t._unlockRotation("_lockCCW",i,a,e,{firstCondition:i<e,secondCondition:i>e})):t._lockCW&&"cw"===n?(e=t._normalizedStartAngle,t._unlockRotation("_lockCW",i,a,e,{firstCondition:i<e,secondCondition:i>e})):t._lockCCW&&"ccw"===n&&(e=t.endAngle,t._unlockRotation("_lockCCW",i,a,e,{firstCondition:i>e,secondCondition:i<e}))}else t._lockCW&&"ccw"===n&&!t._outsideRange&&t._numericProcessor._getAngleDifference(i,t._normalizedStartAngle)<10?t._lockCW=!1:t._lockCCW&&"cw"===n&&!t._outsideRange&&t._numericProcessor._getAngleDifference(i,t.endAngle)<10&&(t._lockCCW=!1);if(t._angle=i,t._quadrant=a,e.originalEvent&&(e.originalEvent.stopPropagation(),e.originalEvent.preventDefault()),t._lockCW||t._lockCCW)return;let r=t._numericProcessor.getValueByAngle(i);if(t._normalizedStartAngle===t.endAngle){const e=t._numericProcessor.lockRotation("cw"===n&&!t.inverted&&!t.rightToLeft||t.rightToLeft&&t.inverted||"ccw"===n&&(t.inverted||t.rightToLeft&&!t.inverted),r);void 0!==e&&(r=e)}else"ccw"===n&&t._outsideEnd?t._lockCCW=!0:"cw"===n&&t._outsideStart&&(t._lockCW=!0);void 0!==r&&t._numericProcessor.compare(r,t.value)&&(cancelAnimationFrame(t._animationFrameId),t._updatePointer(r),"switchWhenReleased"!==t.mechanicalAction?t._numericProcessor.updateGaugeValue(r):t._valueAtMoveEnd=r)}_documentUpHandler(){const e=this;if(e._dragging&&(e._lockCW=!1,e._lockCCW=!1,e._dragging=!1,e.removeAttribute("dragged"),"switchWhileDragging"!==e.mechanicalAction)){const t="switchUntilReleased"===e.mechanicalAction?e._valueAtDragStart:e._valueAtMoveEnd;e._numericProcessor.compare(t,e.value)&&("switchUntilReleased"===e.mechanicalAction&&e._animate(e.value,t),e._numericProcessor.updateGaugeValue(t))}}_downHandler(e,t){const i=this,a=i.enableShadowDOM||i.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("needle"!==i.analogDisplayType&&!t||i.disabled||i.readonly||i.$.digitalDisplay.contains(a)||!Smart.Utilities.Core.isMobile&&("buttons"in e&&1!==e.buttons||1!==e.which))return void e.stopPropagation();const n=e.pageX,r=e.pageY;if(i._measurements.center=i._getCenterCoordinates(),"needle"===i.analogDisplayType&&Math.sqrt(Math.pow(i._measurements.center.x-n,2)+Math.pow(i._measurements.center.y-r,2))>i._measurements.radius)return void e.stopPropagation();"switchUntilReleased"===i.mechanicalAction&&(i._valueAtDragStart=i.value),i._angle=i._getAngleByCoordinate(n,r),i._quadrant=i._getQuadrant(i._angle);const s=i._numericProcessor.getValueByAngle(i._angle);void 0!==s&&i._numericProcessor.compare(s,i.value)&&(i._animate(i.value,s),"switchWhenReleased"!==i.mechanicalAction?i._numericProcessor.updateGaugeValue(s):i._valueAtMoveEnd=s),i._dragging=!0,i.setAttribute("dragged","")}_animate(e,t){const i=this,a=i.logarithmicScale,n=Math.max(1,Math.round(i.animationDuration/15));if(cancelAnimationFrame(i._animationFrameId),!i.hasAnimation||1===n)return void i._updatePointer(t);const r=i._numericProcessor;let s,l,o,d,c=1;void 0===t&&(t=i.value),e=parseFloat(r.validate(r.createDescriptor(e),i._minObject,i._maxObject)),t=parseFloat(r.validate(r.createDescriptor(t),i._minObject,i._maxObject)),a?(o=Math.log10(e),d=Math.log10(t)):(o=e,d=t);const u=Math.abs(d-o);function _(){s=l(),a&&(s=Math.pow(10,s))}l=t>e?function(){return Math.min(Smart.Utilities.Animation.Easings.easeInOutSine(c,o,u,n),d)}:function(){return Math.max(2*o-Smart.Utilities.Animation.Easings.easeInOutSine(c,o,u,n),d)},_(),i._animationFrameId=requestAnimationFrame((function e(){if(c++,c===n)return s=t,void i._updatePointer(s);i._updatePointer(s),_(),i._animationFrameId=requestAnimationFrame(e)}))}_drawFill(e,t){const i=this;if("needle"===i.analogDisplayType)return;void 0===t&&(t=i._number);const a=i._measurements,n=a.radius,r=n-i._distance.trackDistance-a.trackBorderWidth/2-1;if("fill"===i.analogDisplayType){const s=i._numericProcessor.getAngleByValue(t,!0,!0);let l,o;!i.inverted&&!i.rightToLeft||i.rightToLeft&&i.inverted?(l=s,o=i.endAngle):(l=i.startAngle,o=s),e?i._fill.setAttribute("d",i._draw.pieSlicePath(n,n,r-a.trackWidth,r,l,o,0)):(i._fill=i._draw.pieslice(n,n,r-a.trackWidth,r,l,o,0,{class:"smart-value"}),i._fillListener=new Smart.Utilities.InputEvents(i._fill),i._fillListener.down((function(e){i._SVGElementDownHandler(e)})))}else{const s=r+a.trackBorderWidth/2,l=s-a.lineSize,o=i._numericProcessor.getAngleByValue(t),d=Math.sin(o),c=Math.cos(o),u=n+s*d,_=n+s*c,m=n+l*d,g=n+l*c;e?(i._line.setAttribute("x1",u),i._line.setAttribute("y1",_),i._line.setAttribute("x2",m),i._line.setAttribute("y2",g)):(i._line=i._draw.line(u,_,m,g,{class:"smart-line"}),i._lineListener=new Smart.Utilities.InputEvents(i._line),i._lineListener.down((function(e){i._SVGElementDownHandler(e)})))}}_drawLabel(e,t,i,a){const n=this,r=n._measurements,s=r.radius,l={class:"smart-label"+(!1!==a?" smart-label-middle":""),"font-size":r.fontSize,"font-family":r.fontFamily,"font-weight":r.fontWeight,"font-style":r.fontStyle};t=n._formatLabel(t.toString(),!1);const o=n._draw.measureText(t,0,l),d=s-i-n._largestLabelSize/2,c=Math.round(s+d*Math.sin(e))-o.width/2,u=Math.round(s+d*Math.cos(e))-o.height/2,_=n._draw.text(t,c,u,o.width,o.height,0,l);n._minCoordinates.push(u),n._maxCoordinates.push(u+_.getBBox().height)}_drawNeedle(e,t){const i=this,a=i._measurements;void 0===t&&(t=i._number);const n=i._numericProcessor.getAngleByValue(t);if(i.drawNeedle){if(i._customSVGElements=i.drawNeedle(i,i._draw,a.radius,n,i._distance.needleDistance),i._customSVGElements){const e=i._customSVGElements[0].parentElement||i._customSVGElements[0].parentNode;for(let t=0;t<i._customSVGElements.length;t++)e.insertBefore(i._customSVGElements[t],i._centralCircle)}}else{let t;t="center"===i.needlePosition?i._computeNeedlePointsCenter(a.needleWidth/2,n):i._computeNeedlePointsEdge(a.needleWidth/2,n,a.needleLength),e?i._needle.setAttribute("d",t):i._needle=i._draw.path(t,{class:"smart-needle"})}}_drawRanges(){const e=this,t=e._numericProcessor,i=e.ranges;if(!e.showRanges||0===i.length)return;const a=e._measurements,n=a.radius;let r,s,l,o;"needle"===e.analogDisplayType?(s=a.rangeSize,"inside"===e.scalePosition?r=n-1:(r=n-e._distance.needleDistance-2,"none"===e.labelsVisibility&&"none"===e.ticksVisibility&&(r+=1))):(r=n-e._distance.trackDistance-a.trackBorderWidth/2-1,s=a.trackWidth),!e.inverted&&!e.rightToLeft||e.rightToLeft&&e.inverted?(l="startValue",o="endValue"):(l="endValue",o="startValue");for(let a=0;a<i.length;a+=1){let d=i[a],c=t.validateColorRange(d[l]),u=t.validateColorRange(d[o]);const _=e._draw.pieslice(n,n,r-s,r,t.getAngleByValue(u,!0,!0),t.getAngleByValue(c,!0,!0),0,{class:"smart-range "+d.className});e._ranges.push(_)}}_drawTick(e,t,i){const a=this,n=a._measurements,r=n.radius;let s,l="smart-tick";"major"===i?s=n.majorTickSize:(s=n.minorTickSize,l+=" smart-tick-minor");const o=t-s,d=r+t*Math.sin(e),c=r+t*Math.cos(e),u=r+o*Math.sin(e),_=r+o*Math.cos(e);a._draw.line(d,c,u,_,{class:l}),a._minCoordinates.push(Math.min(c,_)),a._maxCoordinates.push(Math.max(c,_))}_getAngleByCoordinate(e,t){const i=this,a=i._measurements.center;let n=-1*Math.atan2(t-a.y,e-a.x)*180/Math.PI;return n<0&&(n+=360),i._actualAngle=n,i._normalizedStartAngle===i.endAngle||function(e,t,i){for(;t<e;)t+=360;for(;i<e;)i+=360;return i>=e&&i<=t}(i._normalizedStartAngle,i.endAngle,n)?(i._outsideRange=!1,i._outsideStart=!1,i._outsideEnd=!1):(i._numericProcessor._getAngleDifference(n,i._normalizedStartAngle)<=i._numericProcessor._getAngleDifference(n,i.endAngle)?(n=i._normalizedStartAngle,i._outsideStart=!0,i._outsideEnd=!1):(n=i.endAngle,i._outsideEnd=!0,i._outsideStart=!1),i._outsideRange=!0),n}_getCenterCoordinates(){const e=this.$.container.getBoundingClientRect(),t=this._measurements.radius,i=document.body.scrollLeft||document.documentElement.scrollLeft,a=document.body.scrollTop||document.documentElement.scrollTop;return{x:e.left+i+t,y:e.top+a+t}}_getInlineColors(){const e=this;let t="",i="",a="";return e._track&&(t=e._track.style.fill),e._fill&&(i=e._fill.style.fill),e._line&&(a=e._line.style.stroke),[t,i,a]}_getMeasurements(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._measurements;t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2;const i=document.createElement("div");e.shadowRoot?e.shadowRoot.appendChild(i):e.appendChild(i),i.className="smart-tick",t.majorTickSize=i.offsetWidth,i.className+=" smart-tick-minor",t.minorTickSize=i.offsetWidth,i.className="smart-label";const a=window.getComputedStyle(i);t.fontSize=a.fontSize,t.fontFamily=a.fontFamily,t.fontWeight=a.fontWeight,t.fontStyle=a.fontStyle,t.trackWidth=0,t.trackBorderWidth=0,"needle"===e.analogDisplayType?(i.className="smart-needle",t.needleWidth=i.offsetWidth,t.needleLength=i.offsetHeight,i.className="smart-range",t.rangeSize=i.offsetWidth):(i.className="smart-track",t.trackBorderWidth=parseFloat(a.strokeWidth),t.trackWidth=Math.min(i.offsetWidth,t.radius-t.trackBorderWidth),t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2)),e.shadowRoot?e.shadowRoot.removeChild(i):e.removeChild(i)}_getQuadrant(e){return e>270?4:e>180?3:e>90?2:1}_getRotationDirection(){const e=this,t=e._getQuadrant(e._actualAngle);return e._actualAngle<e._angle&&(1!==t||4!==e._quadrant)||e._actualAngle>e._angle&&4===t&&1===e._quadrant?"cw":"ccw"}_initTickIntervalHandler(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._formatLabel(e.min,!1),i=e._formatLabel(e.max,!1);e._tickIntervalHandler=new Smart.Utilities.TickIntervalHandler(e,t,i,"smart-label",e._settings.size,"integer"===e.scaleType,e.logarithmicScale)}_keydownHandler(e){const t=this,i=t._getEventValue(),a=t._number.toString();"numeric"===t.mode?(t.value.toString()!==a&&(t.value=a,t.$.digitalDisplay.value=a),super._keydownHandler(e),t.value.toString()!==i&&t.$.fireEvent("change",{value:t.value,oldValue:i})):(t.value.toString()!==a&&(t._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a),t.value=t._number),super._keydownHandler(e),0!==t._valueDate.compare(i)&&t.$.fireEvent("change",{value:t._getEventValue(),oldValue:i})),t._setAriaValue("valuenow")}_normalizeAngle(e){return(e%=360)<0&&(e+=360),e}_renderAnalogItems(e){const t=this;if(!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);const i=t._getInlineColors();if(t._unlisten(),t._draw.clear(),delete t._needle,delete t._centralCircle,delete t._track,delete t._trackListener,delete t._fill,delete t._fillListener,delete t._line,delete t._lineListener,t._ranges=[],t._minCoordinates=[],t._maxCoordinates=[],!1!==e&&(delete t._largestLabelSize,t._distance=t._calculateTickAndLabelDistance()),!1!==t._plotTicks||!1!==t._plotLabels){t._calculateTickInterval();const i=t._cachedLabelsSize,a=Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);!1!==e&&t._largestLabelSize!==a&&(t._largestLabelSize=a,t._distance=t._calculateTickAndLabelDistance(),t._calculateTickInterval())}t._coerceInitialDateValue&&(t._validateValue(),delete t._coerceInitialDateValue),t._drawRanges(),t._addAnalogDisplay(),("none"!==t.ticksVisibility&&!1!==t._plotTicks||"none"!==t.labelsVisibility&&!1!==t._plotLabels)&&(t.customInterval||t._dateInterval?t._numericProcessor.addGaugeCustomTicks():t._numericProcessor.addGaugeTicksAndLabels()),t._drawFill(!1),t._updateSize(),t._restoreInlineColors(i[0],i[1],i[2])}refresh(){const e=this;if(e._preventResizeHandler)return void delete e._preventResizeHandler;if(!e._isVisible())return void(e._renderingSuspended=!0);if(e._renderingSuspended)return void e._createElement();const t=e._measurements;if(!(e._renderingSuspended||t.cachedWidth===e.offsetWidth&&t.cachedHeight===e.offsetHeight)){if("circle"===e.sizeMode)e.offsetWidth!==e.offsetHeight&&(t.cachedWidth!==e.offsetWidth?(e.style.height=e.offsetWidth+"px",e._preventResizeHandler=!0):t.cachedHeight!==e.offsetHeight&&(e.style.width=e.offsetHeight+"px",e._preventResizeHandler=!0));else if("auto"===e.sizeMode){if(t.cachedHeight!==e.offsetHeight&&t.cachedWidth===e.offsetWidth)return e.style.height=t.cachedHeight+"px",void(e._preventResizeHandler=!0);e.$.container.style.height=e.offsetWidth+"px"}t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2,e._equalToHalfRadius?t.innerRadius=t.radius/2:t.innerRadius=t.radius-e._distance.labelDistance,e._renderAnalogItems(!1)}}_resizeHandler(){this.refresh()}_restoreInlineColors(e,t,i){const a=this;a._track&&""!==e&&(a._track.style.fill=e),a._fill&&""!==t&&(a._fill.style.fill=t),a._line&&""!==i&&(a._line.style.stroke=i)}_selectStartHandler(e){this._dragging&&e.preventDefault()}_setUpdatePointerMethod(){const e=this;"needle"===e.analogDisplayType?e._updatePointer=function(t){if(e._customSVGElements)for(let t=0;t<e._customSVGElements.length;t++)e._draw.removeElement(e._customSVGElements[t]);e._drawNeedle(!0,t)}:e._updatePointer=function(t){e._drawFill(!0,t)}}_styleChangedHandler(e){const t=this;e.detail.styleProperties&&e.detail.styleProperties["min-height"]||(t._isVisible()?t._renderingSuspended?t._createElement():(t._getMeasurements(),t._initTickIntervalHandler(),t._renderAnalogItems()):t._renderingSuspended=!0)}_SVGElementDownHandler(e){const t=this,i=t.context;t.context=t,t._downHandler(e,!0),t.context=i}_unlockRotation(e,t,i,a,n){const r=this,s=n.firstCondition,l=n.secondCondition,o=r._getQuadrant(a);(s&&(4!==i||1!==o)||l&&4===i&&1===o)&&r._numericProcessor._getAngleDifference(t,a)<10&&(r[e]=!1)}_updateSize(e){const t=this;if("auto"!==t.sizeMode&&void 0===e)return;const i=t._minCoordinates,a=t._maxCoordinates;let n=i[0],r=a[0];for(let e=1;e<i.length;e++)n=Math.min(n,i[e]);for(let e=1;e<a.length;e++)r=Math.max(r,a[e]);const s=t.getBoundingClientRect();if(t.digitalDisplay){const e=t.$.digitalDisplay.getBoundingClientRect();n=Math.min(n,e.top-s.top),r=Math.max(r,e.bottom-s.top)}if("needle"!==t.analogDisplayType){const e=t._track.getBBox();n=Math.min(n,e.y),r=Math.max(r,e.y+e.height)}for(let e=0;e<t._ranges.length;e++){const i=t._ranges[e].getBBox();n=Math.min(n,i.y-s.top),r=Math.max(r,i.y+i.height-s.top)}n-=2;const l=r-n;if(void 0!==e)return Math.round(l);t._preventResizeHandler=!0,t.style.height=l+"px",t.$.container.style.marginTop=-1*n+"px",t._measurements.cachedHeight=l}_updateValue(e){this._numericProcessor.updateGaugeValue(e)}_validate(e,t,i){const a=this,n=a.value;a._validateValue(t),!i||35!==i&&36!==i?a._updatePointer():a._animate(n)}_validateAngles(){const e=this;e._normalizedStartAngle=e._normalizeAngle(e.startAngle),e.endAngle=e._normalizeAngle(e.endAngle),e._normalizedStartAngle<e.endAngle?e.startAngle=e._normalizedStartAngle:e.startAngle=e._normalizedStartAngle-360,e._angleDifference=e.endAngle-e.startAngle}_validateInitialPropertyValues(){super._validateInitialPropertyValues();const e=this;"circle"===e.sizeMode?e.offsetWidth<e.offsetHeight?e.style.height=e.offsetWidth+"px":e.offsetWidth>e.offsetHeight&&(e.style.width=e.offsetHeight+"px"):"auto"===e.sizeMode&&(e.offsetHeight!==e.offsetWidth&&(e.style.height=e.offsetWidth+"px"),e.$.container.style.height=e.offsetWidth+"px"),e._validateAngles(),null!==e.significantDigits?e.$.digitalDisplay.significantDigits=e.significantDigits:null!==e.precisionDigits&&(e.$.digitalDisplay.precisionDigits=e.precisionDigits)}_validateValue(e,t){const i=this,a=i._numericProcessor,n=i.logarithmicScale,r="strict"===i.validation;let s,l,o,d,c,u=r&&void 0!==t;void 0===e?(u=!1,e=i.value):e=e.toString(),a.regexScientificNotation.test(e)&&(e=a.scientificToDecimal(e)),isNaN(e)&&(e=t||0),i.coerce||r?(s=a.getCoercedValue(a.createDescriptor(e,!0,!0,!0),!1,n),i._number=s,l=s.toString(),o=l):(u=!1,s=a.getCoercedValue(a.createDescriptor(e,!0,!0,!1),!1,n),i._number=a.validate(s,a.createDescriptor(i._minObject),a.createDescriptor(i._maxObject)),l=s.toString(),o=i._number.toString()),"numeric"===i.mode?(d=t,c=l,i.value=l,i.$.digitalDisplay.value=l):(d=i._valueDate,i._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(l),c=i._valueDate,i.value=s),i._drawValue=n?Math.log10(o).toString():o,u&&a.compare(i._number,t)&&i.$.fireEvent("change",{value:c,oldValue:d}),i._setAriaValue("valuenow"),delete i._valueBeforeCoercion}_unlisten(){const e=this;e._trackListener&&e._trackListener.unlisten(),e._fillListener&&e._fillListener.unlisten(),e._lineListener&&e._lineListener.unlisten()}});