let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,4000);
 

function nextSlide() {
   goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}
	
function goToSlide(n) {
   slides[currentSlide].className = 'slide';
   currentSlide = (n+slides.length)%slides.length;
   slides[currentSlide].className = 'slide showing';
}
function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}


let next = document.getElementById('next');
let previous = document.getElementById('last');
next.onclick = function() {
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function() {
	pauseSlideshow();
	previousSlide();
};



































/*for(let i=0;i<slides.length;i++){
	slider[i] = slides[i].src;
	slides[i].remove();
}

let step=0;
let offset=0;

function draw(){
	let img =document.createElement('img');
	img.src = slider[step];
	img.style.left=offset*slid_width+'px';
	document.querySelector('.slider').appendChild(img);
	step+1 == slider.length?step=0:step++;
	offset=1;
}

function left(){
	let slides2 =document.querySelectorAll('.slider img');
	let offset2=0;
	for(let i=0;i<slides2.length;i++){
		slides2[i].style.left = offset2*slid_width-slid_width+'px';
		offset2++;
	}
	setTimeout(function(){
		slides2[0].remove();
		draw();
	},2000);
	
}
draw();draw();
let timerId = setTimeout(function tick() {
	left();
	timerId = setTimeout(tick, 4000);
  }, 4000);
let Next=document.querySelector('.Next');
Next.onclick=function() {
	opacity: 0;
	left();
  };


  let End=document.querySelector('.End');
  End.onclick=function() {
	  opacity: 0;
	  right();
	};
  function right(){
	let slides3 =document.querySelectorAll('.slider img');
	let offset3=0;
	for(let i=0;i<slides3.length;i++){
		slides3[i].style.right = offset3*slid_width-slid_width+'px';
		offset3++;
	}
	setTimeout(function(){
		slides3[0].remove();
		draw();
	},2000);*/