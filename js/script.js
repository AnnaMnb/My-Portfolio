const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerBtn= document.querySelector(".hamburgerBtn");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburgerBtn.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)








$(function() {
  $('.skills_marquee').marquee({
    duration: 20000,
    startVisible: true,
    duplicated: true
  });
});

// слайдер 
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    type: "progressbar",
  },
  mousewhell: true,
  keyboard: true,
  speed: 1500,
  loop: true,
  
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 1,
    },
    480: {
      spaceBetween: 18,
      slidesPerView: 1.5,
    },
    660: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    710: {
      spaceBetween: 22,
      slidesPerView: 2,
    },
    980: {
      spaceBetween: 24,
      slidesPerView: 2.5,
    },
  }
});


const printFunc = () => {
    const elems = document.querySelectorAll('.print')

    const print = (elem) => {
        const delay = elem.dataset.delay || 2000
        const startDelay = elem.dataset.startDelay || 0
        const removeDelay = elem.dataset.removeDelay || 1000
        const addSpeed = elem.dataset.addSpeed || 50
        const removeSpeed = elem.dataset.removeSpeed || 20
        const text = elem.textContent.replace(/\s+/g, ' ').trim()

        let count = 0
        let newText = ''

        elem.textContent = ''

        const addPrint = () => {
            let interval

            interval = setInterval(() => {
                newText += text[count]
                elem.textContent = newText
                count++

                if (count === text.length) {
                    clearInterval(interval)
                    setTimeout(removePrint, removeDelay)
                }
            }, addSpeed)
        }

        const removePrint = () => {
            let interval

            interval = setInterval(() => {
                if (newText.length) {
                    newText = newText.slice(0, -1)
                    elem.textContent = newText
                    count--
                }else {
                    clearInterval(interval)

                    setTimeout(addPrint, delay)
                }
            }, removeSpeed)
        }

        setTimeout(addPrint, startDelay)
    }

    elems.forEach((elem) => {
        print(elem);
    })
}

printFunc()




//скролл актуальный
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



var words = ['ВЕБ-РАЗРАБОТЧИК', 'UX/UI ДИЗАЙНЕР'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 13,
    speed = 150;
var wordflick = function () {
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






$(document).ready(function(){
  var w_height= $(this).height();
  var slide_width = $('.fixed_bottom').width();
  var slide_left = slide_width/w_height;

  $(window).scroll(function(e){
    var f_left = slide_left*$(this).scrollTop()*-1;

    $('.fixed_bottom').animate({
        left: f_left
    }, 90);
  });
});





  $(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });



