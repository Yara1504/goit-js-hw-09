!function(){var t=document.querySelector(".start"),e=document.querySelector(".stop"),n=null;t.addEventListener("click",(function(){n||(t.disabled=!0,e.disabled=!1,n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));document.body.style.backgroundColor=t}),1e3))})),e.addEventListener("click",(function(){n&&(clearInterval(n),n=null,t.disabled=!1,e.disabled=!0)}))}();
//# sourceMappingURL=01-color-switcher.0863c1ca.js.map
