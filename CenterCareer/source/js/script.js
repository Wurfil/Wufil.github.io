$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        
      items: 5,
      margin: 10,
      loop: true,
      nav: true,responsive:{
        0:{
            items:1
        },
        560:{
            items:2
        },
        855:{
          items:3
        },

        1150:{
          items:4
        },
        1410:{
            items: 5
        },
       
      }
    });
    $("a.menu-item").click(function(){
      $('body').removeClass('lock-scroll');
    })
});
function toggle(){
  $(".toggler").prop("checked", false);
}
function lockScroll() {
  if ($('body').hasClass('lock-scroll')) {
      $('body').removeClass('lock-scroll');
  } else {
      $('body').addClass('lock-scroll');
  }
}
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})