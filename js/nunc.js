// $(function () {
//     $('li a').click(function (e) {     
//       var $this = $(this);
//       $this.closest('ul').find('.active').removeClass('active');
//       $this.parent().addClass('active');

//     });
//   });

window.onscroll = function () {
    var nav = document.getElementById('navs');
    if (window.pageYOffset > 1) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }