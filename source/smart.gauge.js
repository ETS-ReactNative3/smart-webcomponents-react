
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=44)}({44:function(e,t){Smart("smart-gauge",class extends Smart.Tank{static get properties(){return{analogDisplayType:{value:"needle",allowedValues:["needle","fill","line"],type:"string"},animationDuration:{value:300,type:"number"},digitalDisplay:{value:!1,type:"boolean"},digitalDisplayPosition:{value:"bottom",allowedValues:["top","bottom","right","left","center"],type:"string"},drawNeedle:{value:null,type:"function?"},endAngle:{value:210,type:"number"},needlePosition:{value:"center",allowedValues:["center","edge"],type:"string"},ranges:{value:[],type:"array"},scalePosition:{value:"inside",allowedValues:["outside","inside","none"],type:"string"},showRanges:{value:!1,type:"boolean"},sizeMode:{value:"circle",allowedValues:["circle","auto","none"],type:"string"},startAngle:{value:-30,type:"number"}}}static get listeners(){return{down:"_downHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler","document.selectstart":"_selectStartHandler",keydown:"_keydownHandler",move:"_trackMoveHandler"}}static get requires(){return{"Smart.Utilities.Draw":"smart.draw.js","Smart.NumericTextBox":"smart.numerictextbox.js"}}static get styleUrls(){return["smart.numerictextbox.css","smart.gauge.css"]}template(){return'<div id="container" role="presentation">\n                <div id="svgContainer" class="smart-svg-container" role="presentation" aria-hidden="true"></div>\n                <div class="smart-digital-display-container" role="presentation">\n                    <smart-numeric-text-box id="digitalDisplay"\n                                            class="smart-digital-display"\n                                            decimal-separator="[[decimalSeparator]]"\n                                            max="[[max]]"\n                                            min="[[min]]"\n                                            name="[[name]]"\n                                            placeholder="Digital display"\n                                            readonly\n                                            right-to-left="[[rightToLeft]]"\n                                            input-format="[[scaleType]]"\n                                            scientific-notation="[[scientificNotation]]"\n                                            show-unit="[[showUnit]]"\n                                            unit="[[unit]]"\n                                            unfocusable\n                                            validation="interaction"\n                                            word-length="[[wordLength]]"\n                                            role="tooltip">\n                    </smart-numeric-text-box>\n                </div>\n            </div>'}attached(){const e=this;super.attached(),e.isCompleted&&(e._trackListener&&(e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down((function(t){e._SVGElementDownHandler(t)}))),e._fillListener&&(e._fillListener=new Smart.Utilities.InputEvents(e._fill),e._fillListener.down((function(t){e._SVGElementDownHandler(t)}))),e._lineListener&&(e._lineListener=new Smart.Utilities.InputEvents(e._line),e._lineListener.down((function(t){e._SVGElementDownHandler(t)}))))}detached(){super.detached(),this._unlisten()}ready(){super.ready()}getOptimalSize(){const e=this;return e._renderingSuspended?{width:0,height:0}:"auto"!==e.sizeMode?{width:e.offsetWidth,height:e._updateSize(!0)}:{width:e.offsetWidth,height:e.offsetHeight}}val(e){const t=this;if(void 0===e)return t._getEventValue();if("date"===t.mode&&(e=(e=Smart.Utilities.DateTime.validateDate(e)).getTimeStamp()),t._numericProcessor.compare(e,t.value)){const i=t.value;if(t._validateValue(e,t.value),!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);t._animate(i)}}_createElement(){const e=this;e.$.digitalDisplay.id||(e.$.digitalDisplay.id=e.id+"DigitalDisplay"),e.setAttribute("aria-describedby",e.$.digitalDisplay.id),"numeric"===e.mode?e._getEventValue=function(){return e.value}:(e._handleDateScale(),e.digitalDisplay=!1),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._draw=new Smart.Utilities.Draw(e.$.svgContainer),e._isVisible()?(e._renderingSuspended=!1,e._setSettingsObject(),e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._measurements={},e._validateInitialPropertyValues(),e._getMeasurements(),e._setDrawVariables(),e._getRange(),e._numericProcessor.getAngleRangeCoefficient(),"numeric"!==e.mode&&e.coerce?e._coerceInitialDateValue=!0:e._validateValue(),e._initTickIntervalHandler(),e._renderAnalogItems(),delete e._preventResizeHandler,e._setFocusable(),e._setUpdatePointerMethod()):e._renderingSuspended=!0}propertyChangedHandler(e,t,i){function n(i,n,r,s){const l=i&&n?"both":e;a._validateMinMax(l,!1,t),"logarithmicScale"!==e&&"scaleType"!==e&&("wordLength"!==e&&a[e]===t||"wordLength"===e&&a.min===r&&a.max===s)||(a._setDrawVariables(),a._getRange(),a._numericProcessor.getAngleRangeCoefficient(),a._initTickIntervalHandler(),a._renderAnalogItems(),a._validateValue(a.value,a.value),a._updatePointer())}const a=this;if(a._isVisible()&&!a._renderingSuspended)switch(e){case"analogDisplayType":delete a._customSVGElements,a._getMeasurements(),"needle"===i&&"center"===a.digitalDisplayPosition?a.digitalDisplayPosition="bottom":"needle"===t&&"bottom"===a.digitalDisplayPosition&&(a.digitalDisplayPosition="center"),a._renderAnalogItems(),a._setUpdatePointerMethod();break;case"coerce":if(i){const e=a.value;a._validateValue(e),a._updatePointer(),a._valueBeforeCoercion=e}else void 0!==a._valueBeforeCoercion&&(a._validateValue(a._valueBeforeCoercion),a._updatePointer());break;case"customInterval":i?(a._customTicks&&(a.customTicks=a._customTicks),a._numericProcessor.validateCustomTicks()):"date"===a.mode&&(a._customTicks=a.customTicks),a._initTickIntervalHandler(),a._renderAnalogItems(),a._coerceCustomInterval();break;case"customTicks":if("date"===a.mode&&!a.customInterval)return a._customTicks=i,void(a.customTicks=t);a._numericProcessor.validateCustomTicks(),a.customInterval&&(a._initTickIntervalHandler(),a._renderAnalogItems(),a._coerceCustomInterval());break;case"dateLabelFormatString":case"showUnit":case"unit":a._initTickIntervalHandler(),a._renderAnalogItems();break;case"decimalSeparator":case"scientificNotation":if("date"===a.mode)return;a._initTickIntervalHandler(),a._renderAnalogItems();break;case"digitalDisplay":case"digitalDisplayPosition":if("date"===a.mode)return void("digitalDisplay"===e&&(a.digitalDisplay=!1));a._updateSize();break;case"mechanicalAction":case"messages":break;case"disabled":case"readonly":case"unfocusable":super.propertyChangedHandler(e,t,i);break;case"drawNeedle":if("needle"!==a.analogDisplayType)return;null===t&&a._draw.removeElement(a._needle),null!==i?a._updatePointer():(a._renderAnalogItems(),delete a._customSVGElements);break;case"endAngle":case"startAngle":a._validateAngles(),a._numericProcessor.getAngleRangeCoefficient(),a._renderAnalogItems();break;case"interval":a._numericProcessor.validateInterval(a.interval),a._validateValue(),a._updatePointer();break;case"inverted":case"labelFormatFunction":case"rightToLeft":case"showRanges":a._renderAnalogItems();break;case"labelsVisibility":if("all"===t&&"endPoints"===i||"endPoints"===t&&"all"===i)return;a._getMeasurements(),a._renderAnalogItems();break;case"logarithmicScale":if("date"===a.mode)return void(a.logarithmicScale=!1);a._initTickIntervalHandler(),n(!0,!0);break;case"max":case"min":"date"===a.mode&&(delete a._dateInterval,a[e]=Smart.Utilities.DateTime.validateDate(i).getTimeStamp()),n("min"===e,"max"===e);break;case"mode":a.mode=t;break;case"needlePosition":"needle"===a.analogDisplayType&&a._updatePointer();break;case"precisionDigits":case"significantDigits":if("date"===a.mode)return;"precisionDigits"===e&&"integer"===a.scaleType&&a.error(a.localize("noInteger",{elementType:a.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==a.precisionDigits?a.precisionDigits=null:"precisionDigits"===e&&null!==a.significantDigits&&(a.significantDigits=null),null!==i&&(a.$.digitalDisplay.precisionDigits=a.precisionDigits,a.$.digitalDisplay.significantDigits=a.significantDigits),a._initTickIntervalHandler(),a._renderAnalogItems();break;case"ranges":if(!a.showRanges)return;a._renderAnalogItems();break;case"scaleType":if("date"===a.mode)return void(a.scaleType="integer");a._numericProcessor=new Smart.Utilities.NumericProcessor(a,"scaleType"),n(!0,!0);break;case"scalePosition":case"ticksPosition":a._getMeasurements(),a._renderAnalogItems();break;case"sizeMode":if("none"===i)return;a._preventResizeHandler=!0,"circle"===i?(a.$.container.removeAttribute("style"),a.style.height=a.offsetWidth+"px",a._measurements.cachedHeight=a.offsetHeight):"auto"===i&&(a.$.container.style.height=a.offsetWidth+"px",a._updateSize());break;case"theme":super.propertyChangedHandler(e,t,i),a._getMeasurements(),a._renderAnalogItems();break;case"ticksVisibility":if("minor"===t&&"major"===i||"major"===t&&"minor"===i)return;a._getMeasurements(),a._renderAnalogItems();break;case"validation":"strict"===i&&a._validateValue(a.value,a.value);break;case"value":{"date"===a.mode&&(i=(i=Smart.Utilities.DateTime.validateDate(i)).getTimeStamp()),a._validateValue(i,t);const e=i.toString();a.value.toString()===e&&(a._drawValue=a.logarithmicScale?Math.log10(e).toString():e),a._animate(t);break}case"wordLength":if("date"===a.mode)return void(a.wordLength="uint64");a._wordLengthNumber=a._numericProcessor.getWordLength(a.wordLength),"integer"===a.scaleType&&n(!0,!0,a.min,a.max);break;default:super.propertyChangedHandler(e,t,i)}else a._renderingSuspended=!0}_addAnalogDisplay(){const e=this,t=e._measurements,i=t.radius,n=e._draw;if("needle"===e.analogDisplayType){e._drawNeedle(!1);const a=(t.needleWidth+5)/2;e._centralCircle=n.circle(i,i,a,{class:"smart-needle-central-circle"}),e._minCoordinates.push(i-a),e._maxCoordinates.push(i+a)}else{const a=i-e._distance.trackDistance-t.trackBorderWidth/2-1;e._track=n.pieslice(i,i,a-t.trackWidth,a,e.startAngle,e.endAngle,0,{class:"smart-track"}),e._trackListener=new Smart.Utilities.InputEvents(e._track),e._trackListener.down((function(t){e._SVGElementDownHandler(t)}))}}_calculateTickAndLabelDistance(){const e=this,t=e._measurements;if("none"===e.scalePosition)return e._plotLabels=!1,e._plotTicks=!1,t.innerRadius=t.radius,{majorTickDistance:0,minorTickDistance:0,labelDistance:0,needleDistance:0,trackDistance:0};const i=e._tickIntervalHandler.labelsSize,n=e._largestLabelSize||Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);let a,r,s,l=1,o=0;return e._largestLabelSize=n,"outside"===e.scalePosition&&(l=n,a=l+t.majorTickSize-t.minorTickSize,r=0),"needle"===e.analogDisplayType?(s="outside"===e.scalePosition?l+t.majorTickSize:l+t.majorTickSize+n,"none"===e.ticksVisibility&&(r=0,s-=t.majorTickSize),"none"===e.labelsVisibility&&(s-=n,"outside"===e.scalePosition&&(l-=n,a-=n))):"none"===e.labelsVisibility&&"none"===e.ticksVisibility?o=0:"outside"===e.scalePosition?"scale"===e.ticksPosition?("none"===e.labelsVisibility&&(l=1,a=1+t.majorTickSize-t.minorTickSize),o="none"!==e.ticksVisibility?l+t.majorTickSize+2:n):"none"!==e.labelsVisibility?(a-=(t.trackWidth+t.trackBorderWidth)/4,o=l-1):(l=1,a=(t.trackWidth+t.trackBorderWidth)/4+1,o=0):"scale"===e.ticksPosition?(l=t.trackWidth+1.5*t.trackBorderWidth+2,"none"===e.ticksVisibility&&(r=l)):a=(t.trackWidth+t.trackBorderWidth)/4+1,void 0===a&&(a=l),void 0===r&&(r=l+t.majorTickSize),t.innerRadius=t.radius-r,delete e._plotLabels,delete e._plotTicks,delete e._equalToHalfRadius,"inside"===e.scalePosition?t.innerRadius<n&&(e._plotLabels=!1,"scale"===e.ticksPosition?"needle"!==e.analogDisplayType&&t.innerRadius<t.majorTickSize&&(e._plotTicks=!1):(e._equalToHalfRadius=!0,t.innerRadius=t.radius/2)):t.radius-o-t.trackBorderWidth<t.trackWidth&&(t.trackWidth=t.radius-o-t.trackBorderWidth,t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2,a=l+(t.majorTickSize-t.minorTickSize)/2)),{majorTickDistance:l,minorTickDistance:a,labelDistance:r,needleDistance:s,trackDistance:o}}_calculateTickInterval(){const e=this,t=e._tickIntervalHandler.getInterval("radial",e._drawMin,e._drawMax,e.$.container,e.logarithmicScale);t.major!==e._majorTicksInterval?(e._intervalHasChanged=!0,e._majorTicksInterval=t.major):e._intervalHasChanged=!0,e._minorTicksInterval=t.minor,"date"===e.mode&&e._calculateDateInterval(t.major)}_computeNeedlePointsCenter(e,t){const i=this,n=i._measurements,a=n.innerRadius,r=n.radius,s=Math.sin(t),l=Math.cos(t);let o;return o="inside"===i.scalePosition?.9*(a-i._largestLabelSize):.9*(a-i._distance.needleDistance),"M "+(r+e*l)+","+(r-e*s)+" L "+(r-e*l)+","+(r+e*s)+" L "+(r+o*s)+","+(r+o*l)+" Z"}_computeNeedlePointsEdge(e,t,i){const n=this._measurements.radius,a=n-this._distance.needleDistance,r=a-i,s=Math.sin(t),l=Math.cos(t),o=n+r*s,d=n+r*l;return"M "+(o+e*l)+","+(d-e*s)+" L "+(o-e*l)+","+(d+e*s)+" L "+(n+a*s)+","+(n+a*l)+" Z"}_documentMoveHandler(e){if(!this._dragging)return;const t=this,i=t._getAngleByCoordinate(e.pageX,e.pageY),n=t._getQuadrant(i),a=t._getRotationDirection();if(t._normalizedStartAngle===t.endAngle){let e;!t.inverted&&!t.rightToLeft||t.rightToLeft&&t.inverted?t._lockCW&&"ccw"===a?(e=t.endAngle,t._unlockRotation("_lockCW",i,n,e,{firstCondition:i>e,secondCondition:i<e})):t._lockCCW&&"cw"===a&&(e=t._normalizedStartAngle,t._unlockRotation("_lockCCW",i,n,e,{firstCondition:i<e,secondCondition:i>e})):t._lockCW&&"cw"===a?(e=t._normalizedStartAngle,t._unlockRotation("_lockCW",i,n,e,{firstCondition:i<e,secondCondition:i>e})):t._lockCCW&&"ccw"===a&&(e=t.endAngle,t._unlockRotation("_lockCCW",i,n,e,{firstCondition:i>e,secondCondition:i<e}))}else t._lockCW&&"ccw"===a&&!t._outsideRange&&t._numericProcessor._getAngleDifference(i,t._normalizedStartAngle)<10?t._lockCW=!1:t._lockCCW&&"cw"===a&&!t._outsideRange&&t._numericProcessor._getAngleDifference(i,t.endAngle)<10&&(t._lockCCW=!1);if(t._angle=i,t._quadrant=n,e.originalEvent&&(e.originalEvent.stopPropagation(),e.originalEvent.preventDefault()),t._lockCW||t._lockCCW)return;let r=t._numericProcessor.getValueByAngle(i);if(t._normalizedStartAngle===t.endAngle){const e=t._numericProcessor.lockRotation("cw"===a&&!t.inverted&&!t.rightToLeft||t.rightToLeft&&t.inverted||"ccw"===a&&(t.inverted||t.rightToLeft&&!t.inverted),r);void 0!==e&&(r=e)}else"ccw"===a&&t._outsideEnd?t._lockCCW=!0:"cw"===a&&t._outsideStart&&(t._lockCW=!0);void 0!==r&&t._numericProcessor.compare(r,t.value)&&(cancelAnimationFrame(t._animationFrameId),t._updatePointer(r),"switchWhenReleased"!==t.mechanicalAction?t._numericProcessor.updateGaugeValue(r):t._valueAtMoveEnd=r)}_documentUpHandler(){const e=this;if(e._dragging&&(e._lockCW=!1,e._lockCCW=!1,e._dragging=!1,e.removeAttribute("dragged"),"switchWhileDragging"!==e.mechanicalAction)){const t="switchUntilReleased"===e.mechanicalAction?e._valueAtDragStart:e._valueAtMoveEnd;e._numericProcessor.compare(t,e.value)&&("switchUntilReleased"===e.mechanicalAction&&e._animate(e.value,t),e._numericProcessor.updateGaugeValue(t))}}_downHandler(e,t){const i=this,n=i.enableShadowDOM||i.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if("needle"!==i.analogDisplayType&&!t||i.disabled||i.readonly||i.$.digitalDisplay.contains(n)||!Smart.Utilities.Core.isMobile&&("buttons"in e&&1!==e.buttons||1!==e.which))return void e.stopPropagation();const a=e.pageX,r=e.pageY;if(i._measurements.center=i._getCenterCoordinates(),"needle"===i.analogDisplayType){if(Math.sqrt(Math.pow(i._measurements.center.x-a,2)+Math.pow(i._measurements.center.y-r,2))>i._measurements.radius)return void e.stopPropagation()}"switchUntilReleased"===i.mechanicalAction&&(i._valueAtDragStart=i.value),i._angle=i._getAngleByCoordinate(a,r),i._quadrant=i._getQuadrant(i._angle);const s=i._numericProcessor.getValueByAngle(i._angle);void 0!==s&&i._numericProcessor.compare(s,i.value)&&(i._animate(i.value,s),"switchWhenReleased"!==i.mechanicalAction?i._numericProcessor.updateGaugeValue(s):i._valueAtMoveEnd=s),i._dragging=!0,i.setAttribute("dragged","")}_animate(e,t){const i=this,n=i.logarithmicScale,a=Math.max(1,Math.round(i.animationDuration/15));if(cancelAnimationFrame(i._animationFrameId),!i.hasAnimation||1===a)return void i._updatePointer(t);const r=i._numericProcessor;let s,l,o,d,c=1;void 0===t&&(t=i.value),e=parseFloat(r.validate(r.createDescriptor(e),i._minObject,i._maxObject)),t=parseFloat(r.validate(r.createDescriptor(t),i._minObject,i._maxObject)),n?(o=Math.log10(e),d=Math.log10(t)):(o=e,d=t);const u=Math.abs(d-o);function _(){s=l(),n&&(s=Math.pow(10,s))}l=t>e?function(){return Math.min(Smart.Utilities.Animation.Easings.easeInOutSine(c,o,u,a),d)}:function(){return Math.max(2*o-Smart.Utilities.Animation.Easings.easeInOutSine(c,o,u,a),d)},_(),i._animationFrameId=requestAnimationFrame((function e(){if(c++,c===a)return s=t,void i._updatePointer(s);i._updatePointer(s),_(),i._animationFrameId=requestAnimationFrame(e)}))}_drawFill(e,t){const i=this;if("needle"===i.analogDisplayType)return;void 0===t&&(t=i._number);const n=i._measurements,a=n.radius,r=a-i._distance.trackDistance-n.trackBorderWidth/2-1;if("fill"===i.analogDisplayType){const s=i._numericProcessor.getAngleByValue(t,!0,!0);let l,o;!i.inverted&&!i.rightToLeft||i.rightToLeft&&i.inverted?(l=s,o=i.endAngle):(l=i.startAngle,o=s),e?i._fill.setAttribute("d",i._draw.pieSlicePath(a,a,r-n.trackWidth,r,l,o,0)):(i._fill=i._draw.pieslice(a,a,r-n.trackWidth,r,l,o,0,{class:"smart-value"}),i._fillListener=new Smart.Utilities.InputEvents(i._fill),i._fillListener.down((function(e){i._SVGElementDownHandler(e)})))}else{const s=r+n.trackBorderWidth/2,l=s-n.lineSize,o=i._numericProcessor.getAngleByValue(t),d=Math.sin(o),c=Math.cos(o),u=a+s*d,_=a+s*c,m=a+l*d,g=a+l*c;e?(i._line.setAttribute("x1",u),i._line.setAttribute("y1",_),i._line.setAttribute("x2",m),i._line.setAttribute("y2",g)):(i._line=i._draw.line(u,_,m,g,{class:"smart-line"}),i._lineListener=new Smart.Utilities.InputEvents(i._line),i._lineListener.down((function(e){i._SVGElementDownHandler(e)})))}}_drawLabel(e,t,i,n){const a=this._measurements,r=a.radius,s={class:"smart-label"+(!1!==n?" smart-label-middle":""),"font-size":a.fontSize,"font-family":a.fontFamily,"font-weight":a.fontWeight,"font-style":a.fontStyle};t=this._formatLabel(t.toString(),!1);const l=this._draw.measureText(t,0,s),o=r-i-this._largestLabelSize/2,d=Math.round(r+o*Math.sin(e))-l.width/2,c=Math.round(r+o*Math.cos(e))-l.height/2,u=this._draw.text(t,d,c,l.width,l.height,0,s);this._minCoordinates.push(c),this._maxCoordinates.push(c+u.getBBox().height)}_drawNeedle(e,t){const i=this,n=i._measurements;void 0===t&&(t=i._number);const a=i._numericProcessor.getAngleByValue(t);if(i.drawNeedle){if(i._customSVGElements=i.drawNeedle(i,i._draw,n.radius,a,i._distance.needleDistance),i._customSVGElements){const e=i._customSVGElements[0].parentElement||i._customSVGElements[0].parentNode;for(let t=0;t<i._customSVGElements.length;t++)e.insertBefore(i._customSVGElements[t],i._centralCircle)}}else{let t;t="center"===i.needlePosition?i._computeNeedlePointsCenter(n.needleWidth/2,a):i._computeNeedlePointsEdge(n.needleWidth/2,a,n.needleLength),e?i._needle.setAttribute("d",t):i._needle=i._draw.path(t,{class:"smart-needle"})}}_drawRanges(){const e=this,t=e._numericProcessor,i=e.ranges;if(!e.showRanges||0===i.length)return;const n=e._measurements,a=n.radius;let r,s,l,o;"needle"===e.analogDisplayType?(s=n.rangeSize,"inside"===e.scalePosition?r=a-1:(r=a-e._distance.needleDistance-2,"none"===e.labelsVisibility&&"none"===e.ticksVisibility&&(r+=1))):(r=a-e._distance.trackDistance-n.trackBorderWidth/2-1,s=n.trackWidth),!e.inverted&&!e.rightToLeft||e.rightToLeft&&e.inverted?(l="startValue",o="endValue"):(l="endValue",o="startValue");for(let n=0;n<i.length;n+=1){let d=i[n],c=t.validateColorRange(d[l]),u=t.validateColorRange(d[o]);const _=e._draw.pieslice(a,a,r-s,r,t.getAngleByValue(u,!0,!0),t.getAngleByValue(c,!0,!0),0,{class:"smart-range "+d.className});e._ranges.push(_)}}_drawTick(e,t,i){const n=this._measurements,a=n.radius;let r,s="smart-tick";"major"===i?r=n.majorTickSize:(r=n.minorTickSize,s+=" smart-tick-minor");const l=t-r,o=a+t*Math.sin(e),d=a+t*Math.cos(e),c=a+l*Math.sin(e),u=a+l*Math.cos(e);this._draw.line(o,d,c,u,{class:s}),this._minCoordinates.push(Math.min(d,u)),this._maxCoordinates.push(Math.max(d,u))}_getAngleByCoordinate(e,t){const i=this,n=i._measurements.center;let a=-1*Math.atan2(t-n.y,e-n.x)*180/Math.PI;return a<0&&(a+=360),i._actualAngle=a,i._normalizedStartAngle===i.endAngle||function(e,t,i){for(;t<e;)t+=360;for(;i<e;)i+=360;return i>=e&&i<=t}(i._normalizedStartAngle,i.endAngle,a)?(i._outsideRange=!1,i._outsideStart=!1,i._outsideEnd=!1):(i._numericProcessor._getAngleDifference(a,i._normalizedStartAngle)<=i._numericProcessor._getAngleDifference(a,i.endAngle)?(a=i._normalizedStartAngle,i._outsideStart=!0,i._outsideEnd=!1):(a=i.endAngle,i._outsideEnd=!0,i._outsideStart=!1),i._outsideRange=!0),a}_getCenterCoordinates(){const e=this.$.container.getBoundingClientRect(),t=this._measurements.radius,i=document.body.scrollLeft||document.documentElement.scrollLeft,n=document.body.scrollTop||document.documentElement.scrollTop;return{x:e.left+i+t,y:e.top+n+t}}_getInlineColors(){const e=this;let t="",i="",n="";return e._track&&(t=e._track.style.fill),e._fill&&(i=e._fill.style.fill),e._line&&(n=e._line.style.stroke),[t,i,n]}_getMeasurements(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._measurements;t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2;const i=document.createElement("div");e.shadowRoot?e.shadowRoot.appendChild(i):e.appendChild(i),i.className="smart-tick",t.majorTickSize=i.offsetWidth,i.className+=" smart-tick-minor",t.minorTickSize=i.offsetWidth,i.className="smart-label";const n=window.getComputedStyle(i);t.fontSize=n.fontSize,t.fontFamily=n.fontFamily,t.fontWeight=n.fontWeight,t.fontStyle=n.fontStyle,t.trackWidth=0,t.trackBorderWidth=0,"needle"===e.analogDisplayType?(i.className="smart-needle",t.needleWidth=i.offsetWidth,t.needleLength=i.offsetHeight,i.className="smart-range",t.rangeSize=i.offsetWidth):(i.className="smart-track",t.trackBorderWidth=parseFloat(n.strokeWidth),t.trackWidth=Math.min(i.offsetWidth,t.radius-t.trackBorderWidth),t.lineSize=t.trackWidth+t.trackBorderWidth,"track"===e.ticksPosition&&(t.majorTickSize=t.lineSize,t.minorTickSize=t.majorTickSize/2)),e.shadowRoot?e.shadowRoot.removeChild(i):e.removeChild(i)}_getQuadrant(e){return e>270?4:e>180?3:e>90?2:1}_getRotationDirection(){const e=this._getQuadrant(this._actualAngle);return this._actualAngle<this._angle&&(1!==e||4!==this._quadrant)||this._actualAngle>this._angle&&4===e&&1===this._quadrant?"cw":"ccw"}_initTickIntervalHandler(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);const t=e._formatLabel(e.min,!1),i=e._formatLabel(e.max,!1);e._tickIntervalHandler=new Smart.Utilities.TickIntervalHandler(e,t,i,"smart-label",e._settings.size,"integer"===e.scaleType,e.logarithmicScale)}_keydownHandler(e){const t=this,i=t._getEventValue(),n=t._number.toString();"numeric"===t.mode?(t.value.toString()!==n&&(t.value=n,t.$.digitalDisplay.value=n),super._keydownHandler(e),t.value.toString()!==i&&t.$.fireEvent("change",{value:t.value,oldValue:i})):(t.value.toString()!==n&&(t._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(n),t.value=t._number),super._keydownHandler(e),0!==t._valueDate.compare(i)&&t.$.fireEvent("change",{value:t._getEventValue(),oldValue:i})),t._setAriaValue("valuenow")}_normalizeAngle(e){return(e%=360)<0&&(e+=360),e}_renderAnalogItems(e){const t=this;if(!t._isVisible()||t._renderingSuspended)return void(t._renderingSuspended=!0);const i=t._getInlineColors();if(t._unlisten(),t._draw.clear(),delete t._needle,delete t._centralCircle,delete t._track,delete t._trackListener,delete t._fill,delete t._fillListener,delete t._line,delete t._lineListener,t._ranges=[],t._minCoordinates=[],t._maxCoordinates=[],!1!==e&&(delete t._largestLabelSize,t._distance=t._calculateTickAndLabelDistance()),!1!==t._plotTicks||!1!==t._plotLabels){t._calculateTickInterval();const i=t._cachedLabelsSize,n=Math.max(i.minLabelSize,i.minLabelOtherSize,i.maxLabelSize,i.maxLabelOtherSize);!1!==e&&t._largestLabelSize!==n&&(t._largestLabelSize=n,t._distance=t._calculateTickAndLabelDistance(),t._calculateTickInterval())}t._coerceInitialDateValue&&(t._validateValue(),delete t._coerceInitialDateValue),t._drawRanges(),t._addAnalogDisplay(),("none"!==t.ticksVisibility&&!1!==t._plotTicks||"none"!==t.labelsVisibility&&!1!==t._plotLabels)&&(t.customInterval||t._dateInterval?t._numericProcessor.addGaugeCustomTicks():t._numericProcessor.addGaugeTicksAndLabels()),t._drawFill(!1),t._updateSize(),t._restoreInlineColors(i[0],i[1],i[2])}_resizeHandler(){const e=this;if(e._preventResizeHandler)return void delete e._preventResizeHandler;if(!e._isVisible())return void(e._renderingSuspended=!0);if(e._renderingSuspended)return void e._createElement();const t=e._measurements;if(!(e._renderingSuspended||t.cachedWidth===e.offsetWidth&&t.cachedHeight===e.offsetHeight)){if("circle"===e.sizeMode)e.offsetWidth!==e.offsetHeight&&(t.cachedWidth!==e.offsetWidth?(e.style.height=e.offsetWidth+"px",e._preventResizeHandler=!0):t.cachedHeight!==e.offsetHeight&&(e.style.width=e.offsetHeight+"px",e._preventResizeHandler=!0));else if("auto"===e.sizeMode){if(t.cachedHeight!==e.offsetHeight&&t.cachedWidth===e.offsetWidth)return e.style.height=t.cachedHeight+"px",void(e._preventResizeHandler=!0);e.$.container.style.height=e.offsetWidth+"px"}t.cachedWidth=e.offsetWidth,t.cachedHeight=e.offsetHeight,t.radius=t.cachedWidth/2,e._equalToHalfRadius?t.innerRadius=t.radius/2:t.innerRadius=t.radius-e._distance.labelDistance,e._renderAnalogItems(!1)}}_restoreInlineColors(e,t,i){const n=this;n._track&&""!==e&&(n._track.style.fill=e),n._fill&&""!==t&&(n._fill.style.fill=t),n._line&&""!==i&&(n._line.style.stroke=i)}_selectStartHandler(e){this._dragging&&e.preventDefault()}_setUpdatePointerMethod(){const e=this;"needle"===e.analogDisplayType?e._updatePointer=function(t){if(e._customSVGElements)for(let t=0;t<e._customSVGElements.length;t++)e._draw.removeElement(e._customSVGElements[t]);e._drawNeedle(!0,t)}:e._updatePointer=function(t){e._drawFill(!0,t)}}_styleChangedHandler(e){const t=this;e.detail.styleProperties&&e.detail.styleProperties["min-height"]||(t._isVisible()?t._renderingSuspended?t._createElement():(t._getMeasurements(),t._initTickIntervalHandler(),t._renderAnalogItems()):t._renderingSuspended=!0)}_SVGElementDownHandler(e){const t=this.context;this.context=this,this._downHandler(e,!0),this.context=t}_unlockRotation(e,t,i,n,a){const r=this,s=a.firstCondition,l=a.secondCondition,o=r._getQuadrant(n);(s&&(4!==i||1!==o)||l&&4===i&&1===o)&&r._numericProcessor._getAngleDifference(t,n)<10&&(r[e]=!1)}_updateSize(e){const t=this;if("auto"!==t.sizeMode&&void 0===e)return;const i=t._minCoordinates,n=t._maxCoordinates;let a=i[0],r=n[0];for(let e=1;e<i.length;e++)a=Math.min(a,i[e]);for(let e=1;e<n.length;e++)r=Math.max(r,n[e]);const s=t.getBoundingClientRect();if(t.digitalDisplay){const e=t.$.digitalDisplay.getBoundingClientRect();a=Math.min(a,e.top-s.top),r=Math.max(r,e.bottom-s.top)}if("needle"!==t.analogDisplayType){const e=t._track.getBBox();a=Math.min(a,e.y),r=Math.max(r,e.y+e.height)}for(let e=0;e<t._ranges.length;e++){const i=t._ranges[e].getBBox();a=Math.min(a,i.y-s.top),r=Math.max(r,i.y+i.height-s.top)}a-=2;const l=r-a;if(void 0!==e)return Math.round(l);t._preventResizeHandler=!0,t.style.height=l+"px",t.$.container.style.marginTop=-1*a+"px",t._measurements.cachedHeight=l}_updateValue(e){this._numericProcessor.updateGaugeValue(e)}_validate(e,t,i){const n=this,a=n.value;n._validateValue(t),!i||35!==i&&36!==i?n._updatePointer():n._animate(a)}_validateAngles(){const e=this;e._normalizedStartAngle=e._normalizeAngle(e.startAngle),e.endAngle=e._normalizeAngle(e.endAngle),e._normalizedStartAngle<e.endAngle?e.startAngle=e._normalizedStartAngle:e.startAngle=e._normalizedStartAngle-360,e._angleDifference=e.endAngle-e.startAngle}_validateInitialPropertyValues(){super._validateInitialPropertyValues();const e=this;"circle"===e.sizeMode?e.offsetWidth<e.offsetHeight?e.style.height=e.offsetWidth+"px":e.offsetWidth>e.offsetHeight&&(e.style.width=e.offsetHeight+"px"):"auto"===e.sizeMode&&(e.offsetHeight!==e.offsetWidth&&(e.style.height=e.offsetWidth+"px"),e.$.container.style.height=e.offsetWidth+"px"),e._validateAngles(),null!==e.significantDigits?e.$.digitalDisplay.significantDigits=e.significantDigits:null!==e.precisionDigits&&(e.$.digitalDisplay.precisionDigits=e.precisionDigits)}_validateValue(e,t){const i=this,n=i._numericProcessor,a=i.logarithmicScale,r="strict"===i.validation;let s,l,o,d,c,u=r&&void 0!==t;void 0===e?(u=!1,e=i.value):e=e.toString(),n.regexScientificNotation.test(e)&&(e=n.scientificToDecimal(e)),isNaN(e)&&(e=t||0),i.coerce||r?(s=n.getCoercedValue(n.createDescriptor(e,!0,!0,!0),!1,a),i._number=s,l=s.toString(),o=l):(u=!1,s=n.getCoercedValue(n.createDescriptor(e,!0,!0,!1),!1,a),i._number=n.validate(s,n.createDescriptor(i._minObject),n.createDescriptor(i._maxObject)),l=s.toString(),o=i._number.toString()),"numeric"===i.mode?(d=t,c=l,i.value=l,i.$.digitalDisplay.value=l):(d=i._valueDate,i._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(l),c=i._valueDate,i.value=s),i._drawValue=a?Math.log10(o).toString():o,u&&n.compare(i._number,t)&&i.$.fireEvent("change",{value:c,oldValue:d}),i._setAriaValue("valuenow"),delete i._valueBeforeCoercion}_unlisten(){const e=this;e._trackListener&&e._trackListener.unlisten(),e._fillListener&&e._fillListener.unlisten(),e._lineListener&&e._lineListener.unlisten()}})}});