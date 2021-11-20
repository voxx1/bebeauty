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
  
// stagger items
gsap.fromTo('.accordion-item', {autoAlpha: 0, scale: 0.9}, {duration: 1, autoAlpha: 1, scale: 1, ease: Power1.easeInOut, stagger: .05});

// function open and close accordion itens
const accordionItems = document.querySelectorAll(".accordion-item")
accordionItems.forEach(itemAccordion => {
    // accordion content
    const accordionTitle   = itemAccordion.querySelector(".title")
    const accordionContent = itemAccordion.querySelector(".content")
    const accordionArrow   = itemAccordion.querySelector(".arrow")

    // on click title
    accordionTitle.addEventListener("click", event => {
        // prevent click
        event.preventDefault()

        // check if accordion item is open
        if (!itemAccordion.classList.contains("-active")) {
            // close others accordions
            const accordionItemsActive = document.querySelectorAll(".accordion-item.-active")
            accordionItemsActive.forEach(itemAccordionActive => {
                const accordionContent = itemAccordionActive.querySelector(".content")
                const accordionArrow   = itemAccordionActive.querySelector(".arrow")

                // remove active class accordion item
                itemAccordionActive.classList.remove("-active")

                // close content
                gsap.to(accordionContent, {
                    duration : .5,
                    height   : 0,
                    display  : "none",
                    autoAlpha: 0,
                    ease     : "expo.inOut"
                })

                // rotate arrow
                gsap.to(accordionArrow, {
                    duration: .5, autoAlpha: 0, y: -10, ease: "back.in", onComplete: function () {
                        gsap.set(accordionArrow, {rotation: 0})
                    }
                })
                gsap.to(accordionArrow, {duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5})
            })

            // add active class accordion item
            itemAccordion.classList.add("-active")

            // open content 
            gsap.set(accordionContent, {height: "auto", display: "block", autoAlpha: 1})
            gsap.from(accordionContent, {duration: .5, height: 0, display: "none", autoAlpha: 0, ease: "expo.inOut"})

            // rotate arrow
            gsap.to(accordionArrow, {
                duration: .5, autoAlpha: 0, y: 10, ease: "back.in", onComplete: function () {
                    gsap.set(accordionArrow, {rotation: 180})
                }
            })
            gsap.to(accordionArrow, {duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5})

        } else {
            // remove active class accordion item
            itemAccordion.classList.remove("-active")

            // close content
            gsap.to(accordionContent, {duration: .5, height: 0, display: "none", autoAlpha: 0, ease: "expo.inOut"})

            // rotate arrow
            gsap.to(accordionArrow, {
                duration: .5, autoAlpha: 0, y: -10, ease: "back.in", onComplete: function () {
                    gsap.set(accordionArrow, {rotation: 0})
                }
            })
            gsap.to(accordionArrow, {duration: .5, autoAlpha: 1, y: 0, ease: "back.out", delay: .5})
        }
    })
})

  let words = ['Twoje centrum urody', 'Twoje miejsce odpoczynku', 'Twój własny czas', 'Twoje piękno', 'Twój relaks'],
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


  

  