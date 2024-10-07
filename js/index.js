$('.slick-produtcs').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1000,
    centerMode: true,
    nextArrow: false,
    prevArrow: false,
    dots:true,
    //centerPadding: '0px',
    responsive: [
      {
          /* de 480 para abajo */
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      },
      {
          /* de 967 hacia abajo */
          breakpoint: 967,
          settings: {
              slidesToShow: 2
          }
      },
      {
          /* de 3000 hacia abajo */
          breakpoint: 3000,
          settings: {
              slidesToShow: 3
          }
      }
  ]
  });

$('.slick-tecnologia').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  // autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  dots:true,
  //centerPadding: '60px',
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
        /* de 480 para abajo */
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    },
    {
        /* de 967 hacia abajo */
        breakpoint: 967,
        settings: {
            slidesToShow: 1
        }
    },
    {
        /* de 3000 hacia abajo */
        breakpoint: 1500,
        settings: {
            slidesToShow: 2
        }
    },
    {
        /* de 3000 hacia abajo */
        breakpoint: 3000,
        settings: {
            slidesToShow: 3
        }
    }
]
});


/* Video Modal Control */
$(".js-video-button").modalVideo({
  youtube: {
      controls: 0,
      nocookie: true
  }
});

//document.getElementById('year').innerHTML = new Date().getFullYear();