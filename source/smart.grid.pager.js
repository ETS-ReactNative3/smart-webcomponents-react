
/* Smart UI v10.0.1 (2021-08-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Grid.Pager",class{_refreshPaging(e){const a=this;requestAnimationFrame((()=>{if(a.filtering.filterRow)for(let e=0;e<a.columns.length;e++)a.columns[e]._filterEditorInitialized=!1;a._refreshLayout(),a._refreshSelection(),e||(a._initializeRowElements(),a._refreshLayout()),a.dataSource&&a.dataSource.virtualDataSource?a._virtualDataRequest(e?"pageIndexChange":"pageSizeChange"):(a._recycle(),a._scrollUpdate&&clearTimeout(a._scrollUpdate),a._scrollUpdate=setTimeout((function(){a.isScrolling||(a.$.rowContainer.style.top=parseInt(a.$.rowContainer.style.top)+.01+"px")}),50));const t=a.paging.pageIndex*a._pageSize,r=t+a._pageSize;a.$.fireEvent("page",{data:{first:t,last:r,size:r-t}})}))}firstPage(){const e=this;e.paging.enabled&&(e.paging.pageIndex>0&&(e.paging.pageIndex=0),e._refreshPaging(!0))}lastPage(){const e=this;if(!e.paging.enabled)return;const a=e.$.headerPager.querySelector("smart-pager");e.paging.pageIndex<a.pagesCount-1&&(e.paging.pageIndex=a.pagesCount-1),e._refreshPaging(!0)}prevPage(){const e=this;e.paging.enabled&&(e.paging.pageIndex>0&&e.paging.pageIndex--,e._refreshPaging(!0))}nextPage(){const e=this,a=e.$.headerPager.querySelector("smart-pager");e.paging.enabled&&(e.paging.pageIndex<a.pagesCount-1&&e.paging.pageIndex++,e._refreshPaging(!0))}goToPage(e){const a=this,t=a.$.headerPager.querySelector("smart-pager");!a.paging.enabled||e<0||e>t.pagesCount-1||(a.paging.pageIndex=e,a._refreshPaging(!0))}_refreshPagesCount(){const e=this;if(!e.paging.enabled)return;const a=e.$.headerPager.querySelector("smart-pager"),t=function(){const a=e.getVisibleRows();let t=a.length;if(void 0!==e.dataSource.virtualDataSourceLength&&(t=e.dataSource.virtualDataSourceLength),e.rowHierarchy){t=0;for(let e=0;e<a.length;e++){const r=a[e];0!==r.level||r.parent||t++}if(void 0!==e.dataSource.virtualDataSourceLength)t=e.dataSource.virtualDataSourceLength;else{e._refreshRowHierarchy(!1,!0),t=0;const a=t=>{let r=[];if(0===e.dataSource.groupBy.length)return t;for(let e=0;e<t.length;e++){const i=t[e];(!i.$||void 0===i.$.filtered||i.$.filtered)&&(r.push(i),i.children&&(r=r.concat(a(i.children))))}return r};for(let r=0;r<e.rowHierarchy.length;r++){const i=e.rowHierarchy[r];if(0===i.level&&!i.parent){if(0===a(i.children).length)continue;t++}}e._refreshRowHierarchy(),e._recycle(!1)}}return{pagesCount:Math.ceil(t/e._pageSize),totalRecords:t}}();a&&(a.pagesCount=t.pagesCount,a.totalRecords=t.totalRecords);const r=e.$.footerPager.querySelector("smart-pager");a&&(r.pagesCount=t.pagesCount,r.totalRecords=t.totalRecords,a.$.pageSizeSelector.disabled=t.totalRecords<e.pager.pageSizeSelector.dataSource[0],r.$.pageSizeSelector.disabled=t.totalRecords<e.pager.pageSizeSelector.dataSource[0]),e.paging.pageIndex>=t.pagesCount&&t.pagesCount>0&&(e.paging.pageIndex=t.pagesCount-1,e._refreshPaging(e.paging.pageIndex))}_renderPagers(){const e=this;e.pager.visible&&requestAnimationFrame((()=>{const a=document.createElement("smart-pager"),t=document.createElement("smart-pager");e.$.headerPager.innerHTML="",e.$.footerPager.innerHTML="",e.$.headerPager.appendChild(a),e.$.footerPager.appendChild(t);const r=function(a){a.messages[e.locale]||(a.messages[e.locale]={}),Object.assign(a.messages[e.locale],{firstButton:e.localize("pagerFirstButton"),lastButton:e.localize("pagerLastButton"),previousButton:e.localize("pagerPreviousButton"),nextButton:e.localize("pagerNextButton"),navigateToLabel:e.localize("pagerNavigateToLabel"),pageSizeLabel:e.localize("pagerPageSizeLabel"),navigateToInputPlaceholder:e.localize("pagerNavigateToInputPlaceholder"),ellipsis:e.localize("pagerEllipsis"),summaryString:e.localize("pagerSummaryString"),summaryPrefix:e.localize("pagerSummaryPrefix"),summarySuffix:e.localize("pagerSummarySuffix")}),a.locale=e.locale},i=function(){const a=e.getVisibleRows();let t=a.length;if(void 0!==e.dataSource.virtualDataSourceLength&&(t=e.dataSource.virtualDataSourceLength),e.rowHierarchy){t=0;for(let e=0;e<a.length;e++){const r=a[e];0!==r.level||r.parent||t++}if(void 0!==e.dataSource.virtualDataSourceLength)t=e.dataSource.virtualDataSourceLength;else{e._refreshRowHierarchy(!1,!0),t=0;const a=t=>{let r=[];if(0===e.dataSource.groupBy.length)return t;for(let e=0;e<t.length;e++){const i=t[e];(!i.$||void 0===i.$.filtered||i.$.filtered)&&(r.push(i),i.children&&(r=r.concat(a(i.children))))}return r};for(let r=0;r<e.rowHierarchy.length;r++){const i=e.rowHierarchy[r];if(0===i.level&&!i.parent){if(0===a(i.children).length)continue;t++}}e._refreshRowHierarchy(),e._recycle(!1)}}return{pagesCount:Math.ceil(t/e._pageSize),totalRecords:t}},n=function(r,n){const o=n+"GridPager",g=i();r.setAttribute("smart-id",o),e.$[o]=r,e["$"+o]=Smart.Utilities.Extend(r),r.beginUpdate(),e.addPropertyBinding("[[pager_navigationButtons_position]]","navigationButtonsPosition",r),e.addPropertyBinding("[[pager_navigationButtons_firstLastButtons_visible]]","showFirstLastNavigationButtons",r),e.addPropertyBinding("[[pager_navigationButtons_prevNextButtons_visible]]","showPrevNextNavigationButtons",r),e.addPropertyBinding("[[pager_navigationButtons_labels_visible]]","showNavigationButtonLabels",r),e.addPropertyBinding("[[pager_pageIndexSelectors_visible]]","showPageIndexSelectors",r),e.addPropertyBinding("[[pager_pageIndexSelectors_dataSource]]","pageIndexSelectors",r),e.addPropertyBinding("[[pager_summary_visible]]","showSummary",r),e.addPropertyBinding("[[pager_summary_position]]","summaryPosition",r),e.addPropertyBinding("[[pager_navigationInput_visible]]","showNavigationInput",r),e.addPropertyBinding("[[pager_navigationInput_position]]","navigationInputPosition",r),e.addPropertyBinding("[[pager_pageSizeSelector_visible]]","showPageSizeSelector",r),e.addPropertyBinding("[[pager_pageSizeSelector_dataSource]]","pageSizeSelectorDataSource",r),e.addPropertyBinding("[[pager_pageSizeSelector_position]]","pageSizeSelectorPosition",r),e.addPropertyBinding("[[pager_autoEllipsis]]","autoEllipsis",r),e.addPropertyBinding("[[!paging_enabled]]","disabled",r),e.addPropertyBinding("{{paging_pageIndex}}","pageIndex",r),e.addPropertyBinding("{{paging_pageSize}}","pageSize",r),e.addPropertyBinding("{{rightToLeft}}","rightToLeft",r),r.pagesCount=g.pagesCount,r.totalRecords=g.totalRecords,r.$.pageSizeSelector.dropDownAppendTo="body",r.$.pageSizeSelector.selectedIndexes=[0],r.totalRecords<e.pager.pageSizeSelector.dataSource[0]&&(r.$.pageSizeSelector.disabled=!0),e["$"+o].listen("change",(function(n){const o=i();r.pagesCount=o.pagesCount,r.totalRecords=o.totalRecords,e.paging.pageIndex>r.pagesCount&&(e.paging.pageIndex=r.pagesCount-1),a.refresh(),t.refresh();const g=n.detail&&void 0!==n.detail.index||void 0!==n.target.value;e._refreshPaging(g)})),r.endUpdate()};n(a,"header"),n(t,"footer"),r(a),r(t)}))}});