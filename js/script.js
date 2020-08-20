

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




console.log(modalContainer);

for(var i = 0; i <btn.length; i++) { 		// Opens booking modal //
  var toCLick = btn[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'block';
  }
}

amBtn.onclick = function() {				// Opens Amenities modal //
	amModal.style.display = 'block';
}


for(var i = 0; i <close.length; i++) { 		// Closes all modals //
  var toCLick = close[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'none';
  	amModal.style.display ='none';
  }
}

for(var i = 0; i < modalContainer.length; i++) {  // Closes all modals when area outside modal is clicked//
  var clicked = modalContainer[i];
  clicked.onclick = function() {
    if (event.target == modal || event.target == amModal){
        modal.style.display = 'none';
        amModal.style.display ='none';
    }
  }
}


for(var i = 0; i <closeNav.length; i++) {	// Closes all modals on Nav-bar (Fix for bug) //
  var toCLick = closeNav[i]; 
  toCLick.onclick = function() {
  	modal.style.display = 'none';
  	amModal.style.display = 'none'; 
  }
}

closeHeader.onclick = function() {
	modal.style.display = 'none';
  amModal.style.display = 'none'; 

}




/** Gallery button open **/ 

var galBtn = document.getElementsByClassName('gal-btn')[0];
var firstImage = document.getElementsByClassName('gimg')[0];

console.log(firstImage);
console.log(galBtn);


galBtn.onclick = function() {
  firstImage.click();
}







