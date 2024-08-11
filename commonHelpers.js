import{a as p,S as u,i as n}from"./assets/vendor-202cbe3f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const f="45270476-0e4dc869b670f41fd1cb8efc7",y=async(s,e=1)=>{const a=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}),l=await p.get(`https://pixabay.com/api/?${a}`);return console.log(l),l.data},g=s=>s.map(e=>`  <div class="gallery-card">
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
        </div>`).join(""),m="Sorry, there are no images matching your search query. Please try again.",h=document.querySelector(".search-form"),c=document.querySelector(".search-text"),i=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=s=>{s.preventDefault();const e=c.value.trim();if(c.value="",e===""){n.error({position:"topRight",title:"Error",message:"Enter text"});return}i.innerHTML="",d.style.display="block",y(e).then(a=>{if(a.hits.length===0){n.error({position:"topRight",title:"Error",message:m});return}i.innerHTML=g(a.hits),S.refresh()}).catch(a=>{console.log(a)}).finally(()=>{d.style.display="none"})};h.addEventListener("submit",L);let S=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:150,fadeSpeed:150});
//# sourceMappingURL=commonHelpers.js.map
