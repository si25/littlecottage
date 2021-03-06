

/** Mobile: collapses navbar **/ 
  $(function(){ 
       var navMain = $('.navbar-collapse');
       navMain.on("click", ".close-nav", null, function () {
           navMain.collapse('hide');
       });
  });




/** Scroll speed **/ 
$(".navbar-brand").click(function(event){
	event.preventDefault();
  var navMain = $('.navbar-collapse');
  navMain.collapse('hide');
	$('html, body').animate({
  	 scrollTop: $('#hero').offset().top - 56
  	 }, 800);
});
	

$("#nb .nav-item").click(function(event) {
  event.preventDefault();
  const id = $(this).find('a').attr("href"); 

  $('html, body').animate({
  	 scrollTop: $(id).offset().top - 56
   }, 800);
 });


// Modal functionality\

 /** Creates modal open/close functionality **/                                  // Improve this with queryAllSelectors and for loop //
  var modal = document.getElementById ('booking-modal');
  var btn = document.getElementsByClassName ('booking-button');

  var amModal = document.getElementById ('amenities-modal');
  var amBtn = document.getElementsByClassName ('am-btn')[0];

  var modalContainer = document.getElementsByClassName ('modal-container');
  var close = document.getElementsByClassName ('close');
  var closeNav = document.getElementsByClassName('nav-link');
  var closeHeader = document.getElementsByClassName('navbar-brand')[0];


function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
      // if any scroll is attempted, set this to the previous value 
    window.onscroll = function() { 
      window.scrollTo(scrollLeft, scrollTop); 
    }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 



for(var i = 0; i <btn.length; i++) { 		// Opens booking modal //
  var toCLick = btn[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'block';
    disableScroll();
  }
}

amBtn.onclick = function() {				// Opens Amenities modal //
	amModal.style.display = 'block';
  disableScroll();
}


for(var i = 0; i <close.length; i++) { 		// Closes all modals //
  var toCLick = close[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'none';
  	amModal.style.display ='none';
    enableScroll();
  }
}

for(var i = 0; i < modalContainer.length; i++) {  // Closes all modals when area outside modal is clicked//
  var clicked = modalContainer[i];
  clicked.onclick = function() {
    if (event.target == modal || event.target == amModal){
        modal.style.display = 'none';
        amModal.style.display ='none';
        enableScroll();
    }
  }
}


for(var i = 0; i <closeNav.length; i++) {	// Closes all modals on Nav-bar (Fix for bug) //
  var toCLick = closeNav[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'none';
  	amModal.style.display = 'none';
    enableScroll();
  }
}

closeHeader.onclick = function() {
	modal.style.display = 'none';
  amModal.style.display = 'none'; 
  enableScroll();
}




/** Gallery button open **/ 

var galBtn = document.getElementsByClassName('gal-btn');
var firstImage = document.getElementsByClassName('gimg');
var galleryClose = document.getElementsByClassName('lb-close');


console.log(galleryClose);



galBtn[0].onclick = function() {
  firstImage[0].click();
}











