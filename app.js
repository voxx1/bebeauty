$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadedown').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
  });
  
  
  $('.carousel').css('display', 'none');
  $('.carousel').fadeIn(4500);

  $('.table-title').css('display', 'none');
  $('.table-title').fadeIn(3000);
  
  $('.table1').css('display', 'none');
  $('.table1').fadeIn(3100);
  
  $('.table2').css('display', 'none');
  $('.table2').fadeIn(3200);
  
  $('.table3').css('display', 'none');
  $('.table3').fadeIn(3300);
  
  $('.table4').css('display', 'none');
  $('.table4').fadeIn(3400);
  
  $('.table5').css('display', 'none');
  $('.table5').fadeIn(3500);
  
  $('.table6').css('display', 'none');
  $('.table6').fadeIn(3600);
  
  $('.table7').css('display', 'none');
  $('.table7').fadeIn(3700);
  
  let words = ['Twoje centrum urody', 'Twoje miejsce odpoczynku', 'Twój własny czas', 'Jakikolwiek inny tekst :)'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 50;
let wordflick = function () {
setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  }
  else {
    if (offset == 0) {
      forwards = true;
      i++;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    }
    else {
      offset--;
    }
  }
  $('.word').text(part);
},speed);
};

$(document).ready(function () {
wordflick();
});

AOS.init();


  

  