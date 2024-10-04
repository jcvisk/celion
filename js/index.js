$('.slick-produtcs').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    nextArrow: false,
    prevArrow: false,
    dots:true,
    centerPadding: '60px',
  });

$('.slick-tecnologia').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  // autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  dots:true,
  centerPadding: '60px',
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
});


/* Video Modal Control */
$(".js-video-button").modalVideo({
  youtube: {
      controls: 0,
      nocookie: true
  }
});


// $('.slick-center').slick({
//   autoplay: true,
//   autoplaySpeed: 1000,
//   infinite: true,
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 1,
//   arrows: true,
//   nextArrow: $('.next'),
//   prevArrow: $('.prev'),
//   responsive: [
//       {
//           /* de 480 para abajo */
//           breakpoint: 480,
//           settings: {
//               slidesToShow: 1
//           }
//       },
//       {
//           /* de 967 hacia abajo */
//           breakpoint: 967,
//           settings: {
//               slidesToShow: 2
//           }
//       },
//       {
//           /* de 3000 hacia abajo */
//           breakpoint: 3000,
//           settings: {
//               slidesToShow: 3
//           }
//       }
//   ]
// });


// const myboton = document.getElementById('myboton');
// myboton.addEventListener('click', function(e) {
//   myboton.classList.add('d-none');
// });