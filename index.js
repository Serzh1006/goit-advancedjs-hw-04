import{a as p,S as x,i as h}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();p.defaults.baseURL="https://pixabay.com/api/";const y=(r,s)=>p.get(`?key=36524518-a58dcdc8b7630db8edc13e4de&q=${r}
        &per_page=15&page=${s}&image_type=photo&_orientation=horizontal&_safesearch=true`),u=r=>r.reduce((s,{webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:S,downloads:P})=>s+`<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${a}">
          <img src="${o}" alt="${e}" width="360" />
          </a></div>
        <div class="gallery-wrap-info">
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">likes</h2>
            <p class="gallery-info-text">${t}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">views</h2>
            <p class="gallery-info-text">${n}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">comments</h2>
            <p class="gallery-info-text">${S}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">downloads</h2>
            <p class="gallery-info-text">${P}</p>
          </div>
        </div>
    </li>`,""),g=document.querySelector(".gallery"),v=document.querySelector(".form"),f=document.querySelector(".loader"),m=document.querySelector(".loaderMore"),i=document.querySelector(".loadMoreBtn");i.classList.add("is-hidden");let l=1,c=0,L="",b=0,w=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const d=(r="")=>{g.innerHTML=r,w.refresh(),v.reset()},q=async r=>{r.preventDefault();const s=r.target.elements[0].value;if(s.trim()===""){h.info({title:"Oops...",message:"Please enter text!",position:"topRight"});return}l=1,L=s.trim(),f.classList.remove("is-hidden");const{data:o}=await y(s.trim(),l);if(f.classList.add("is-hidden"),c=o.totalHits,c<15&&c!==0){if(i.classList.contains("is-hidden")){const t=u(o.hits);d(t);return}i.classList.add("is-hidden");const e=u(o.hits);d(e);return}if(o.hits.length===0){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"}),d(),i.classList.add("is-hidden");return}i.classList.remove("is-hidden");const a=u(o.hits);d(a),b=Math.ceil(c/15)},$=async()=>{l+=1,m.classList.remove("is-hidden"),i.classList.add("is-show");const{data:r}=await y(L,l);m.classList.add("is-hidden"),i.classList.remove("is-show");const s=u(r.hits);g.insertAdjacentHTML("beforeend",s),w.refresh(),l===b&&(i.classList.add("is-hidden"),h.info({title:"The end!",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}));const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})};v.addEventListener("submit",q);i.addEventListener("click",$);
//# sourceMappingURL=index.js.map
