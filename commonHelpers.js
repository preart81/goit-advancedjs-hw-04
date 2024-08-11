import{a as m,S as h,i as d}from"./assets/vendor-202cbe3f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const L="45270476-0e4dc869b670f41fd1cb8efc7",S=async(o,e=1,a=15)=>(await m.get("https://pixabay.com/api/?",{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:a}})).data,b=o=>o.map(e=>`  <div class="gallery-card">
        <a href="${e.largeImageURL}" class="gallery-card-link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-card-img" />
          <ul class="gallery-card-info">
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Likes</p>
              <p class="gallery-card-info-value">${e.likes}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Views</p>
              <p class="gallery-card-info-value">${e.views}</p>
            </li> 
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Comments</p>
              <p class="gallery-card-info-value">${e.comments}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Downloads</p>
              <p class="gallery-card-info-value">${e.downloads}</p>
            </li>
          </ul>
          </a>
        </div>`).join(""),v="Sorry, there are no images matching your search query. Please try again.",w="We are sorry, but you have reached the end of search results.",E=document.querySelector(".search-form"),y=document.querySelector(".search-text"),p=document.querySelector(".gallery"),f=document.querySelector(".loader"),u=document.querySelector(".btn-load-more");let s=1;const i=15;let n="";const g=o=>{u.classList.add("is-hidden"),f.style.display="block",S(o,s,i).then(e=>{if(e.hits.length===0){d.error({position:"topRight",title:"Error",message:v});return}const a=p.getBoundingClientRect();if(p.insertAdjacentHTML("beforeend",b(e.hits)),R.refresh(),e.hits.length<i||i*s>=e.totalHits?d.error({position:"topRight",title:"Error",message:w}):u.classList.remove("is-hidden"),s>1){const r=document.querySelector(".gallery-card").getBoundingClientRect();console.log(a),r.height*2,window.scrollBy({top:a.bottom,behavior:"smooth"})}}).catch(e=>{console.log(e)}).finally(()=>{f.style.display="none"})},_=o=>{if(o.preventDefault(),n=y.value.trim(),y.value="",n===""){d.error({position:"topRight",title:"Error",message:"Enter text"});return}p.innerHTML="",s=1,g(n)},q=()=>{s+=1,g(n)};E.addEventListener("submit",_);u.addEventListener("click",q);let R=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:150,fadeSpeed:150});
//# sourceMappingURL=commonHelpers.js.map
