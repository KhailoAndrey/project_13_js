!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("4LMMA");document.querySelector(".read").addEventListener("click",(function(e){console.log("click"),null!==e.target.closest(".news-card__favorite-btn")&&(0,a.toggleFavoriteNews)(e)}));var o,i=document.querySelector(".read"),c=window.innerHeight,l=document.querySelector("header").offsetHeight,d=document.querySelector("footer").offsetHeight,s=document.querySelector(".read-container").offsetHeight,f=document.querySelector(".read-container"),v=l+s+d;if(v<c){var u=c-v;f.style.minHeight=f.offsetHeight+u+"px"}o=/^\d{2}\/\d{2}\/\d{4}$/,Object.keys(localStorage).find((function(e){return o.test(e)}))&&function(){var e=Object.keys(localStorage),t={},r=!0,n=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var d=c.value;if(/^\d{2}\/\d{2}\/\d{4}$/.test(d)){var s=JSON.parse(localStorage.getItem(d));t[d]=s}}}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}var f="",v=!0,u=!1,y=void 0;try{for(var g,w=Object.keys(t)[Symbol.iterator]();!(v=(g=w.next()).done);v=!0){var _=g.value;f+='<li class="read-item">\n      <div class="read-title">\n        <h2 class="read-date">'.concat(_,'</h2>\n        <div class="read-arrow"></div>\n      </div>\n      <ul class="read-gallery">\n    ');var h=!0,m=!1,p=void 0;try{for(var b,S=t[_][Symbol.iterator]();!(h=(b=S.next()).done);h=!0){var x=b.value,q=(0,a.isNewsInFavorites)(x.favoritId);f+='<li>\n          <div class="news-card">\n            <img src='.concat(x.img,' alt="Article illustration" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(x.category,'</div>\n              <button class="news-card__favorite-btn ').concat(q?"active_btn":"",'" data-news-id="').concat(x.favoritId,'">\n                ').concat(q?"Remove from Favorite":"Add to Favorite",'\n              </button>\n         <h2 class="news-card__title">').concat(x.title,'</h2>\n         <p class="news-card__description">\n        ').concat(x.description,'\n        </p>\n        <div class="news-card__date-div">\n          <div class="news-card__date">\n          ').concat(x.dateRead,'\n       </div>\n         <a class="news-card__read-more" href="').concat(x.url,'" target="_blank"\n         >Read more</a\n        >\n         </div>\n        </div>\n        </div>\n        </li>')}}catch(e){m=!0,p=e}finally{try{h||null==S.return||S.return()}finally{if(m)throw p}}f+="</ul>"}}catch(e){u=!0,y=e}finally{try{v||null==w.return||w.return()}finally{if(u)throw y}}i.innerHTML=f}()}();
//# sourceMappingURL=read.e2cdb38e.js.map
