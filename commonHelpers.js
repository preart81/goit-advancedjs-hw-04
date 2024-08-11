import{a as m,S as h,i as d}from"./assets/vendor-202cbe3f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const L="45270476-0e4dc869b670f41fd1cb8efc7",b=async(o,e=1,a=15)=>(await m.get("https://pixabay.com/api/?",{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:a}})).data,v=o=>o.map(e=>`  <div class="gallery-card">
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
        </div>`).join(""),S="Sorry, there are no images matching your search query. Please try again.",w="We are sorry, but you have reached the end of search results.",E=document.querySelector(".search-form"),f=document.querySelector(".search-text"),p=document.querySelector(".gallery"),y=document.querySelector(".loader"),u=document.querySelector(".btn-load-more");let s=1;const c=15;let l="";const g=o=>{u.classList.add("is-hidden"),y.style.display="block",b(o,s,c).then(e=>{if(e.hits.length===0){d.error({position:"topRight",title:"Error",message:S});return}const a=p.getBoundingClientRect();p.insertAdjacentHTML("beforeend",v(e.hits)),O.refresh(),e.hits.length<c||c*s>=e.totalHits?d.error({position:"topRight",title:"Error",message:w}):u.classList.remove("is-hidden"),s>1&&window.scrollBy({top:a.bottom,behavior:"smooth"})}).catch(e=>{console.log(e)}).finally(()=>{y.style.display="none"})},_=o=>{if(o.preventDefault(),l=f.value.trim(),f.value="",l===""){d.error({position:"topRight",title:"Error",message:"Enter text"});return}p.innerHTML="",s=1,g(l)},q=()=>{s+=1,g(l)};E.addEventListener("submit",_);u.addEventListener("click",q);let O=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:150,fadeSpeed:150});
//# sourceMappingURL=commonHelpers.js.map
