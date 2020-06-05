
/* Smart HTML Elements v7.6.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}({15:function(t,e){!function(){"use strict";Smart.Chart&&(Smart.Chart.prototype._moduleWaterfall=!0,Smart.Chart.prototype._isSummary=function(t,e){const r=this.seriesGroups[t];for(let n=0;n<r.series.length;n++){if(void 0===r.series[n].summary)continue;if(void 0!==this._getDataValue(e,r.series[n].summary,t))return!0}return!1},Smart.Chart.prototype._applyWaterfall=function(t,e,r,n,i,o,a,u,s){const l=this.seriesGroups[r];if(0===t.length)return t;let f=n;const c={},p=[];let v;const m=[];for(let t=0;t<l.series.length;t++)m.push(this._isSerieVisible(r,t));const y={};for(let l=0;l<e;l++){let e=n,d=0;const N=this._isSummary(r,l);for(let r=0;r<t.length;r++){if(!m[r])continue;let h=0;if(N){h=e===n?i:0,t[r][l].value=c[r],t[r][l].summary=!0,v=t[r][l].value<h,u&&(v=!v);let f=0;f=isNaN(o)?this._getDataPointOffsetDiff(t[r][l].value,h,h,NaN,a,n,u):this._getDataPointOffsetDiff(t[r][l].value+d,0===d?i:d,h||i,o,a,n,u),t[r][l].to=e+(v?f:-f),t[r][l].from=e,s&&(d+=t[r][l].value,e=t[r][l].to);continue}const _=s?-1:r;if(isNaN(t[r][l].value))continue;void 0===y[_]&&(h=i,y[_]=!0),v=t[r][l].value<h,u&&(v=!v);let g=NaN;g=s?f:0===l?n:t[r][p[r]].to;let b=0;b=isNaN(o)?this._getDataPointOffsetDiff(t[r][l].value,h,h,NaN,a,n,u):this._getDataPointOffsetDiff(t[r][l].value+(isNaN(c[_])?0:c[_]),isNaN(c[_])?i:c[_],h||i,o,a,g,u),t[r][l].to=f=g+(v?b:-b),t[r][l].from=g,isNaN(c[_])?c[_]=t[r][l].value:c[_]+=t[r][l].value,-1===_&&(isNaN(c[r])?c[r]=t[r][l].value:c[r]+=t[r][l].value),s||(p[r]=l)}}return t})}()}});