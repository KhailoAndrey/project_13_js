const e=document.getElementById("main-page");e.addEventListener("click",(e=>{null!==e.target.closest(".news-card__favorite-btn")&&function(e){const t=e.target,n=t.dataset.newsId;null!==localStorage.getItem(`favorite_${n}`)?(localStorage.removeItem(`favorite_${n}`),t.textContent="Add to Favorite",t.classList.remove("active")):(localStorage.setItem(`favorite_${n}`,!0),t.textContent="Remove from Favorite",t.classList.add("active"))}(e)}));document.getElementById("searchForm").addEventListener("submit",(async function(t){t.preventDefault();const n=t.target.elements.search.value;console.log(n);const a="https://via.placeholder.com/400";e.replaceChildren();const s=await async function(e){const t=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e}&api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn`;try{return await fetch(t,{headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(e){console.error(e)}}(n);console.dir(s.response.docs),0===s.response.docs.length&&(console.log(s.response.docs.length),e.innerHTML=`<div class="news-card">\n            <img src="${a}" alt="заглушка" />\n            </div>`);const o=s.response.docs.map((e=>{const t=e.headline.main,{_id:n,section_name:s,abstract:o,pub_date:c,web_url:r}=e,i=null!==localStorage.getItem(`favorite_${n}`);return`\n          <div class="news-card">\n            <img src="${a}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${s}</div>\n              <button class="news-card__favorite-btn ${i?"active":""}" data-news-id="${n}">\n                ${i?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${t}</h2>\n              <p class="news-card__description">${o.length>100?o.substring(0,100)+"...":o}</p>\n              <div class="news-card__date">${new Date(c).toLocaleDateString()}</div>\n              <a class="news-card__read-more" href="${r}" target="_blank">Read more</a>\n            </div>\n          </div>\n        `}));e.innerHTML=o.join("")}));
//# sourceMappingURL=favorite.d4792171.js.map
