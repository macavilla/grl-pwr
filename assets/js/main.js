$(function() {

  $('#schedule').slick({
    infinite: false,
    arrows: false,
    dots: true,
    appendDots: $('#customDots'),
    customPaging: function (slider, i) {
      switch (i) {
        case 0:
          return '<button class=\'tab\'><span>ESCENARIO</span>VIOLETA</button>';
          break;

        case 1:
          return '<button class=\'tab\' ><span>ESCENARIO</span> VERDE</button>';
          break;

        case 2:
          return '<button class=\'tab\' "><span>ESCENARIO</span> SOFAR</button>';
          break;

        case 3:
          return '<button class=\'tab\'"><span>TEATRO</span></button>';
          break;

        case 4:
          return '<button class=\'tab\'><span>SUM</span></button>';
          break;

        default:
          return '<button class=\'tab\'><span></span></button>';
          break;
      }
    },
    
  });
});