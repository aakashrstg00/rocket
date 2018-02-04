function openSideMenu() {
    document.getElementById("side-menu").style.width = '50%';
    document.getElementById("side-menu").style.paddingTop = '3em';
    document.querySelector(".btn-close").style.display = 'block';
}

function closeSideMenu() {
    document.querySelector(".btn-close").style.display = 'none';
    document.getElementById("side-menu").style.width = '0px';
}

function nextSlide() {
    console.log('sliding next');
    Slide.initialSlide++;
    showSlides(cmax);
}

function prevSlide() {
    console.log('sliding prev');
    Slide.initialSlide--;
    showSlides(cmax);
}
var Slide = {
    initialSlide:0
};

function showSlides(count) {
    var allSlides = document.querySelectorAll('.mySlides');
    document.querySelector('.prev').style.display = 'block';
    document.querySelector('.next').style.display = 'block';
    var n = allSlides.length;
    console.log('showing slides');
    if (Slide.initialSlide>=0 && (count + Slide.initialSlide) <= allSlides.length) {
        var currentSlides = Array.prototype.slice.call(allSlides, Slide.initialSlide, count + Slide.initialSlide);      
        console.log("initial : "+Slide.initialSlide);
        console.log(currentSlides);
        paint(currentSlides,allSlides);
    }
    if(Slide.initialSlide<=0){
        document.querySelector('.prev').style.display = 'none';
    }
    if((count + Slide.initialSlide) == allSlides.length){
        document.querySelector('.next').style.display = 'none';
    }
}

function paint(currentSlides,allSlides) {
    [].forEach.call(allSlides,(slide)=>{
        slide.style.display = 'none';
    });
    console.log("painting..");
    [].forEach.call(currentSlides, (slide) => {
        slide.style.display = 'block';
    })
}

window.addEventListener('load', (e) => {
    cmax = calcCMAX(window.innerWidth);    
    showSlides(cmax);
})
var cmax;
window.addEventListener('resize',()=>{
    newcmax = calcCMAX(window.innerWidth);
    if(newcmax!=cmax){
        showSlides(newcmax);
    }
})

function calcCMAX(w){
    var c;
    if(w>900){
        c=3;
    }
    else if(w>644 && w<900){
        c=2;
    }
    else if(w>0 && w<644){
        c=1;
    }
    console.log("new calculated cmax : "+c);
    return c;
}