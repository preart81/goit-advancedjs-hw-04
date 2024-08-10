import{S as f,i as n}from"./assets/vendor-f33cd494.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const p="45270476-0e4dc869b670f41fd1cb8efc7",y=l=>{const e=new URLSearchParams({key:p,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9});return fetch(`https://pixabay.com/api/?${e}`).then(a=>{if(!a.ok)throw new Error(a.statusText);return a.json()}).catch(a=>console.log(a))},m=l=>l.map(e=>`  <div class="gallery-card">
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
        </div>`).join(""),g="Sorry, there are no images matching your search query. Please try again.",h=document.querySelector(".search-form"),i=document.querySelector(".search-text"),d=document.querySelector(".gallery"),u=document.querySelector(".loader");let s="";const L=l=>{if(l.preventDefault(),s=i.value.trim(),i.value="",s===""){n.error({position:"topRight",title:"Error",message:"Enter text"});return}d.innerHTML="",u.style.display="block",y(s).then(e=>{if(e.hits.length===0){n.error({position:"topRight",title:"Error",message:g});return}d.innerHTML=m(e.hits),S.refresh()}).catch(e=>{console.log(e)}).finally(()=>{u.style.display="none"})};h.addEventListener("submit",L);let S=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:150,fadeSpeed:150});
//# sourceMappingURL=commonHelpers.js.map
