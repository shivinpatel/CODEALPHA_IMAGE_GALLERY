const cards = document.querySelectorAll(".card");
const filters = document.querySelectorAll(".filter");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category = button.dataset.filter;

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

setTimeout(()=>{

card.style.opacity="1";

},100);

}

else if(card.classList.contains(category)){

card.style.display="block";

setTimeout(()=>{

card.style.opacity="1";

},100);

}

else{

card.style.display="none";

}

});

});

});
const images=[];

cards.forEach(card=>{

images.push(card.querySelector("img").src);

});

let currentIndex=0;

cards.forEach((card,index)=>{

card.addEventListener("click",()=>{

currentIndex=index;

showImage();

lightbox.classList.add("active");

});

});

function showImage(){

lightboxImg.src=images[currentIndex];

}

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=images.length){

currentIndex=0;

}

showImage();

});

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=images.length-1;

}

showImage();

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});


document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

});


images.forEach(src=>{

const img=new Image();

img.src=src;

});

function fadeImage(){

lightboxImg.style.opacity=0;

setTimeout(()=>{

lightboxImg.style.opacity=1;

},150);

}

nextBtn.addEventListener("click",fadeImage);

prevBtn.addEventListener("click",fadeImage);