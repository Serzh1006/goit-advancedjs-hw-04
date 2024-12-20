import{a as m,S as x,i as h}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();m.defaults.baseURL="https://pixabay.com/api/";const y=(r,s)=>m.get(`?key=36524518-a58dcdc8b7630db8edc13e4de&q=${r}
        &per_page=15&page=${s}&image_type=photo&_orientation=horizontal&_safesearch=true`),u=r=>r.reduce((s,{webformatURL:i,largeImageURL:a,tags:e,likes:t,views:n,comments:S,downloads:P})=>s+`<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${a}">
          <img src="${i}" alt="${e}" width="360" />
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
    </li>`,""),g=document.querySelector(".gallery"),v=document.querySelector(".form"),f=document.querySelector(".loader"),p=document.querySelector(".loaderMore"),o=document.querySelector(".loadMoreBtn");o.classList.add("is-hidden");let l=1,c=0,L="",b=0,w=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const d=(r="")=>{g.innerHTML=r,w.refresh(),v.reset()},$=async r=>{r.preventDefault();const s=r.target.elements[0].value;if(s.trim()===""){h.info({title:"Oops...",message:"Please enter text!",position:"topRight"});return}l=1,L=s.trim(),f.classList.remove("is-hidden");const{data:i}=await y(s.trim(),l);if(f.classList.add("is-hidden"),c=i.totalHits,c<15&&c!==0){if(o.classList.contains("is-hidden")){const t=u(i.hits);d(t);return}o.classList.add("is-hidden");const e=u(i.hits);d(e);return}if(i.hits.length===0){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"}),d(),o.classList.add("is-hidden");return}o.classList.remove("is-hidden");const a=u(i.hits);d(a),b=Math.ceil(c/15)},q=async()=>{l+=1,p.classList.remove("is-hidden"),o.classList.add("is-show");const{data:r}=await y(L,l);p.classList.add("is-hidden"),o.classList.remove("is-show");const s=u(r.hits);g.insertAdjacentHTML("beforeend",s),w.refresh(),l===b&&(o.classList.add("is-hidden"),h.info({title:"The end!",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))};v.addEventListener("submit",$);o.addEventListener("click",q);
//# sourceMappingURL=index.js.map
