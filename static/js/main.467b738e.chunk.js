(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(e,_,n){"use strict";n.r(_);var t=n(2),a=n.n(t),r=n(6),c=n.n(r),s=n(7),o=n(0);c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{})}),document.getElementById("root"))},16:function(e,_,n){},7:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_repos_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_App_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(D_repos_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),answer=_useState2[0],setAnswer=_useState2[1],display=function(e){console.log("in display");var _=e;if(answer.length>20){var n=answer;setAnswer("DIGIT LIMIT MET"),setTimeout((function(){return setAnswer(n)}),1e3)}else setAnswer((function(n){if(/[-+*/]/.test(_)&&/[-+*/]/.test(n[n.length-1])){var t;if(/[-]/.test(_))t=n.slice().concat(_);else{for(var a=0,r=0;r<n.length;r+=1)Number.isNaN(+n[r])?a+=1:a=0;t=n.slice(0,-a).concat(_)}setAnswer(t)}else{var c="".concat(n).split(/[-+*/]/g).at(-1);!Number.isNaN(c)&&/[.]/.test(c)&&"."===e&&(console.log("symbol = empty"),_=""),setAnswer((n+_).replace(/^0/g,"").replace(/\.+/g,"."))}}));document.activeElement.blur()},calculate=function calculate(){try{setAnswer(eval(answer))}catch(error){console.error("Invalid expression: ".concat(answer))}document.activeElement.blur()},clear=function(){setAnswer(0),document.activeElement.blur()},backspace=function(){setAnswer((function(e){return"".concat(e).slice(0,-1)})),document.activeElement.blur()},handleKeyDown=function(e){switch(e.keyCode){case 48:case 96:display("0");break;case 49:case 97:display("1");break;case 50:case 98:display("2");break;case 51:case 99:display("3");break;case 52:case 100:display("4");break;case 53:case 101:display("5");break;case 54:case 102:display("6");break;case 55:case 103:display("7");break;case 56:case 104:display("8");break;case 57:case 105:display("9");break;case 106:display("*");break;case 171:case 107:display("+");break;case 173:case 109:display("-");break;case 111:display("/");break;case 190:case 188:case 110:display(".");break;case 13:calculate();break;case 8:backspace();break;case 46:case 67:clear()}if(e.shiftKey)switch(console.log("shift pressed"),e.keyCode){case 171:display("*");break;case 55:display("/");break;case 48:calculate()}};return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return document.addEventListener("keydown",handleKeyDown),function(){document.removeEventListener("keydown",handleKeyDown)}}),[handleKeyDown]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"grid",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"display",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"display",className:"answer",children:answer})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"clear",role:"button",tabIndex:"0",onClick:clear,onKeyDown:handleKeyDown,className:"padButton clear red button",children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"backspace",role:"button",tabIndex:"0",onClick:backspace,onKeyDown:handleKeyDown,className:"padButton backspace red button",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{id:"backspace-icon",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.a,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.a})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"divide",role:"button",tabIndex:"0",onClick:function(){return display("/")},onKeyDown:handleKeyDown,className:"padButton divide green button",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"multiply",role:"button",tabIndex:"0",onClick:function(){return display("*")},onKeyDown:handleKeyDown,className:"padButton multiply green button",children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"seven",role:"button",tabIndex:"0",onClick:function(){return display("7")},onKeyDown:handleKeyDown,className:"padButton seven dark-grey button",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"eight",role:"button",tabIndex:"0",onClick:function(){return display("8")},onKeyDown:handleKeyDown,className:"padButton eight dark-grey button",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"nine",role:"button",tabIndex:"0",onClick:function(){return display("9")},onKeyDown:handleKeyDown,className:"padButton nine dark-grey button",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"subtract",role:"button",tabIndex:"0",onClick:function(){return display("-")},onKeyDown:handleKeyDown,className:"padButton subtract green button",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"four",role:"button",tabIndex:"0",onClick:function(){return display("4")},onKeyDown:handleKeyDown,className:"padButton four dark-grey button",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"five",role:"button",tabIndex:"0",onClick:function(){return display("5")},onKeyDown:handleKeyDown,className:"padButton five dark-grey button",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"six",role:"button",tabIndex:"0",onClick:function(){return display("6")},onKeyDown:handleKeyDown,className:"padButton six dark-grey button",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"add",role:"button",tabIndex:"0",onClick:function(){return display("+")},onKeyDown:handleKeyDown,className:"padButton add green button",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"one",role:"button",tabIndex:"0",onClick:function(){return display("1")},onKeyDown:handleKeyDown,className:"padButton one dark-grey button",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"two",role:"button",tabIndex:"0",onClick:function(){return display("2")},onKeyDown:handleKeyDown,className:"padButton two dark-grey button",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"three",role:"button",tabIndex:"0",onClick:function(){return display("3")},onKeyDown:handleKeyDown,className:"padButton three dark-grey button",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"equals",role:"button",tabIndex:"0",onClick:calculate,onKeyDown:handleKeyDown,className:"padButton equals blue button",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"zero",role:"button",tabIndex:"0",onClick:function(){return display("0")},onKeyDown:handleKeyDown,className:"padButton zero dark-grey button",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"decimal",role:"button",tabIndex:"0",onClick:function(){return display(".")},onKeyDown:handleKeyDown,className:"padButton decimal dark-grey button",children:"."})]})})}__webpack_exports__.a=App}},[[11,1,2]]]);
//# sourceMappingURL=main.467b738e.chunk.js.map