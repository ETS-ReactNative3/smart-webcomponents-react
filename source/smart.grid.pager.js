
/* Smart UI v7.7.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=57)}({57:function(e,t){Smart.Utilities.Assign("Grid.Pager",class{_refreshPaging(e){const t=this;requestAnimationFrame(()=>{t._refreshLayout(),t._refreshSelection(),e||(t._initializeRowElements(),t._refreshLayout()),t.dataSource&&t.dataSource.virtualDataSource?t._virtualDataRequest(e?"pageIndexChange":"pageSizeChange"):t._recycle(!1);const a=t.paging.pageIndex*t.paging.pageSize,r=a+t.paging.pageSize;t.$.fireEvent("page",{data:{first:a,last:r,size:r-a}})})}_refreshPagesCount(){const e=this,t=e.$.headerPager.querySelector("smart-pager"),a=function(){const t=e.getVisibleRows();let a=t.length;if(e.rowHierarchy){a=0;for(let e=0;e<t.length;e++){const r=t[e];0!==r.level||r.parent||a++}void 0!==e.dataSource.virtualDataSourceLength&&(a=e.dataSource.virtualDataSourceLength)}return{pagesCount:Math.ceil(a/e.paging.pageSize),totalRecords:a}}();t&&(t.pagesCount=a.pagesCount,t.totalRecords=a.totalRecords);const r=e.$.footerPager.querySelector("smart-pager");t&&(r.pagesCount=a.pagesCount,r.totalRecords=a.totalRecords),e.paging.pageIndex>a.pagesCount&&(e.paging.pageIndex=a.pagesCount-1,e._refreshPaging(e.paging.pageIndex))}_renderPagers(){const e=this;e.pager.visible&&requestAnimationFrame(()=>{const t=document.createElement("smart-pager"),a=document.createElement("smart-pager");e.$.headerPager.innerHTML="",e.$.footerPager.innerHTML="",e.$.headerPager.appendChild(t),e.$.footerPager.appendChild(a);const r=function(t){t.messages[e.locale]||(t.messages[e.locale]={}),Object.assign(t.messages[e.locale],{firstButton:e.localize("pagerFirstButton"),lastButton:e.localize("pagerLastButton"),previousButton:e.localize("pagerPreviousButton"),nextButton:e.localize("pagerNextButton"),navigateToLabel:e.localize("pagerNavigateToLabel"),pageSizeLabel:e.localize("pagerPageSizeLabel"),navigateToInputPlaceholder:e.localize("pagerNavigateToInputPlaceholder"),ellipsis:e.localize("pagerEllipsis"),summaryString:e.localize("pagerSummaryString"),summaryPrefix:e.localize("pagerSummaryPrefix"),summarySuffix:e.localize("pagerSummarySuffix")})},n=function(){const t=e.getVisibleRows();let a=t.length;if(e.rowHierarchy){a=0;for(let e=0;e<t.length;e++){const r=t[e];0!==r.level||r.parent||a++}void 0!==e.dataSource.virtualDataSourceLength&&(a=e.dataSource.virtualDataSourceLength)}return{pagesCount:Math.ceil(a/e.paging.pageSize),totalRecords:a}},i=function(r,i){const o=i+"GridPager",g=n();r.setAttribute("smart-id",o),e.$[o]=r,e["$"+o]=Smart.Utilities.Extend(r),r.beginUpdate(),e.addPropertyBinding("[[pager_navigationButtons_position]]","navigationButtonsPosition",r),e.addPropertyBinding("[[pager_navigationButtons_firstLastButtons_visible]]","showFirstLastNavigationButtons",r),e.addPropertyBinding("[[pager_navigationButtons_prevNextButtons_visible]]","showPrevNextNavigationButtons",r),e.addPropertyBinding("[[pager_navigationButtons_labels_visible]]","showNavigationButtonLabels",r),e.addPropertyBinding("[[pager_pageIndexSelectors_visible]]","showPageIndexSelectors",r),e.addPropertyBinding("[[pager_pageIndexSelectors_dataSource]]","pageIndexSelectors",r),e.addPropertyBinding("[[pager_summary_visible]]","showSummary",r),e.addPropertyBinding("[[pager_summary_position]]","summaryPosition",r),e.addPropertyBinding("[[pager_navigationInput_visible]]","showNavigationInput",r),e.addPropertyBinding("[[pager_navigationInput_position]]","navigationInputPosition",r),e.addPropertyBinding("[[pager_pageSizeSelector_visible]]","showPageSizeSelector",r),e.addPropertyBinding("[[pager_pageSizeSelector_dataSource]]","pageSizeSelectorDataSource",r),e.addPropertyBinding("[[pager_pageSizeSelector_position]]","pageSizeSelectorPosition",r),e.addPropertyBinding("[[pager_autoEllipsis]]","autoEllipsis",r),e.addPropertyBinding("[[!paging_enabled]]","disabled",r),e.addPropertyBinding("{{paging_pageIndex}}","pageIndex",r),e.addPropertyBinding("{{paging_pageSize}}","pageSize",r),e.addPropertyBinding("{{rightToLeft}}","rightToLeft",r),r.pagesCount=g.pagesCount,r.totalRecords=g.totalRecords,r.$.pageSizeSelector.dropDownAppendTo="body",r.$.pageSizeSelector.selectedIndexes=[0],e["$"+o].listen("change",(function(i){const o=n();r.pagesCount=o.pagesCount,r.totalRecords=o.totalRecords,e.paging.pageIndex>r.pagesCount&&(e.paging.pageIndex=r.pagesCount-1),t.refresh(),a.refresh();const g=i.detail&&void 0!==i.detail.index||void 0!==i.target.value;e._refreshPaging(g)})),r.endUpdate()};i(t,"header"),i(a,"footer"),r(t),r(a)})}})}});