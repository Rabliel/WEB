const lightbox = document.createElement("div");
lightbox.id="lightbox";
document.body.appendChild(lightbox);

const galleryOverlays=document.getElementsByClassName("gallery-item__overlay");
const galleryImgs=document.getElementsByClassName("gallery-item__img");


for( let i=0;i<galleryOverlays.length;i++){
    galleryOverlays[i].addEventListener('click',e=>{
            lightbox.classList.add("active");

            while(lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild);
            }

            const img = document.createElement("img");
            img.src=galleryImgs[i].src;
            lightbox.appendChild(img);
    });
}


lightbox.addEventListener('click',e=>{
    if(e.target!==e.currentTarget) return;

    lightbox.classList.remove("active");
});



