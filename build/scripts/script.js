const pictures=[{name:"gallery1",image:"/build/assets/images/gallery1.webp"},{name:"gallery2",image:"/build/assets/images/gallery2.webp"},{name:"gallery3",image:"/build/assets/images/gallery3.webp"},{name:"gallery4",image:"/build/assets/images/gallery4.webp"},{name:"gallery5",image:"/build/assets/images/gallery5.webp"},{name:"gallery6",image:"/build/assets/images/gallery6.webp"}];function createGallery(){const e=document.querySelector(".gallery-grid");pictures.forEach(a=>{const l=document.createElement("img");l.src=a.image,l.alt=a.name,e.appendChild(l),l.addEventListener("click",(function(){const e=document.querySelector("body"),l=document.createElement("div");l.classList.add("overlay");const s=document.createElement("img");s.src=a.image,s.alt=a.name,e.appendChild(l),l.appendChild(s),s.addEventListener("click",(function(){l.remove()}))}))})}createGallery();
//# sourceMappingURL=script.js.map
