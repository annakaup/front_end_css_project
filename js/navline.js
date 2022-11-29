//$(document).ready(function(){
   //Navbar heiht
   //const navHeight = $('.navbar').height();

   //const navbar = document.getElementById("navbar");

   const navHeight = navbar.clientHeight;

   const stickyToggle = () => {
       //section height with ppicture
       //const divHeight = $('.apland').height();
       //console.log(divHeight);
       console.log(navHeight);
       //console.log(navbar.classList);
       //console.log(document.documentElement.scrollTop);
       if (document.documentElement.scrollTop > navHeight) {
           //$('.navbar').addClass('bg-top-sticky');
           navbar.classList.add("bg-top-sticky");
        } else {
            //$('.navbar').removeClass('bg-top-sticky');
            navbar.classList.remove("bg-top-sticky");
       }
   };

   //Scroll & resize events
   //$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
   //    stickyToggle($(this));
   //});
   window.addEventListener('scroll', function() {
       //console.log("scrolling");
       stickyToggle();
   });
  //});