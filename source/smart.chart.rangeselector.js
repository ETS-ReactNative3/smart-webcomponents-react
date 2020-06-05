
/* Smart HTML Elements v7.6.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}({14:function(e,t){!function(){"use strict";Smart.Chart&&(Smart.Chart.prototype._moduleRangeSelector=!0,Smart.Chart.prototype._renderXAxisRangeSelector=function(e,t){const i=this,r=i.seriesGroups[e],s=i._getXAxis(e),o=s?s.rangeSelector:void 0;if(!i._isSelectorRefresh){const e=(o&&o.renderTo?o.renderTo:i).getElementsByClassName("smart-chart-range-selector")[0];e&&e.parentElement.removeChild(e)}if(!s||!1===s.visible||"spider"===r.type)return!1;if(!i._isGroupVisible(e))return!1;if(!o)return!1;let a="horizontal"===r.orientation;o.renderTo&&(a=!1),i.rightToLeft&&(s.flip=!0);let n=a?i.offsetHeight:i.offsetWidth;n-=4;const l=this._getXAxisStats(e,s,n);let h=s.position;if(o.renderTo&&o.position&&(h=o.position),!this._isSelectorRefresh){const i=o.renderTo,r=document.createElement("div");if(r.className="smart-chart-range-selector smart-unselectable",r.style.position="absolute",r.style.backgroundColor="transparent",r.style.onselectstart=function(){return!1},i)i.appendChild(r),r.style.width=i.offsetWidth+"px",r.style.height=i.offsetHeight+"px",t.width=i.offsetWidth,t.height=i.offsetHeight;else{this.renderer.getContainer().appendChild(r);const e=this._selectorGetSize(s);a?(r.style.left=1+t.x+("right"!==h?-e:t.width)+"px",r.style.top="0",r.style.height=n+"px",r.style.width=e+"px",t.height=e):(r.style.left="1px",r.style.top=t.y+("top"!==h?t.height:-e)+"px",r.style.height=e+"px",r.style.width=n+"px")}r.parentDiv=r.parentElement,this._refreshSelector(e,s,l,r,t,a)}return this._isSelectorRefresh=!1,!0},Smart.Chart.prototype._refreshSelector=function(e,t,i,r,s,o){const a=this,n={},l=t.rangeSelector;for(let e in l)n[e]=l[e];delete n.padding;let h=n.minValue,d=n.maxValue;isNaN(h)&&(h=Math.min(i.min.valueOf(),i.dsRange.min.valueOf())),isNaN(d)&&(d=Math.max(i.max.valueOf(),i.dsRange.max.valueOf())),this._isDate(i.min)&&(h=new Date(h)),this._isDate(i.max)&&(d=new Date(d));let p=t.position;l.renderTo&&l.position&&(p=l.position),n.dataField=t.dataField,delete n.rangeSelector,n.type=t.type,n.baseUnit=null!==l.baseUnit?l.baseUnit:t.baseUnit,n.minValue=h,n.maxValue=d,n.flip=t.flip,n.position=p;let u=2,g=2,c=2,f=2;l.renderTo||(u=o?0:s.x,g=o?0:this._rect.width-s.x-s.width,c=o?s.y:5,f=o?this._paddedRect.height-this._plotRect.height:5);let m=l.padding;m=null!=m||l.renderTo?{left:m&&m.left?m.left:u,top:m&&m.top?m.top:c,right:m&&m.right?m.right:g,bottom:m&&m.bottom?m.bottom:f}:{left:u,top:c,right:g,bottom:f};let x=l.dataField;for(let e=0;null==x&&e<this.seriesGroups.length;e++)for(let t=0;null==x&&t<this.seriesGroups[e].series.length;t++)x=this.seriesGroups[e].series[t].dataField;const y={parentChart:this,padding:m,_isRangeSelectorInstance:!0,theme:this.theme,caption:l.caption,description:l.description,titlePadding:l.titlePadding,colorScheme:l.colorScheme||this.colorScheme,backgroundColor:l.backgroundColor||this.backgroundColor||a._getThemeColor("background"),backgroundImage:l.backgroundImage,showBorderLine:null!==l.showBorderLine?l.showBorderLine:!!l.renderTo,borderLineWidth:l.borderLineWidth||this.borderLineWidth,borderLineColor:l.borderLineColor||this.borderLineColor||a._getThemeColor("line"),rightToLeft:null!==l.rightToLeft?l.rightToLeft:this.rightToLeft,greyScale:null!==l.greyScale?l.greyScale:this.greyScale,renderEngine:this.renderEngine,showLegend:!1,animation:"none",enableEvents:!1,showToolTips:!1,dataSource:this.dataSource,xAxis:n,seriesGroups:[{orientation:o?"horizontal":"vertical",valueAxis:{visible:!1},type:l.serieType,skipOverlappingPoints:l.skipOverlappingPoints,columnSeriesOverlap:l.columnSeriesOverlap,columnsGapPercent:l.columnsGapPercent,seriesGapPercent:l.seriesGapPercent,series:[{dataField:x,opacity:.8,lineWidth:1}]}]};l.seriesGroups&&(y.seriesGroups=l.seriesGroups),l.valueAxis.visible&&(y.valueAxis=l.valueAxis),y.showBorderLine||(y.borderLineWidth=1,y.borderLineColor=a._get([this.backgroundColor,this.background,a._getThemeColor("background")]),y.showBorderLine=!0),a._supressBindingRefresh=!0,r.innerHTML="";const _=document.createElement("smart-chart");_.rightToLeft=a.rightToLeft,_.parentDiv=r;for(let e in y)_[e]=y[e];r.appendChild(_),a._rangeSelectorInstances[e]=_,a._supressBindingRefresh=!1;const S=function(){if(!_._plotRect)return;const t=_._paddedRect;if(t.height=_._plotRect.height,o||"top"!==p){if(o){const e=_._renderData[0].xAxis.rect.width;t.width-=e,"right"!==p&&(t.x+=e)}}else t.y+=_._renderData[0].xAxis.rect.height;if(a._createSliderElements(e,r,t,l,{min:n.minValue,max:n.maxValue}),a._rangeSelectorEventData={groupIndex:e,renderTo:r,swapXY:o},a.hasAttribute("aria-owns")){const e=a.getAttribute("aria-owns");a.setAttribute("aria-owns",e+" "+_.id)}else a.setAttribute("aria-owns",_.id)};_.isRendered?S():_.whenRendered(()=>{S()})},Smart.Chart.prototype._createSliderElements=function(e,t,i,r,s){const o=this,a=t.getElementsByClassName("slider")[0];a&&a.parentElement.removeChild(a);const n=r.selectedRangeColor||"blue",l=o._get([r.selectedRangeOpacity,.1]),h=o._get([r.unselectedRangeOpacity,.5]),d=r.unselectedRangeColor||"white",p=r.rangeLineColor||"grey",u=document.createElement("div");for(u.className="slider",u.style.position="absolute",u.style.background=n,u.style.opacity=l,u.style.left=i.x+"px",u.style.top=i.y+"px",u.style.width=i.width+"px",u.style.height=i.height+"px",t.appendChild(u);this._sliders.length<e+1;)this._sliders.push({});function g(e,t){const i=document.createElement("div");return i.className="slider",i.style.position="absolute",i.style.background=e,i.style.opacity=t,i}function c(){const e=document.createElement("div");return e.className="slider",e.style.position="absolute",e.style.background="#FFFFFF",e.style.borderStyle="solid",e.style.borderWidth="1px",e.style.borderRadius="3px",e.style.borderColor=p,e.setAttribute("role","slider"),e.setAttribute("aria-controls",o.id),e}const f=u.getBoundingClientRect(),m=t.getBoundingClientRect();this._sliders[e]={element:u,host:t.firstElementChild,_sliderInitialAbsoluteRect:{x:f.left,y:f.top,width:i.width,height:i.height},_hostInitialAbsolutePos:{x:m.left,y:m.top},getRect:function(){const e=t.getBoundingClientRect();return{x:e.left-this._hostInitialAbsolutePos.x+this._sliderInitialAbsoluteRect.x,y:e.top-this._hostInitialAbsolutePos.y+this._sliderInitialAbsoluteRect.y,width:this._sliderInitialAbsoluteRect.width,height:this._sliderInitialAbsoluteRect.height}},rect:i,left:g(d,h),right:g(d,h),leftTop:g(p,h),rightTop:g(p,h),leftBorder:g(p,h),leftBar:c(),rightBorder:g(p,h),rightBar:c()};const x=this._sliders[e];t.appendChild(x.left),t.appendChild(x.right),t.appendChild(x.leftTop),t.appendChild(x.rightTop),t.appendChild(x.leftBorder),t.appendChild(x.rightBorder),t.appendChild(x.leftBar),t.appendChild(x.rightBar);const y=this._renderData[e].xAxis.data.axisStats,_=y.min.valueOf(),S=y.max.valueOf();"number"==typeof y.min?(x.leftBar.setAttribute("aria-valuemin",s.min),x.leftBar.setAttribute("aria-valuemax",s.max),x.leftBar.setAttribute("aria-valuenow",_),x.rightBar.setAttribute("aria-valuemin",s.min),x.rightBar.setAttribute("aria-valuemax",s.max),x.rightBar.setAttribute("aria-valuenow",S)):(x.leftBar.setAttribute("aria-valuemin",s.min.getTime()),x.leftBar.setAttribute("aria-valuemax",s.max.getTime()),x.leftBar.setAttribute("aria-valuenow",y.min.getTime()),x.leftBar.setAttribute("aria-valuetext",y.min.toLocaleString()),x.rightBar.setAttribute("aria-valuemin",s.min.getTime()),x.rightBar.setAttribute("aria-valuemax",s.max.getTime()),x.rightBar.setAttribute("aria-valuenow",y.max.getTime()),x.rightBar.setAttribute("aria-valuetext",y.max.toLocaleString()));let b=this._valueToOffset(e,_),v=this._valueToOffset(e,S);if(b>v){const e=v;v=b,b=e}"horizontal"!==this.seriesGroups[e].orientation?(u.style.left=Math.round(i.x+b)+"px",u.style.top=i.y+"px",u.style.width=Math.round(v-b)+"px",u.style.height=i.height+"px"):(u.style.left=i.x+"px",u.style.top=Math.round(i.y+b)+"px",u.style.width=i.width+"px",u.style.height=Math.round(v-b)+"px"),this._setSliderPositions(e,b,v)},Smart.Chart.prototype._setSliderPositions=function(e,t,i){const r=this.seriesGroups[e],s=this._getXAxis(e),o=s.rangeSelector;let a="horizontal"===r.orientation;s.rangeSelector.renderTo&&(a=!1);let n=s.position;o.renderTo&&o.position&&(n=o.position);const l=this._sliders[e],h=a?"top":"left",d=a?"left":"top",p=a?"height":"width",u=a?"width":"height",g=a?"y":"x",c=a?"x":"y",f=l.rect;l.startOffset=t,l.endOffset=i,l.left.style[h]=f[g]+"px",l.left.style[d]=f[c]+"px",l.left.style[p]=t+"px",l.left.style[u]=f[u]+"px",l.right.style[h]=f[g]+i+"px",l.right.style[d]=f[c]+"px",l.right.style[p]=f[p]-i+1+"px",l.right.style[u]=f[u]+"px",l.leftTop.style[h]=f[g]+"px",l.leftTop.style[d]=f[c]+(a&&"right"===n||!a&&"top"!==n?0:f[u])+"px",l.leftTop.style[p]=t+"px",l.leftTop.style[u]="1px",l.rightTop.style[h]=f[g]+i+"px",l.rightTop.style[d]=f[c]+(a&&"right"===n||!a&&"top"!==n?0:f[u])+"px",l.rightTop.style[p]=f[p]-i+1+"px",l.rightTop.style[u]="1px",l.leftBorder.style[h]=f[g]+t+"px",l.leftBorder.style[d]=f[c]+"px",l.leftBorder.style[p]="1px",l.leftBorder.style[u]=f[u]+"px";let m=f[u]/4;m>20&&(m=20),m<3&&(m=3),l.leftBar.style[h]=f[g]+t-3+"px",l.leftBar.style[d]=f[c]+f[u]/2-m/2+"px",l.leftBar.style[p]="5px",l.leftBar.style[u]=m+"px",l.rightBorder.style[h]=f[g]+i+"px",l.rightBorder.style[d]=f[c]+"px",l.rightBorder.style[p]="1px",l.rightBorder.style[u]=f[u]+"px",l.rightBar.style[h]=f[g]+i-3+"px",l.rightBar.style[d]=f[c]+f[u]/2-m/2+"px",l.rightBar.style[p]="5px",l.rightBar.style[u]=m+"px"},Smart.Chart.prototype._resizeState={},Smart.Chart.prototype._onSliderMouseDown=function(e){e.stopImmediatePropagation(),e.stopPropagation();this._sliders[this._rangeSelectorEventData.groupIndex]&&(void 0!==this._resizeState.state&&null!==this._resizeState.state||this._testAndSetReadyResize(e),"ready"===this._resizeState.state&&(this._draggingRangeSelector=!0,this._resizeState.state="resizing"))},Smart.Chart.prototype._valueToOffset=function(e,t){const i=this.seriesGroups[e],r=this._sliders[e],s=r.host._renderData[0].xAxis.data.axisStats,o=s.min.valueOf();let a=s.max.valueOf()-o;0===a&&(a=1);const n=this._getXAxis(e),l="horizontal"===i.orientation?"height":"width",h=(t.valueOf()-o)/a;return r.getRect()[l]*(n.flip?1-h:h)},Smart.Chart.prototype._offsetToValue=function(e,t){const i=this._sliders[e],r=this.seriesGroups[e],s=this._getXAxis(e),o="horizontal"===r.orientation?"height":"width";let a=i.getRect()[o];0===a&&(a=1);const n=i.host._renderData[0].xAxis.data.axisStats,l=n.min.valueOf(),h=n.max.valueOf();let d=t/a*(h-l)+l;return!0===s.flip&&(d=h-t/a*(h-l)),this._isDate(n.min)||this._isDate(n.max)?d=new Date(d):((void 0===s.dataField||null===s.dataField||n.useIndeces)&&(d=Math.round(d)),d<n.min&&(d=n.min),d>n.max&&(d=n.max)),d},Smart.Chart.prototype._onSliderMouseUp=function(e){const t=this,i=t._rangeSelectorEventData.groupIndex,r=t._rangeSelectorEventData.swapXY,s=t._sliders[i];if(delete t._draggingRangeSelector,!s)return;if("resizing"!==t._resizeState.state)return;e.stopImmediatePropagation(),e.stopPropagation(),t._resizeState={},t.style.cursor="default";const o=r?"top":"left",a=r?"y":"x",n=s.element.getBoundingClientRect()[o],l=n+(r?s.element.offsetHeight:s.element.offsetWidth),h=s.getRect();let d=t._offsetToValue(i,n-h[a]),p=t._offsetToValue(i,l-h[a]);!s.host._renderData[0].xAxis.data.axisStats.isTimeUnit&&p.valueOf()-d.valueOf()>864e5&&(d.setHours(0,0,0,0),p.setDate(p.getDate()+1),p.setHours(0,0,0,0));const u=t._getXAxis(i);if(u.flip){const e=d;d=p,p=e}for(let e=0;e<t.seriesGroups.length;e++){t._getXAxis(e)===u&&(t._selectorRange[e]={min:d,max:p})}t._isSelectorRefresh=!0;const g=t.animation;t.$.fireEvent("rangeSelectionChanging",{instance:t,minValue:d,maxValue:p}),t.animation="none",t.update(),t.animation=g,t.$.fireEvent("rangeSelectionChanged",{instance:t,minValue:d,maxValue:p}),"number"==typeof d?(s.leftBar.setAttribute("aria-valuenow",d),s.rightBar.setAttribute("aria-valuenow",p)):(s.leftBar.setAttribute("aria-valuenow",d.getTime()),s.leftBar.setAttribute("aria-valuetext",d.toLocaleString()),s.rightBar.setAttribute("aria-valuenow",p.getTime()),s.rightBar.setAttribute("aria-valuetext",p.toLocaleString()))},Smart.Chart.prototype._onSliderMouseMove=function(e){const t=this,i=t._rangeSelectorEventData.groupIndex,r=t._sliders[i],s=t._rangeSelectorEventData.swapXY;if(!r)return;const o=r.getRect(),a=r.element,n={left:e.clientX,top:e.clientY},l=a.getBoundingClientRect(),h=s?"top":"left",d=parseFloat(getComputedStyle(a)[h]),p=s?"height":"width",u=s?"y":"x";if("resizing"===t._resizeState.state){if(e.stopImmediatePropagation(),e.stopPropagation(),"left"===t._resizeState.side){let e=Math.round(n[h]-l[h]),t=o[u];if(l[h]+e>=t&&l[h]+e<=t+o[p]){let t=parseInt(d),i=Math.max(2,(s?a.offsetHeight:a.offsetWidth)-e);a.style[p]=i+"px",a.style[h]=t+e+"px"}}else if("right"===t._resizeState.side){let e=s?a.offsetHeight:a.offsetWidth,t=Math.round(n[h]-l[h]-e),i=o[u];if(l[h]+e+t>=i&&l[h]+t+e<=i+o[p]){let i=Math.max(2,e+t);a.style[p]=i+"px"}}else if("move"===t._resizeState.side){let e=s?a.offsetHeight:a.offsetWidth,i=parseInt(d),r=Math.round(n[h]-t._resizeState.startPos);l[h]+r>=o[u]&&l[h]+r+e<=o[u]+o[p]&&(t._resizeState.startPos=n[h],a.style[h]=i+r+"px")}const g=parseInt(d)-r.rect[u],c=g+(s?a.offsetHeight:a.offsetWidth);t._setSliderPositions(i,g,c)}else t._testAndSetReadyResize(e)},Smart.Chart.prototype._testAndSetReadyResize=function(e){const t=this,i=t._rangeSelectorEventData,r=i.renderTo,s=i.groupIndex,o=t._sliders[s],a=i.swapXY,n=o.getRect(),l=o.element,h={left:e.clientX,top:e.clientY},d=l.getBoundingClientRect(),p=a?"left":"top",u=a?"top":"left",g=a?"width":"height",c=t._isTouchDevice?30:5;h[p]>=d[p]&&h[p]<=d[p]+n[g]?Math.abs(h[u]-d[u])<=c?(r.style.cursor=a?"row-resize":"col-resize",t._resizeState={state:"ready",side:"left"}):Math.abs(h[u]-d[u]-(a?l.offsetHeight:l.offsetWidth))<=c?(r.style.cursor=a?"row-resize":"col-resize",t._resizeState={state:"ready",side:"right"}):h[u]+c>d[u]&&h[u]-c<d[u]+(a?l.offsetHeight:l.offsetWidth)?(r.style.cursor="pointer",t._resizeState={state:"ready",side:"move",startPos:h[u]}):(r.style.cursor="default",t._resizeState={}):(r.style.cursor="default",t._resizeState={})},Smart.Chart.prototype._selectorGetSize=function(e){return e.rangeSelector.renderTo?0:e.rangeSelector.size||this._paddedRect.height/3})}()}});