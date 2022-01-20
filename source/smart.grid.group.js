
/* Smart UI v12.0.1 (2022-01-20) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Group",class{_renderGroupBar(){const e=this;if(!e.grouping.groupBar.visible)return;const r=e.$.groupHeader;if(!r.firstElementChild){const a=document.createElement("smart-breadcrumb"),t=e.localize("groupBarLabel");r.appendChild(a),e.$.breadcrumb=a,a.placeholder=t,a.classList.add("smart-hidden")}const a=e.dataSource.groupBy,t=[];for(let r=0;r<a.length;r++){const o=a[r],n=e.columns.find((e=>e.dataField===o));if(!n)continue;let d="";n.sortOrder&&(d+='<span class="smart-grid-icon show '+("asc"===n.sortOrder?"smart-icon-sort-up":"smart-icon-sort-down")+'"></span>'),n.filter&&(d+='<span class="smart-grid-icon smart-icon-filter show"></span>'),t.push({label:n.label+d,value:n.dataField})}e.$.breadcrumb.closeButtons=e.grouping.groupBar.allowColumnCloseButtons,e.$.breadcrumb.allowDrag=e.$.breadcrumb.allowDrop=e.grouping.groupBar.allowColumnDragDrop,e.$.breadcrumb.dataSource=t,e.$.breadcrumb.minimizeWidth=350,e.offsetWidth<350&&(e.$.breadcrumb.parentElement.style.zIndex=9999,e.$.breadcrumb.parentElement.style.overflow="visible"),e.$.breadcrumb.onminimize=()=>{e.$.breadcrumb.parentElement.style.zIndex=9999,e.$.breadcrumb.parentElement.style.overflow="visible"},e.$.breadcrumb.onitemclick=r=>{const a=r.detail.item;if(!a)return;const t=e.columnByDataField[a.value];t.allowSortToggleOnClick&&e.sorting.enabled&&e.sortBy(t.dataField)},e.$.breadcrumb.onmaximize=()=>{e.$.breadcrumb.parentElement.style.zIndex="",e.$.breadcrumb.parentElement.style.overflow=""},e.$.breadcrumb.ondragstart=function(r){const a=e.$.breadcrumb._dragDrop,o=e.$.breadcrumb._items.indexOf(r.detail.item),n=e.columnByDataField[e.$.breadcrumb.dataSource[o].value];if(e.$.fireEvent("columnDragStart",{column:n,dataField:n.dataField,index:e.columns.indexOf(n),data:a,originalEvent:r.detail.originalEvent}).defaultPrevented)return;const d=e.columns.map((e=>(e.dataField===t[o].value&&e.element.classList.add("dragged"),e.element)));a.items=a.items.concat(d),a.getItemCoordinates(a.items),a.column=n,e._overlay=document.createElement("div"),e._overlay.classList.add("smart-grid-overlay"),e._overlay.style.cursor="",e.$.root.appendChild(e._overlay),e._dragLine=e._createLine(a.dragDetails.item),e.$.root.appendChild(e._dragLine),e._dragLine.style.height=a.dragDetails.item.offsetHeight+"px",requestAnimationFrame((()=>{e._dragLine.style.opacity=1}))},e.$.breadcrumb.ondragging=function(r){const a=e.$.breadcrumb._dragDrop,t=a.dragDetails;if(e._dragLine&&t.target){const o=e.getBoundingRect(t.target),n=e.getBoundingRect(e),d=e.getBoundingRect(e.$.columnHeader);t.before?e._dragLine.style.left=-d.left+o.left+"px":e._dragLine.style.left=-d.left+o.right+"px",parseInt(e._dragLine.style.left)<3&&(e._dragLine.style.left="3px"),e._dragLine.style.top=o.top-n.top+"px",t.target.classList.contains("smart-breadcrumb-item")?e._dragLine.style.height=o.height+"px":e._dragLine.style.height="calc(100% - 7px - "+e._dragLine.style.top+")",e.$.fireEvent("columnDragging",{column:a.column,dataField:a.column.dataField,index:e.columns.indexOf(a.column),data:a,originalEvent:r.detail.originalEvent})}},e.$.breadcrumb.ondragcancel=function(){e._dragLine&&e._dragLine.parentNode.removeChild(e._dragLine),e.columns.forEach((e=>{e.element&&e.element.classList.remove("dragged")}));const r=e.$.breadcrumb._dragDrop;e.$.fireEvent("columnDragCancel",{column:r.column,dataField:r.column.dataField,index:e.columns.indexOf(r.column),data:r})},e.$.breadcrumb.ondragend=function(r){e.beginUpdate();const a=e.getBoundingRect(e.$.breadcrumb);if(r.detail.originalEvent.pageY>a.bottom){const a=e.$.breadcrumb._dragDrop,t=r.detail.item.data.value,o=a.dragDetails.target,n=e.columnByDataField[t],d=e.$.breadcrumb.dataSource.findIndex((e=>e.value===n.dataField)),i=e.$.breadcrumb.dataSource.slice(0);if(i.splice(d,1),e.$.breadcrumb.dataSource=i,o&&o.column&&!e.$.fireEvent("columnDragEnd",{column:a.column,dataField:a.column.dataField,index:e.columns.indexOf(a.column),newIndex:e.columns.indexOf(o.column),data:a,originalEvent:r.detail.originalEvent}).defaultPrevented){const r=e.columns.indexOf(n),a=e.columns.indexOf(o.column);e.columns.move(r,a)}}const t=e.$.breadcrumb.dataSource.map((e=>e.value));e._dragLine&&e._dragLine.parentNode.removeChild(e._dragLine),e.columns.forEach((e=>{e.element&&e.element.classList.remove("dragged")})),e.dataSource.groupBy=t,e.refresh(!0),e.refreshFilters(),e.refreshSort(),e._refreshPagesCount(),e.endUpdate()},e.$.breadcrumb.onclose=function(r){const a=r.detail.item;e.removeGroup(a.value)}}getGroups(){return this.dataSource.groupBy.toArray()}addGroup(e){const r=this;r.dataSource&&r.grouping.enabled&&-1===r.dataSource.groupBy.indexOf(e)&&(r._groups.push(e),r.dataSource&&r.dataSource.virtualDataSource?(r.dataSource.groupBy.push(e),r._virtualDataRequest("group")):r.dataSource.groupBy.push(e),r._refreshFilterRowEditors(),r.refresh(!0),r.refreshFilters(),r.refreshSort(),r._refreshPagesCount())}removeGroup(e){const r=this;if(!r.dataSource||!r.grouping.enabled)return;const a=r.dataSource.groupBy.indexOf(e);a>=0&&(r._groups.splice(a,1),r.dataSource&&r.dataSource.virtualDataSource?(r.dataSource.groupBy.splice(a,1),r._virtualDataRequest("group")):r.dataSource.groupBy.splice(a,1),r._refreshFilterRowEditors(),r.refresh(!0),r.refreshFilters(),r.refreshSort(),r._refreshPagesCount())}clearGroups(){const e=this;e.dataSource&&e.grouping.enabled&&(e._groups=[],e.dataSource&&e.dataSource.virtualDataSource?(e.dataSource.clearGroup(),e._virtualDataRequest("group")):e.dataSource.clearGroup(),e._refreshFilterRowEditors(),e.refresh(!0),e.refreshFilters(),e.refreshSort(),e._refreshPagesCount())}});