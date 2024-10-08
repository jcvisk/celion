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
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  dots:true,
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
            slidesToShow: 3
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

/* Inicializando WOW */
new WOW().init();

/* Video Modal Control */
$(".js-video-button").modalVideo({
  youtube: {
      controls: 0,
      nocookie: true
  }
});

/* FECHA DINAMICA PARA EL COPYRIGHT */
document.getElementById('year').innerHTML = new Date().getFullYear();

/* JS PARA QUE LOS METATAGAS SEAN DIANMICOS*/
//Asignando dominio a metaTags
var dominio = $(location).attr('hostname');
$('#metatagUrlFacebook').attr('content', dominio)
$('#metatagUrlTwitter').attr('content', dominio)
//Asignando direccion de favicon a metaTags
dominio+="/favicon.png"
$('#metatagFaviconFacebook').attr('content', dominio)
$('#metatagFaviconTwitter').attr('content', dominio)