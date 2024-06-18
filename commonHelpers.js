import{S as n,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){const s=new URLSearchParams({key:"44440808-4b688fa5899148ccacb476dd1",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(i=>i.json())}function u({webformatURL:r,largeImageURL:s,tags:i,likes:a,views:e,comments:t,downloads:l}){return`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${i}" />
        </a>
        <ul class="statistic">
        <li class="statistic-item">
          <p class="statistic-text">Likes<span class="statistic-item-span">${a}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Views<span class="statistic-item-span">${e}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Comments<span class="statistic-item-span">${t}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Downloads<span class="statistic-item-span">${l}</span></p>
        </li></ul>
      </li>`}const c=document.querySelector(".gallery"),f=document.querySelector(".form"),o=document.querySelector(".loader");f.addEventListener("submit",r=>{r.preventDefault(),c.innerHTML="";const s=r.target.elements.imgType.value.trim();if(s==="")return alert("Please fill the field");d(),p(s).then(i=>{if(i.hits.length===0)throw new Error;let a=new n(".gallery a",{captionsData:"alt",captionDelay:250});const e=i.hits.map(u).join("");c.innerHTML=e,a.refresh()}).catch(()=>{m.show({title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{h()})});function d(){o.classList.remove("hidden")}function h(){o.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
