!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="/assets/scripts/dist/",n(0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i,s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(o,s){i=function(){return s(o)}.call(n,t,n,e),!(void 0!==i&&(e.exports=i))}(void 0,function(e){"use strict";var n=function(e,n){return n=n||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n),n.appendChild(e)},t=function(){function e(){o(this,e);var n=document.createElement("fakeelement"),t={element:"[data-choice]",disabled:!1,maxItems:0,debug:!1,placeholder:!1,callbackOnInit:function(){},callbackOnRender:function(){},callbackOnKeyUp:function(){},callbackOnKeyDown:function(){},callbackOnEntry:function(){},callbackOnRemove:function(){}};this.options=t,this.initialised=!1,this.supports="querySelector"in document&&"addEventListener"in document&&"classList"in n,this.elements=document.querySelectorAll(this.options.element),this.onClick=this.onClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onChange.bind(this)}return s(e,[{key:"isOpen",value:function(){}},{key:"isDisabled",value:function(){}},{key:"isEmpty",value:function(){}},{key:"onKeyDown",value:function(e){console.log("Key down"),console.log(e.target)}},{key:"onFocus",value:function(e){console.log("Focus"),console.log(e.target)}},{key:"onClick",value:function(e){console.log("Click"),console.log(e.target)}},{key:"onChange",value:function(e){console.log("Change"),console.log(e.target)}},{key:"addEventListeners",value:function(e){e.addEventListener("click",this.onClick),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("change",this.onChange),e.addEventListener("focus",this.onFocus),e.addEventListener("blur",this.onBlur)}},{key:"removeEventListeners",value:function(e){e.removeEventListener("click",this.onClick),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("change",this.onChange),e.removeEventListener("focus",this.onFocus),e.removeEventListener("blur",this.onBlur)}},{key:"setPlaceholder",value:function(){}},{key:"setValue",value:function(){}},{key:"getValue",value:function(){}},{key:"getPlaceholder",value:function(){}},{key:"search",value:function(){}},{key:"addItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"removeAllItems",value:function(){}},{key:"createItemList",value:function(){}},{key:"init",value:function(){this.supports||console.error("Your browser doesn'nt support shit"),this.initialised=!0;for(var e=this.elements,n=e.length-1;n>=0;n--){var t=e[n];this.render(t)}}},{key:"render",value:function(e){console.log("Render");var t=document.createElement("div");t.classList.add("choice","choice--active"),e.classList.add("choice__input","choice__input--original"),e.tabIndex="-1",e.setAttribute("style","display:none;"),n(e,t);var o=document.createElement("input");o.type="text",o.classList.add("choice__input","choice__input--cloned"),t.appendChild(o),this.addEventListeners(e)}},{key:"destroy",value:function(){this.options=null,this.elements=null;for(var e=this.elements,n=e.length-1;n>=0;n--){var t=e[n];this.removeEventListeners(t)}}}]),e}(),i=new t;i.init(),console.log(i)})}]);