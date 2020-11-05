

function isElementOutViewport (el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}


let lastScrollTop = 0;
let gallery = document.querySelector("#header"); 
let parallax = document.querySelector("#parallax"); 
window.addEventListener("scroll", function(){
     let offset = window.pageYOffset;
    if(!isElementOutViewport(gallery)){
            document.querySelector(".banner-left-1").style.left = (5 - (offset*0.004))+"%"; 
            document.querySelector(".banner-left-2").style.left = (3 - (offset*0.004))+"%"; 
            document.querySelector(".banner-left-3").style.bottom = (55 - (offset*(-0.004)))+"%"; 
            document.querySelector(".banner-right-1").style.bottom = (9 - (offset*(-0.004)))+"%"; 
            document.querySelector(".banner-right-2").style.right = (14 - (offset*(0.005)))+"%"; 
            document.querySelector(".banner-right-3").style.bottom = (55 - (offset*(-0.005)))+"%"; 
            document.querySelector(".banner-right-4").style.right = (0 - (offset*0.005))+"%"; 
            document.querySelector(".overlay").style.opacity = (0.6 - (offset* 0.0001)); 
            document.querySelector(".header").style.opacity = (1 - (offset* 0.0002)); 
    }
    let newOffset = offset/2; 

    if(!isElementOutViewport(parallax)){
        // console.log(!isElementOutViewport(parallax)); 
        document.querySelector(".unique__left__1").style.transform = 'translateY('+ newOffset * (-0.09) + 'px)'; 
        document.querySelector(".building__left__2").style.transform = 'translateY('+ newOffset * - 0.09 + 'px)'; 
        document.querySelector(".kathy__right__1").style.transform = 'translateY(' + newOffset * - 0.09+ 'px)'; 
        document.querySelector(".mountain__right__2").style.transform = 'translateY('+ newOffset * - 0.09+ 'px)'; 
        document.querySelector(".flower__right__3").style.transform = 'translateY('+ newOffset * - 0.09 + 'px)';    
    }
});

let imagesList = Array.from(document.querySelectorAll(".category__business__item"));

window.addEventListener("scroll", function(){
    imagesList.forEach(function(obj, index){
            if(window.scrollY + window.innerHeight >= obj.offsetTop){
                if(window.scrollY <= obj.offsetTop + obj.offsetHeight){
                     obj.classList.add("animate__zoomIn"); 
                }} 
            if(!isElementOutViewport(obj)){
                obj.classList.add("animate__zoomIn");         
            }  
        }
    )})

