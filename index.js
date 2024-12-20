import{a as y,S as x,i as f}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();y.defaults.baseURL="https://pixabay.com/api/";const g=(r,s)=>y.get(`?key=36524518-a58dcdc8b7630db8edc13e4de&q=${r}
        &per_page=15&page=${s}&image_type=photo&_orientation=horizontal&_safesearch=true`),u=r=>r.reduce((s,{webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:h,downloads:P})=>s+`<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${n}">
          <img src="${o}" alt="${e}" width="360" />
          </a></div>
        <div class="gallery-wrap-info">
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">likes</h2>
            <p class="gallery-info-text">${t}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">views</h2>
            <p class="gallery-info-text">${a}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">comments</h2>
            <p class="gallery-info-text">${h}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">downloads</h2>
            <p class="gallery-info-text">${P}</p>
          </div>
        </div>
    </li>`,""),v=document.querySelector(".gallery"),L=document.querySelector(".form"),m=document.querySelector(".loader"),p=document.querySelector(".loaderMore"),i=document.querySelector(".loadMoreBtn");i.classList.add("is-hidden");let l=1,c=0,w="",b=0,S=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const d=(r="")=>{v.innerHTML=r,S.refresh(),L.reset()},q=async r=>{r.preventDefault();const s=r.target.elements[0].value;if(s.trim()===""){f.info({title:"Oops...",message:"Please enter text!",position:"topRight"});return}l=1,w=s.trim(),m.classList.remove("is-hidden");const{data:o}=await g(s.trim(),l);if(m.classList.add("is-hidden"),c=o.totalHits,c<15&&c!==0){if(i.classList.contains("is-hidden")){const h=u(o.hits);d(h);return}i.classList.add("is-hidden");const a=u(o.hits);d(a);return}if(o.hits.length===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"}),d(),i.classList.add("is-hidden");return}i.classList.remove("is-hidden");const n=u(o.hits);d(n),b=Math.ceil(c/15);const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,t.height*2),window.scrollBy({top:100,left:100,behavior:"smooth"})},$=async()=>{l+=1,p.classList.remove("is-hidden"),i.classList.add("is-show");const{data:r}=await g(w,l);p.classList.add("is-hidden"),i.classList.remove("is-show");const s=u(r.hits);v.insertAdjacentHTML("beforeend",s),S.refresh(),l===b&&(i.classList.add("is-hidden"),f.info({title:"The end!",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))};L.addEventListener("submit",q);i.addEventListener("click",$);
//# sourceMappingURL=index.js.map
