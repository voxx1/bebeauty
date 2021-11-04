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
  
  $('.main-logo').css('display', 'none');
  $('.main-logo').fadeIn(1500);

  
  $('.nav-item').css('display', 'none');
  $('.nav-item').fadeIn(3000);
  
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
  




  