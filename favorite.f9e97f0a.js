!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,s,"next",t)}function s(t){n(c,o,a,i,s,"throw",t)}i(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),c=new T(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return F()}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var i=S(c,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,c),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(O([])));b&&b!==n&&r.call(b,a)&&(w=b);var L=g.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,c,i){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,i)}))}i(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=g,s(L,"constructor",g),s(g,"constructor",m),m.displayName=s(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,i,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var c=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(L),s(L,i,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}document.getElementById("search-form");var a=document.getElementById("weather"),c="f5984abfd7be02d0f0f71396692dd7ba",i="Kyiv";function s(t,e){return u.apply(this,arguments)}function u(){return(u=t(e)(t(r).mark((function e(n,o){var s,u,d;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.innerHTML='\n    <div class="weather__loading">\n      <img src="./" alt="Loading...">\n    </div>\n  ',s=n&&o?"https://api.openweathermap.org/data/2.5/weather?units=metric&lat=".concat(n,"&lon=").concat(o,"&appid=").concat(c):"https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(i,"&appid=").concat(c),t.next=5,fetch(s,{method:"GET"});case 5:return u=t.sent,t.next=8,u.json();case 8:d=t.sent,u.ok?l(d):a.innerHTML=d.message;case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(t){console.log(t);var e=t.name,n=Math.round(t.main.temp),r=t.weather[0].main,o=t.weather[0].icon,c=(new Date).toLocaleDateString("en-US",{weekday:"short"}),i=(new Date).toLocaleDateString("en-US",{day:"numeric"}).toUpperCase(),s=(new Date).toLocaleDateString("en-US",{month:"short"}),u=(new Date).toLocaleDateString("en-US",{year:"numeric"}).toUpperCase(),l='<div class="header__weather">\n    <div class="temp__info">'.concat(n,'°</div>\n    <div class="status__location">\n      <div class="status">\n        <p class="status__name">').concat(r,'</p>\n      </div>\n      <div class="location">\n        <img src="./svg/vector.svg" alt="checkpoint">\n        <p class="location__name">').concat(e,'</p>\n      </div>\n    </div>\n  </div>\n  <div class="icon__picture">\n    <img class="weather__picture" src="https://openweathermap.org/img/w/').concat(o,'.png" alt="Clouds">\n  </div>\n  <div class="date__wrapper">\n    <div class="day">').concat(c,'</div>\n    <div class="date">').concat(i," ").concat(s," ").concat(u,'</div>\n  </div>\n  <button class="weatherForweek" id="weatherForweek">Weather for 5 days</button>\n  ');a.innerHTML=l}function d(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){s(t.coords.latitude,t.coords.longitude)}),(function(){s()})):s()}a&&d();var h="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",f=document.getElementById("main-page"),p="https://via.placeholder.com/400";function v(t,e){return y.apply(this,arguments)}function y(){return(y=t(e)(t(r).mark((function e(n,o){var a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.nytimes.com/svc/search/v2/articlesearch.json?page=".concat(n,"&q=").concat(o,"&api-key=").concat(h),t.prev=1,t.next=4,fetch(a,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var m,g,w,_;function b(){return(b=t(e)(t(r).mark((function e(n){var o,a,c;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),o=n.target.elements.search.value.trim(),console.log(o),t.next=5,v(3,o);case 5:a=t.sent,console.dir(a.response),0===a.response.docs.length&&(console.log(a.response.docs.length),f.innerHTML='<div class="news-card">\n            <img src="'.concat(p,'" alt="заглушка" />\n            </div>')),c=a.response.docs.map((function(t){var e=t.headline.main,n=t._id,r=t.section_name,o=t.abstract,a=t.pub_date,c=t.web_url,i=null!==localStorage.getItem("favorite_".concat(n));return'\n          <div class="news-card">\n            <img src="'.concat(p,'" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(r,'</div>\n              <button class="news-card__favorite-btn ').concat(i?"active":"",'" data-news-id="').concat(n,'">\n                ').concat(i?"Remove from Favorite":"Add to Favorite",'\n              </button>\n              <h2 class="news-card__title">').concat(e,'</h2>\n              <p class="news-card__description">').concat(o.length>100?o.substring(0,100)+"...":o,'</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">').concat(new Date(a).toLocaleDateString(),'</div>\n              <a class="news-card__read-more" href="').concat(c,'" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n        ')})),f.insertAdjacentHTML("beforeend",c.join("")),document.addEventListener("DOMContentLoaded",d),n.target.reset();case 12:case"end":return t.stop()}}),e)})))).apply(this,arguments)}f.addEventListener("click",(function(t){null!==t.target.closest(".news-card__favorite-btn")&&function(t){var e=t.target,n=e.dataset.newsId;null!==localStorage.getItem("favorite_".concat(n))?(localStorage.removeItem("favorite_".concat(n)),e.textContent="Add to Favorite",e.classList.remove("active")):(localStorage.setItem("favorite_".concat(n),!0),e.textContent="Remove from Favorite",e.classList.add("active"))}(t)})),m=document.querySelector(".js-menu-container"),g=document.querySelector(".js-open-menu"),w=document.querySelector(".js-close-menu"),_=function(){var t="true"===g.getAttribute("aria-expanded")||!1;g.setAttribute("aria-expanded",!t),m.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},g.addEventListener("click",_),w.addEventListener("click",_),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(m.classList.remove("is-open"),g.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var L="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",x="https://api.nytimes.com/svc/news/v3/content/section-list.json",E=document.getElementById("category-btn");function S(){return(S=t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(x,"?api-key=").concat(L),{headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var e=[],n=!0,r=!1,o=void 0;try{for(var a,c=t.results[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var i=a.value;e.push(i.display_name)}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return console.log(e),e})).then((function(t){for(var e=0;e<=5;e++)E.insertAdjacentHTML("beforeend",'<button type="button" class="category_btn">'.concat(t[e],"</button>"));E.insertAdjacentHTML("beforeend",'<select name="Others" class="category_btn select_btn">\n            <option value="Others" hidden>Others</option>\n            </select>');for(var n=document.querySelector(".select_btn"),r=6;r<t.length;r++)n.insertAdjacentHTML("beforeend",'<option value="'.concat(t[r],'">').concat(t[r],"</option>"))}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var j=document.getElementById("searchForm");!function(){S.apply(this,arguments)}(),j.addEventListener("submit",(function(t){return b.apply(this,arguments)}))}();
//# sourceMappingURL=favorite.f9e97f0a.js.map
