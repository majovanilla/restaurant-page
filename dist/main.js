!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=7)}([function(e,n,t){var o=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o(a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],a=0;a<e.length;a++){var r=e[a],d=n.base?r[0]+n.base:r[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var l=c(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:b(p,n),references:1}),o.push(u)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,a);else{var r=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function f(e,n,t){var o=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(e,n){var t,o,a;if(n.singleton){var r=h++;t=m||(m=s(n)),o=p.bind(null,t,r,!1),a=p.bind(null,t,r,!0)}else t=s(n),o=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var a=c(t[o]);i[a].references--}for(var r=d(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=r}}}},function(e,n,t){var o=t(3),a=t(4),r=t(5),i=t(6);n=o(!1);var c=a(r),d=a(i);n.push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* General Structure */\n\n\n/* Header */\n\n.nav-bar {\n  display: flex;\n  width: 100%;\n  padding: 5px 30px;\n  background: #2b2a2a;\n  color: white;\n  height: 70px;\n}\n\n.navbar-menu {\n  width: 70%; \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.navbar-name {\n  width: 100%;\n  font-size: 1.5rem;\n  padding: 10px;\n}\n\n/* Main */\n\n.landing-section {\n  width: 100%;\n  height: 100vh;\n}\n\n.opacity {\n  background-color: black;\n  opacity: 0.3;\n  width: 100%;\n  height: 100vh;\n}\n\n.section-text {\n  width: 50%;\n  padding: 15px;\n}\n\n.section-image {\n  \n}\n\n/* Cover */\n\n.main-title {\n  font-size: 3rem;\n  text-align: center;\n  font-weight: bold;\n  padding-left: 60%;\n  padding-top: 15%;\n}\n\n.text {\n  padding-left: 60%;\n}\n\n.cover {\n  background: url("+c+") center / cover no-repeat;\n}\n\n/* Our story */\n\n  \n\n/* What we do */\n\n#what-we-do {\n  background: url("+d+") center / cover no-repeat;\n}\n\n/* Menu */\n\n/* Footer */\n\n.footer {\n  height: 70px;\n  padding: 30px;\n  bottom: 0;\n  background: #2b2a2a;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([a]).join("\n")}var i,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"2d76b0d5feba4f4d2a4f6f79edd068ad.png"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"e393f45946f02c644906c35211c1be5a.png"},function(e,n,t){"use strict";t.r(n);t(0);function o(){const e=document.createElement("header"),n=document.createElement("div"),t=document.createElement("p"),o=document.createTextNode("The Vegetarian"),a=document.createElement("ul");["Home","Our story","Our Specialty","Menu","Contact"].forEach(e=>{const n=document.createElement("a");n.textContent=e;const t=e.replace(" ","-").toLowerCase();n.setAttribute("id",t),n.href="#";const o=document.createElement("li");o.appendChild(n),a.appendChild(o)});e.classList.add("nav-bar"),n.classList.add("navbar-name","d-flex","align-self-center"),n.appendChild(t),t.appendChild(o),a.classList.add("navbar-menu"),e.append(n,a),content.append(e)}function a(){const e=document.getElementById("content"),n=document.querySelector(".landing-section"),t=document.createElement("h1"),o=document.createElement("p");n.classList.add("cover","justify-content-center"),t.classList.add("main-title","text-white"),o.classList.add("text-white","text-center","text"),t.textContent="Conscious Cuisine",o.textContent="We deliver an amazing experience without any harm",n.append(t),n.append(o),e.append(n)}function r(){const e=document.createElement("footer"),n=document.createElement("div"),t=document.createTextNode("Created by majo_vanilla");n.classList.add("text-center","text-white"),n.append(t),e.classList.add("d-flex","align-items-center","justify-content-center","footer"),e.append(n),content.append(e)}!function(){const e=document.getElementById("content"),n=document.createElement("section");o(),e.append(n),n.classList.add("landing-section"),a(),r()}();document.querySelector(".navbar-menu").addEventListener("click",e=>{const n=e.target.textContent,t=document.getElementById("home"),o=document.getElementById("our-story"),r=document.getElementById("our-specialty"),i=document.getElementById("menu"),c=document.getElementById("contact");switch(n){case t:a();break;case o:case r:!function(){const e=document.getElementById("content"),n=document.querySelector(".landing-section"),t=document.createElement("h1"),o=document.createElement("p");n.classList.add("cover"),t.classList.add("main-title","text-white"),o.classList.add("text-white","text-center"),t.textContent="Conscious Cuisine",o.textContent="We deliver an amazing experience without any harm",n.append(t),n.append(o),e.append(n)}();break;case i:!function(){const e=document.getElementById("content"),n=document.querySelector(".landing-section"),t=document.createElement("h1"),o=document.createElement("p");n.classList.add("cover"),t.classList.add("main-title","text-white"),o.classList.add("text-white"),t.textContent="Conscious Cuisine",o.textContent="We deliver an amazing experience without any harm",n.append(t),n.append(o),e.append(n)}();break;case c:!function(){const e=document.getElementById("content"),n=document.querySelector(".landing-section"),t=document.createElement("h1"),o=document.createElement("p");n.classList.add("cover"),t.classList.add("main-title","text-white"),o.classList.add("text-white","text-center"),t.textContent="Conscious Cuisine",o.textContent="We deliver an amazing experience without any harm",n.append(t),n.append(o),e.append(n)}();break;default:a()}})}]);