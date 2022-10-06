let map;

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// smooth-scrolling

  $("#navbar a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800);
     // End if
  }
}
);

//stickey menu background
window.addEventListener('scroll',function(){
    if(window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity=0.9;
    }
    else{
        document.querySelector('#navbar').style.opacity=1;
    }
});