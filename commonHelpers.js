import{S as n,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(a){const s=new URLSearchParams({key:"44440808-4b688fa5899148ccacb476dd1",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(i=>i.json())}function u({webformatURL:a,largeImageURL:s,tags:i,likes:r,views:e,comments:t,downloads:c}){return`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${a}" alt="${i}" />
        </a>
        <ul class="statistic">
        <li class="statistic-item">
          <p class="statistic-text">Likes<span class="statistic-item-span">${r}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Views<span class="statistic-item-span">${e}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Comments<span class="statistic-item-span">${t}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Downloads<span class="statistic-item-span">${c}</span></p>
        </li></ul>
      </li>`}const o=document.querySelector(".gallery"),d=document.querySelector(".form"),l=document.querySelector(".loader");d.addEventListener("submit",a=>{a.preventDefault(),o.innerHTML="";const s=a.target.elements.imgType.value.trim();f(),p(s).then(i=>{if(i.hits.length===0||s==="")throw new Error;let r=new n(".gallery a",{captionsData:"alt",captionDelay:250});const e=i.hits.map(u).join("");o.innerHTML=e,r.refresh()}).catch(()=>{m.show({title:"Error",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{h()})});function f(){l.classList.remove("hidden")}function h(){l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
