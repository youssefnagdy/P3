/**
 * Created by YoussefNagdy on 6/26/2020.
 */

const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = function () {
  if(window.pageYOffset > 100)
  {
      navbar.classList.remove('top');
      if(!scrolled)
      {
            navbar.style.transform = "translateY(-70px)";
      }
      setTimeout(function () {
          navbar.style.transform = "translateY(0)";
          scrolled = true;
      },200);
  }else{
      navbar.classList.add('top');
      scrolled = false;
  }
};


// Add smooth scrolling to all links
$("#navbar a , .btn").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top -100,
        }, 800);
    } // End if
});


