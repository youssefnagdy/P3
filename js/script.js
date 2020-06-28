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
            console.log(scrolled);
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


