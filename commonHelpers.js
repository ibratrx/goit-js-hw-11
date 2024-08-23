import{S as d,i as n}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="44474064-e47939977861edfa0fa12c2ac",m="https://pixabay.com/api/";async function p(a,t=1){const o=await fetch(`${m}?key=${f}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`);if(!o.ok)throw new Error("Failed to fetch images");return await o.json()}function y(a){const t=document.querySelector(".gallery"),o=a.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:c,comments:l,downloads:u})=>`
      <a class="gallery__item" href="${e}">
        <img class="gallery__image" src="${s}" width=360; height=200; alt="${r}" />
        <div class="info">
          <p>Likes: ${i}</p>
          <p>Views: ${c}</p>
          <p>Comments: ${l}</p>
          <p>Downloads: ${u}</p>
        </div>
      </a>
    `).join("");t.innerHTML=o,new d(".gallery a")}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#search-form"),t=document.querySelector(".gallery"),o=document.querySelector(".loader");a.addEventListener("submit",async s=>{s.preventDefault();const e=s.currentTarget.elements.query.value.trim();if(!e){n.error({title:"Error",message:"Please enter a search query!"});return}t.innerHTML="",o.classList.add("visible");try{const r=await p(e);r.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)}catch(r){n.error({title:"Error",message:r.message})}finally{o.classList.remove("visible")}})});
//# sourceMappingURL=commonHelpers.js.map
