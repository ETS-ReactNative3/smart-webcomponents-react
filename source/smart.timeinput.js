
/* Smart UI v12.0.1 (2022-01-20) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-time-box",class extends Smart.BaseElement{static get properties(){return{messages:{value:{en:{hours:"Hours",minutes:"Minutes",am:"am",pm:"pm"}},type:"object",extend:!0},value:{type:"array",value:[0,0]}}}static get listeners(){return{click:"_changeHandler"}}render(){const e=this,t=document.createElement("div");e.tabindex=-1,t.innerHTML='\n            <div class="hour-selection smart-calendar-week" role="row"><div class="header" role="rowheader"></div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="0">12</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="1">01</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="2">02</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="3">03</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="4">04</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="5">05</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="6">06</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="7">07</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="8">08</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="9">09</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="10">10</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="11">11</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="12" pm>12</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="13" pm>01</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="14" pm>02</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="15" pm>03</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="16" pm>04</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="17" pm>05</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="18" pm>06</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="19" pm>07</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="20" pm>08</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="21" pm>09</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="22" pm>10</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="23" pm>11</div>\n            </div>\n            <div class="minute-selection smart-calendar-week" role="row"><div class="header" role="rowheader"></div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="0">00</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="5">05</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="10">10</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="15">15</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="20">20</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="25">25</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="30">30</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="35">35</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="40">40</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="45">45</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="50">50</div>\n                <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="55">55</div>\n            </div>',t.classList.add("smart-timepicker","smart-calendar"),t.setAttribute("role","grid"),e.$.content.appendChild(t),Smart.Utilities.Core.isMobile||(t.onmouseover=function(e){const t=e.target.closest(".smart-calendar-cell");t&&t.setAttribute("hover","")},t.onmouseout=function(e){const t=e.target.closest(".smart-calendar-cell");t&&t.removeAttribute("hover")}),e._timepicker=t;const l=e._timepicker.querySelector(".hour-selection"),a=e._timepicker.querySelector(".minute-selection");l.setAttribute("am-label",e.localize("am")),l.setAttribute("pm-label",e.localize("pm")),l.querySelector(".header").textContent=e.localize("hours"),a.querySelector(".header").textContent=e.localize("minutes"),Array.from(e._timepicker.querySelectorAll("div[selected]")).map((e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)}));const r=e._timepicker.querySelectorAll(`.hour-selection div[value="${e.value[0]}"], .minute-selection div[value="${e.value[1]}"]`);for(let e=0;e<r.length;e++){const t=r[e];t&&(t.setAttribute("selected",!0),t.setAttribute("aria-selected",!0))}}_changeHandler(e){const t=this;let l=e.target;if(!l)return;if(!l.classList.contains("smart-calendar-cell"))return;l.closest(".hour-selection")?Array.from(t._timepicker.querySelectorAll(".hour-selection div[selected]")).map((e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)})):Array.from(t._timepicker.querySelectorAll(".minute-selection div[selected]")).map((e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)})),l.setAttribute("selected",!0),l.setAttribute("aria-selected",!0);const a=t._timepicker.querySelector(".hour-selection div[selected]"),r=a?parseInt(a.getAttribute("value")):0,i=t._timepicker.querySelector(".minute-selection div[selected]"),s=i?parseInt(i.getAttribute("value")):0;t.value=[r,s]}_setValue(e,t){const l=this;if(isNaN(e)&&(e=0),isNaN(t)&&(t=0),!l._timepicker)return;Array.from(l._timepicker.querySelectorAll(".hour-selection div[selected]")).map((e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)})),Array.from(l._timepicker.querySelectorAll(".minute-selection div[selected]")).map((e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)}));const a=l._timepicker.querySelector(`.hour-selection div[value="${e}"]`),r=l._timepicker.querySelector(`.minute-selection div[value="${t}"]`);a&&(a.setAttribute("selected",!0),a.setAttribute("aria-selected",!0)),r&&(r.setAttribute("selected",!0),r.setAttribute("aria-selected",!0)),l.value=[e,t]}propertyChangedHandler(e,t,l){const a=this;switch(e){case"value":a._setValue(l[0],l[1]);break;case"locale":{const e=a._timepicker.querySelector(".hour-selection"),t=a._timepicker.querySelector(".minute-selection");e.setAttribute("am-label",a.localize("am")),e.setAttribute("pm-label",a.localize("pm")),e.querySelector(".header").textContent=a.localize("hours"),t.querySelector(".header").textContent=a.localize("minutes");break}}}}),Smart("smart-time-input",class extends Smart.Input{static get properties(){return{dropDownButtonPosition:{allowedValues:["none","left","right"],value:"right",defaultReflectToAttribute:!0,type:"string"},dropDownHeight:{type:"any",value:"auto"},messages:{value:{en:{hours:"Hours",minutes:"Minutes",am:"am",pm:"pm"}},type:"object",extend:!0},placeholder:{value:"hh:mm",type:"string"},dateTimeFormat:{type:"object",value:{hour:"2-digit",minute:"2-digit"}},value:{type:"any",value:""}}}template(){return'<div id="inputContainer" role="presentation"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}static get listeners(){return{"input.change":"_changeHandler","input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}focus(){this.$.input.focus()}select(){const e=this;e.readonly?e.$.input.focus():e.$.input.select()}_documentUpHandler(e){const t=this,l=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(t.contains(l))requestAnimationFrame((()=>{}));else{if(t.$.scrollView.contains(l.shadowParent||l))return t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.$.input.focus()),void e.preventDefault();t.opened&&(t._preventLookup=!0),t._isPointerDown=!1,t.close()}}_changeHandler(e){e.stopPropagation(),this._performSelect()}_focusHandler(){const e=this;e.setAttribute("focus",""),(e.readonly||0!==e.minLength||0!==e.$.input.value.length||e._preventLookup)&&(e.$.fireEvent("focus"),delete e._preventLookup)}_blurHandler(){const e=this;if(e.opened||e.removeAttribute("focus"),e.$.fireEvent("blur"),e._popup&&e._popup.isCompleted)e._setInputValue(e._popup.value[0],e._popup.value[1]);else{const t=e._getInputValue();e._setInputValue(t[0],t[1])}delete e._preventLookup}_is12HourFormat(){const e=(new Date).toLocaleTimeString(this.locale,this.dateTimeFormat);return e.indexOf("A")>=0||e.indexOf("a")>=0||e.indexOf("P")>=0||e.indexOf("p")>=0}_getInputValue(){const e=this.$.input.value,t=this.$.input.value.split(":");if(t.length<2)return[0,0];let l=parseInt(t[0]),a=parseInt(t[1]);if(isNaN(l)&&(l=0),isNaN(a)&&(a=0),e.match(/\s(.*)$/)){const t=e.match(/\s(.*)$/)[1];"PM"===t&&l<12&&(l+=12),"AM"===t&&12===l&&(l-=12)}return[l,a]}_setInputValue(e,t){const l=this;let a=l.value&&l.value.slice?l.value.slice(0):[0,0];const r=new Date;isNaN(e)&&(e=0),isNaN(t)&&(t=0),e>24&&(e=0),t>59&&(t=0),r.setHours(e),r.setMinutes(t);const i=r.toLocaleTimeString(l.locale,l.dateTimeFormat),s=[e,t];l.$.input.value=i,l.value=[e,t],l.setAttribute("data-value",e+":"+t),a.some((e=>s.indexOf(e)<0))&&l.$.fireEvent("change",{oldValue:a,value:s})}_performSelect(){}_open(){const e=this,t=e.getBoundingClientRect(),l=window.scrollX,a=window.scrollY;let r=0,i=0;if(this.opened)return;if(e.timer&&clearTimeout(e.timer),document.body.appendChild(e.$.scrollView),e.setAttribute("aria-owns",e.$.scrollView.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.scrollView.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();r=e.left,i=e.top}e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.scrollView.style.left=-3+t.left+l-r+"px",e.$.scrollView.style.top=t.bottom+a-i+1+"px",e.$.scrollView.classList.remove("open"),e.$.scrollView.onpointerdown=function(){e._isPointerDown=!0};const s=e._popup,n=s.context;s.rightToLeft=e.rightToLeft,s.messages=e.messages,s.theme=e.theme,s.context=e,s.locale=e.locale,s.context=n,e._refreshPopup(),requestAnimationFrame((function(){e.$.scrollView.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open","")})),this.opened=!0}_refreshPopup(){const e=this._getInputValue();this._popup._setValue(e[0],e[1])}close(){const e=this;return!!e.opened&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.scrollView.parentNode&&!e.opened&&(document.body.removeChild(e.$.scrollView),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e.$.scrollView.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,!0)}_lookup(){}_downHandler(e){const t=this;t.readonly&&t._dropDownButtonDownHandler(e)}_dropDownButtonDownHandler(e){return this._toggle(),e.preventDefault(),e.stopPropagation(),e.originalEvent.preventDefault(),e.originalEvent.stopPropagation(),!1}_toggle(){const e=this;e.opened?e.close():e.open()}open(){const e=this;e._process(),e.$.input.focus(),setTimeout((function(){e.$.input.focus()}),25)}_process(){this._performSelect(void 0,!0),this._open()}_matcher(){}_sorter(){}_highlighter(){}_render(){}ensureVisible(){}_next(){}_prev(){}_move(e){e.stopPropagation()}_keyPressHandler(e){this._suppressKeyPressRepeat||e.shiftKey||e.altKey||e.ctrlKey}_insertKey(e,t=1){const l=this,a=l.$.input.selectionStart,r=l.$.input.value,i=r.substring(0,a),s=r.substring(a+t);l.$.input.value=i+e.key+s,l.$.input.selectionStart=l.$.input.selectionEnd=a+1}_keyDownHandler(e){const t=this;t._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode);let l=!1;e.keyCode>=48&&e.keyCode<=57&&(l=!0),":"===e.key&&1===t.$.input.value.length&&(t.$.input.value="0"+t.$.input.value+":");const a=t.$.input.selectionEnd-t.$.input.selectionStart;switch(t.$.input.value.length>5&&l&&a<=1&&(t.$.input.value.indexOf(":")===t.$.input.selectionStart&&(t.$.input.selectionStart=t.$.input.selectionEnd=t.$.input.selectionStart+1),t._insertKey(e),e.preventDefault()),e.key){case"ArrowLeft":case"ArrowUp":case"ArrowDown":case"ArrowRight":case"Home":case"End":case"Delete":case"Backspace":case"Tab":l=!0}"Tab"===e.key&&t.close(),e.ctrlKey&&(l=!0),l||e.preventDefault(),e.shiftKey||e.altKey||e.ctrlKey}_keyUpHandler(e){const t=this,l=t.$.input.value.trim(),a=l.indexOf(":");2===l.length&&"Backspace"!==e.key&&"Delete"!==e.key?t.$.input.value=l+":":":"===e.key&&-1===a?t._insertKey(e,0):":"===e.key&&a>=0&&(t.$.input.selectionStart=t.$.input.selectionEnd=a+1);const r=l.split(":"),i=t._is12HourFormat();if(2===r.length&&i&&("p"===e.key||"a"===e.key)){let a=parseInt(parseInt(r[0])),i=parseInt(parseInt(r[1]));isNaN(a)&&(a=0),isNaN(i)&&(i=0);let s=l.match(/\s(.*)$/);if(!s)return;s=l.match(/\s(.*)$/)[1],"PM"===s&&a<12&&(a+=12),"AM"===s&&12===a&&(a-=12);const n=l.indexOf("a")>=0||l.indexOf("A")>=0;if("p"===e.key&&n)a+=12;else{if("a"!==e.key||n)return;a-=12}const o=t.$.input.selectionStart;t._setInputValue(a,i),t.$.input.selectionStart=o,t.$.input.selectionEnd=o}if(2===r.length&&(t.value=t._getInputValue()),t._refreshPopup(),!e.shiftKey)switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault()}}propertyChangedHandler(e,t,l){const a=this;switch(e){case"value":if("string"==typeof l)a.$.input.value=l;else if(l instanceof Date)a._setInputValue(l.getHours(),l.getMinutes());else if(Array.isArray(l))a._setInputValue(l[0],l[1]);else{a.$.input.value=l;const e=a._getInputValue();a._setInputValue(e[0],e[1])}break;case"month":case"min":case"max":a.$.calendar&&(a.$.calendar[e]=l);break;case"theme":case"rightToLeft":case"animation":case"inverted":a.$.calendar&&(a.$.calendar[e]=l),l?a.$.scrollView.setAttribute(Smart.Utilities.Core.toDash(e),"boolean"==typeof l?"":l):a.$.scrollView.removeAttribute(Smart.Utilities.Core.toDash(e));break;case"locale":a._performSelect(),a.$.calendar.locale=l;break;default:super.propertyChangedHandler(e,t,l)}}_createElement(){const e=this,t=document.createElement("div");if(t.classList.add("smart-input-drop-down-menu","smart-date-input-drop-down-menu"),t.setAttribute("animation",e.animation),t.setAttribute("role","presentation"),e.rightToLeft?t.setAttribute("right-to-left",""):t.removeAttribute("right-to-left"),e.inverted?t.setAttribute("inverted",""):t.removeAttribute("inverted"),t.onclick=function(l){l.stopPropagation(),l.preventDefault();const a=l.target;e.$.input.focus();const r=a.closest(".smart-timepicker-button");if(r){const e=t.querySelectorAll(".smart-timepicker-button");for(let t=0;t<e.length;t++)e[t].removeAttribute("selected");r.setAttribute("selected","")}else a.closest("smart-done-button")?e.close():a.closest(".smart-timepicker")&&e._popup&&e._setInputValue(e._popup.value[0],e._popup.value[1])},!t.id){const e=t.tagName.toLowerCase();t.id=e.slice(0,1).toLowerCase()+e.slice(1)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}e.$.scrollView=t,e.classList.add("smart-input");const l=document.createElement("smart-time-box");if(e._popup=l,t.appendChild(l),""===e.value&&(e.value=[0,0]),e.$.input.value=e.value.join(":"),e.value&&e.value.length>0){const t=e._getInputValue();e._setInputValue(t[0],t[1])}}setValue(e){this.value=e}getValue(){return this.value}getFormattedValue(){const e=this;if(!e.$.input)return"";if(e.value&&e.value.length>0){const t=e._getInputValue();e._setInputValue(t[0],t[1])}return e.$.input.value}_refreshMenu(){}_setAriaRelations(){const e=this,t=e.getAttribute("aria-label");e.readonly?(e.setAttribute("role","button"),!t&&e.placeholder&&e.setAttribute("aria-label",e.placeholder),e.removeAttribute("aria-readonly"),e.$.input.setAttribute("aria-hidden",!0),e.$.input.removeAttribute("aria-controls"),e.$.dropDownButton.setAttribute("aria-hidden",!0)):(e.setAttribute("role","presentation"),t&&t===e.placeholder&&e.removeAttribute("aria-label"),e.$.input.removeAttribute("aria-hidden"),e.$.dropDownButton.removeAttribute("aria-hidden")),e.setAttribute("aria-haspopup","dialog"),e.$.scrollView.setAttribute("role","dialog")}_setActiveDescendant(){}_setInputPurpose(){}});