
/* Smart UI v12.0.1 (2022-01-20) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Chart",class{_getChartDataFields(e){const t=this,i=e[0];let a,n=!0,o=[];for(let e in i)"$"!==e&&("string"===t.dataSource.dataFields.find((t=>t.name===e)).dataType?0===t.columns.findIndex((t=>t.dataField===e))&&(a=e):(n=!1,o.push({dataField:e,displayText:e})));return{xAxisDataField:a,series:o,stringOnly:n}}createChart(e,t){const i=this,a=i.getSelection(),n=a.rows,o=a.columns,s=a.cells,l=document.createElement("smart-chart"),r=[],d={};let c,h=[],g=[];if(s&&s.length>1&&s.forEach((e=>{-1===h.indexOf(e.row.index)&&h.push(e.row.index),-1===g.indexOf(e.dataField)&&g.push(e.dataField)})),t)r.concat(t);else for(let e=0;e<i.dataSource.length;e++){const t={};if(n){if(!n.find((t=>t.row.index===e)))continue}else{if(o){o.forEach((a=>{t[a.dataField]=i.dataSource[e][a.dataField]})),r.push(t);continue}if(s&&s.length>1){if(-1===h.indexOf(e))continue;g.forEach((a=>{t[a]=i.dataSource[e][a]})),r.push(t);continue}}i.columns.forEach((a=>t[a.dataField]=i.dataSource[e][a.dataField])),r.push(t)}const f=i._getChartDataFields(r);if(f.stringOnly){if(i.header.visible&&i.$.header.firstElementChild){const t=i.enableShadowDOM?i.shadowRoot.getElementById(e):i.querySelector("#"+e);i.$.header.firstElementChild.classList.add("warning"),t&&t.classList.add("warning"),setTimeout((function(){i.$.header.firstElementChild.classList.remove("warning"),t&&t.classList.remove("warning")}),1e3)}}else{if(c=f.series,l.caption="",l.description="",l.clip=!1,l.showLegend=!0,l.showBorderLine=!1,l.padding={left:5,top:10,right:5,bottom:5},l.dataSource=r,l.xAxis={dataField:f.xAxisDataField,gridLines:{visible:!0}},l.valueAxis={displayValueAxis:!0,description:i.charting.description,axisSize:"auto",formatSettings:i.charting.formatSettings},l.colorScheme=i.charting.colorScheme,l.seriesGroups=[d],d.formatSettings=i.charting.formatSettings,d.series=c,"line"===e)c.forEach((function(e){e.symbolSize=8,e.symbolType="square"}));else if("pie"===e){const e=c[0].dataField;delete d.formatSettings,d.formatFunction=function(e,t){return isNaN(e)&&"object"==typeof e?t:e},d.showLabels=!0,c.length=0,c.push({dataField:e,displayText:f.xAxisDataField,initialAngle:0})}else if("bar"===e)e="column",d.orientation="horizontal",l.xAxis.textRotationAngle=90,l.valueAxis.textRotationAngle=30,l.valueAxis.flip=!0;else if("area"===e){let e=1;for(let t=0;t<c.length;t++)c[t].opacity=e,e-=.2,e=Math.max(.3,e)}if(d.type=e,i.onChartInit&&i.onChartInit(l),i.charting.appendTo){const e="string"===i.charting.appendTo?document.querySelector(i.charting.appendTo):i.charting.appendTo;e&&e.appendChild(l)}else i._openChartDialog(l,e)}}_openChartDialog(e,t){const i=this;if(!i.charting.dialog.enabled)return!1;const a=i._dialogChart||i._createDialog(i.charting.dialog),n=t.substring(0,1).toUpperCase()+t.substring(1),o="{{message}}"===i.charting.dialog.header?i.localize("dialogChartHeader",{value:n}):i.charting.dialog.header;e.style.width="100%",e.style.height="100%",a.header.innerHTML=o,a.content.innerHTML="",a.content.style.width="100%",a.content.style.height="100%",a.btnCancel.classList.add("smart-hidden"),i._dialogChart||(a.modal=!0,a.onOpen=function(){i.charting.dialog.visible=!0},a.onClose=function(){i.charting.dialog.visible=!1},a.btnConfirm.onclick=function(){a.close()},a.btnClose.onclick=function(){a.close()},a.onkeydown=function(e){"Escape"===e.key&&a.close()},i._dialogChart=a),a.open(),setTimeout((function(){a.btnConfirm.focus(),a.content.appendChild(e)}),100)}});