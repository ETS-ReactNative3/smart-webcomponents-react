
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=54)}({54:function(e,t){Smart.Utilities.Assign("Grid.Menu",class{_openColumnChooserMenu(e){const t=this;if(e||(e=t._commandColumn),!e||t.menu&&t.menu.column===e&&e.element.hasAttribute("aria-controls"))return void t.closeMenu();t.menu||(t.menu=document.createElement("div"),t.menu.classList.add("smart-grid-column-menu"),t.menu.setAttribute("theme",t.getAttribute("theme")),t.menu.id=t.id+"_"+t.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.appearance.allowColumnMenuAnimation?t.menu.classList.add("smart-animate"):t.menu.classList.remove("smart-animate"),t._createColumnChooserMenuItems(e),t.menu.style.height=t.columnMenu.height?t.columnMenu.height+"px":"auto",t.menu.column&&t.menu.column!==e&&(t.menu.column.setProperty("menu",null),t.menu.column=null),document.body.appendChild(t.menu),e.setProperty("menu",t.menu);const n=e.element.getBoundingClientRect();t.menu.column=e;let i=n.right-e.element.actionButton.getBoundingClientRect().width+window.pageXOffset,l=n.bottom+window.pageYOffset;i+t.menu.offsetWidth>window.innerWidth&&(i=n.right+window.pageXOffset-t.menu.offsetWidth,i+t.menu.offsetWidth>window.innerWidth&&(i=window.innerWidth-t.menu.offsetWidth)),t.menu.style.left=i+"px",t.menu.style.top=l+"px",t.menu.classList.remove("smart-hidden"),t.menu.classList.add("open")}_openMenu(e){const t=this;if(!e||t.menu&&t.menu.column===e&&e.element.hasAttribute("aria-controls")||!1===t.columnMenu.enabled)return void t.closeMenu();t.menu||(t.menu=document.createElement("div"),t.menu.classList.add("smart-grid-column-menu"),t.menu.setAttribute("theme",t.getAttribute("theme")),t.menu.id=t.id+"_"+t.tagName.toLowerCase()+"_menu_"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)),t.appearance.allowColumnMenuAnimation?t.menu.classList.add("smart-animate"):t.menu.classList.remove("smart-animate"),t.rightToLeft?t.menu.setAttribute("right-to-left",""):t.menu.removeAttribute("right-to-left"),t._createMenuItems(e),t._createFilterPanel(e),t._filterMenuItemsVisibility(e),t.menu.style.height=t.columnMenu.height?t.columnMenu.height+"px":"auto",t.menu.column&&t.menu.column!==e&&(t.menu.column.setProperty("menu",null),t.menu.column=null),document.body.appendChild(t.menu),e.setProperty("menu",t.menu);const n=e.element.getBoundingClientRect();t.menu.column=e;let i=n.right-e.element.actionButton.getBoundingClientRect().width+window.pageXOffset,l=n.bottom+window.pageYOffset;t.rightToLeft&&(i=n.left+window.pageXOffset-t.menu.offsetWidth+e.element.actionButton.getBoundingClientRect().width,i<0&&(i=n.left+window.pageXOffset)),i+t.menu.offsetWidth>window.innerWidth&&(i=n.right+window.pageXOffset-t.menu.offsetWidth,i+t.menu.offsetWidth>window.innerWidth&&(i=window.innerWidth-t.menu.offsetWidth)),t.menu.style.left=i+"px",t.menu.style.top=l+"px",t.hasColumnMenu(e)?t.menu.classList.remove("smart-hidden"):t.closeMenu(),t.menu.classList.add("open")}_menuItemClick(e){const t=this,n=e.detail.value;if(n&&n.properties){const e=n.properties.command;"function"==typeof e?e.apply(t,[n.column]):t[e]&&t[e].apply(t,[n.column]),n.column.autoCloseMenu&&t.closeMenu()}}removeGroupByCommand(e){this.removeGroup(e.dataField)}groupByCommand(e){this.dataSource&&this.addGroup(e.dataField)}sortAscCommand(e){this.sortBy(e.dataField,"asc")}sortDescCommand(e){this.sortBy(e.dataField,"desc")}removeSortCommand(e){this.sortBy(e.dataField,null)}_removeMenu(){const e=this,t=e.menu.querySelector("smart-menu");t&&e.menu.removeChild(t)}_createColumnChooserMenuItems(){const e=this;e._removeMenu();const t=document.createElement("smart-menu"),n=document.createDocumentFragment();t.mode="vertical",t.dropDownAppendTo="body",t.checkboxes=!0,t.checkable=!0,t.classList.add("smart-grid-column-chooser-menu"),t.rightToLeft=e.rightToLeft;for(let t=0;t<e.columns.length;t++){const i=e.columns[t],l=document.createElement("smart-menu-item"),o=i.showIcon?i.icon:i.visible?"smart-icon-eye":"smart-icon-eye-off";l.checked=i.visible,i.allowHide&&(i.command=function(e){e.visible=!e.visible},l.label=e.localize(i.label)||i.label||i.dataField,l.value={column:i,properties:i},o&&(l.label='<span class="smart-grid-icon '+o+'"></span>'+l.label),n.appendChild(l))}t.appendChild(n),e.menu.appendChild(t),e.menu.itemCheckChange=e._menuItemClick.bind(e),e.menu.addEventListener("itemCheckChange",e.menu.itemCheckChange),e.menu.addEventListener("keydown",e._keyDownHandler.bind(e))}_createMenuItems(e){const t=this;t._removeMenu();const n=document.createElement("smart-menu"),i=document.createDocumentFragment(),l=e.menuItems||t.columnMenu.dataSource;n.mode="vertical",n.dropDownAppendTo="body",n.rightToLeft=t.rightToLeft;for(let n in l){const o=l[n],r=document.createElement("smart-menu-item");let a=o.icon;r.label=t.localize(n),r.value={column:e,properties:o};const m=t=>{if(t){if("string"===e.dataType)return"A → Z";if("number"===e.dataType||"date"===e.dataType||"time"===e.dataType)return"1 → 9";if("bool"===e.dataType||"boolean"===e.dataType)return"0 → 1"}else{if("string"===e.dataType)return"Z → A";if("number"===e.dataType||"date"===e.dataType||"time"===e.dataType)return"9 → 1";if("bool"===e.dataType||"boolean"===e.dataType)return"1 → 0"}};"columnMenuItemSortAsc"===n?(r.label=t.localize(n,{mode:m(!0)}),"string"!==e.dataType&&o.iconAlt&&(a=o.iconAlt)):"columnMenuItemSortDesc"===n&&(r.label=t.localize(n,{mode:m(!1)}),"string"!==e.dataType&&o.iconAlt&&(a=o.iconAlt)),a&&(r.label='<span class="smart-grid-icon '+a+'"></span>'+r.label),i.appendChild(r)}n.appendChild(i),t._filterContainer?t.menu.insertBefore(n,t._filterContainer):t.menu.appendChild(n),t.menu.itemClick=t._menuItemClick.bind(t),t.menu.addEventListener("itemClick",t.menu.itemClick),t.menu.addEventListener("keydown",t._keyDownHandler.bind(t))}_getFilterType(e){let t="string";switch(e.dataType.endsWith("?")?e.dataType.substring(0,e.dataType.length-1):e.dataType){case"number":case"int":case"float":case"int64":t="numeric";break;case"bool":case"boolean":t="bool";break;case"date":case"time":case"datetime":t="date";break;case"any":t="any"}return t}_createFilterPanel(e){const t=this;if(Smart.FilterPanel)if(t.filtering.enabled&&t.filtering.filterMenu.visible&&e.allowFilter){const n=t._getFilterType(e);if(t._filterPanel&&t._filterPanel.parentNode.removeChild(t._filterPanel),t._filterPanel=t._filterPanels[n],t._filterPanel.dataField=e.dataField,t._filterPanel.rightToLeft=t.rightToLeft,!t._filterContainer){const e=document.createElement("div");e.classList.add("smart-filter-container"),t._filterContainer=e,requestAnimationFrame((function(){t.menu.appendChild(e)})),t._applyFilterHandler=function(){t.addFilter(t._filterPanel.dataField,t._filterPanel.getFilter()),t.columnByDataField[t._filterPanel.dataField]._filterState=t._filterPanel.getState()},t._clearFilterHandler=function(){requestAnimationFrame(()=>{t.removeFilter(t._filterPanel.dataField),t.columnByDataField[t._filterPanel.dataField]._filterState=null})}}if(t._filterContainer.appendChild(t._filterPanel),t._filterPanel.classList.remove("smart-hidden"),t._filterPanel.removeEventListener("filter",t._applyFilterHandler),t._filterPanel.removeEventListener("clear",t._clearFilterHandler),t._filterPanel.addEventListener("filter",t._applyFilterHandler),t._filterPanel.addEventListener("clear",t._clearFilterHandler),"none"!==e.filterMenuMode&&t.filtering.filterMenu.visible&&Smart.FilterPanel?t._filterContainer.classList.remove("smart-hidden"):t._filterContainer.classList.add("smart-hidden"),t._filterPanel.reset(),e._filterState)t._filterPanel.loadState(e._filterState);else if(e.filter){const n=e.filter,i=t._getFilterType(e);let l=n.getFilters();for(;l.length>0&&"FilterGroup"===l[0].type;)l=l[0].value;const o=n.getConditions(i),r=l.length>0?o.indexOf(l[0].condition):-1,a=l.length>1?o.indexOf(l[1].condition):-1,m=l.length>0?l[0].value:"",u=l.length>1?l[1].value:"",s=l.length>1?["and","or"].indexOf(l[1].logicalOperator):0;e._filterState={firstFilterComparison:r,firstFilterValue:m,logicalOperator:s,secondFilterComparison:a,secondFilterValue:u},t._filterPanel.loadState(e._filterState)}}else t._filterPanel&&(t._filterPanel.parentNode.removeChild(t._filterPanel),e._filterState=null)}hasColumnMenu(e){const t=this;if(!1===t.columnMenu.enabled)return!1;const n=e.menuItems||t.columnMenu.dataSource;let i=0,l=0;for(let o in n){const r=n[o];l++,!1===r.visible?i++:"auto"===r.visible&&("columnMenuItemFilter"!==o&&"columnMenuItemRemoveFilter"!==o||(t.filtering.filterMenu.visible||t.filtering.filterBuilder.visible)&&i++,"columnMenuItemGroupBy"!==o&&"columnMenuItemRemoveGroupBy"!==o||e.allowGroup&&t.grouping.enabled||i++,"columnMenuItemFilter"!==o||e.allowFilter||i++,"columnMenuItemRemoveFilter"!==o||e.allowFilter||i++,"columnMenuItemGroupBy"!==o||e.allowGroup||i++,"columnMenuItemSortAsc"!==o&&"columnMenuItemSortDesc"!==o&&"columnMenuItemRemoveSort"!==o||e.allowSort&&t.sorting.enabled||i++)}return!!(t.filtering.enabled&&t.filtering.filterMenu.visible&&"none"!==e.filterMenuMode&&Smart.FilterPanel||Smart.Menu&&!(i>=l))}_filterMenuItemsVisibility(e){const t=this,n=(t.menu.parentElement&&(t.enableShadowDOM||t.isInShadowDOM)?t.menu.firstElementChild.shadowRoot:t.menu).querySelectorAll("smart-menu-item"),i=e.menuItems||t.columnMenu.dataSource;let l=0;for(let o in i){const r=n[l++],a=i[o];if(r.disabled=!a.enabled,r.classList.remove("smart-hidden"),"columnMenuItemRemoveSort"===o&&(e.sortOrder?r.disabled=!1:r.disabled=!0),("columnMenuItemSortAsc"===o&&"asc"===e.sortOrder||"columnMenuItemSortDesc"===o&&"desc"===e.sortOrder)&&(r.disabled=!0),!0===a.visible)r.classList.remove("smart-hidden");else if(!1===a.visible)r.classList.add("smart-hidden");else if("auto"===a.visible){if("columnMenuItemFilter"!==o&&"columnMenuItemRemoveFilter"!==o||(!1===t.filtering.enabled||t.filtering.filterMenu.visible||t.filtering.filterBuilder.visible?r.classList.add("smart-hidden"):t.filtering.filterBuilder.visible&&r.classList.remove("smart-hidden")),"columnMenuItemGroupBy"===o){t.grouping.enabled&&e.allowGroup?r.classList.remove("smart-hidden"):r.classList.add("smart-hidden");const n=t.dataSource.groupBy.indexOf(e.dataField);r.disabled=n>=0}if("columnMenuItemRemoveGroupBy"===o){t.grouping.enabled&&e.allowGroup?r.classList.remove("smart-hidden"):r.classList.add("smart-hidden");const n=t.dataSource.groupBy.indexOf(e.dataField);r.disabled=n<0}"columnMenuItemFilter"!==o||e.allowFilter||r.classList.add("smart-hidden"),"columnMenuItemRemoveFilter"!==o||e.allowFilter||r.classList.add("smart-hidden"),"columnMenuItemSortAsc"!==o&&"columnMenuItemSortDesc"!==o&&"columnMenuItemRemoveSort"!==o||(e.allowSort&&t.sorting.enabled?r.classList.remove("smart-hidden"):r.classList.add("smart-hidden"))}}}openMenu(e){const t=this.columnByDataField[e];t&&this._openMenu(t)}hasMenu(){const e=this;return!!(e.menu&&e.menu.column&&e.menu.parentNode)}closeMenu(){const e=this;e.menu&&e.menu.column&&(e.menu.column&&(e.menu.column.setProperty("menu",null),e.menu.column=null),e.menu.parentNode&&(e.menu.classList.remove("open"),e.appearance.allowColumnMenuAnimation||e.menu.parentNode.removeChild(e.menu)),e.menu.removeEventListener("keydown",e._keyDownHandler.bind(e)),e.menu.removeEventListener("itemClick",e.menu.itemClick),e.menu.removeEventListener("itemCheckChange",e.menu.itemCheckChange),e.focus())}})}});