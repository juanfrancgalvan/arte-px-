function createGallery(){const e=document.querySelector(".gallery-grid");pictures.forEach(n=>{const t=document.createElement("img");t.src=n.image,t.alt=n.name+" Painting",t.loading="lazy",e.appendChild(t),t.addEventListener("click",(function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("overlay");const a=document.createElement("img");a.src=n.original,a.alt=n.name,a.loading="lazy",e.appendChild(t),t.appendChild(a),t.addEventListener("click",(function(){t.remove()}))}))})}createGallery();
//# sourceMappingURL=script.js.map
