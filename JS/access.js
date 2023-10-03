var endow1 = document.querySelector('.endow-1');
var endow2 = document.querySelector('.endow-2');

function transit_Banner(){
endow1.classList.add('transit-1-show');
// Kiểm tra giá trị left trong một khoảng thời gian nhất định
  setInterval(function() {
    var leftValue = parseFloat(getComputedStyle(endow1).left) 
    var leftValue2 = parseFloat(getComputedStyle(endow2).left)
    
    // Nếu giá trị left đạt -100, chuyển nó về 0
    if (leftValue<-1450) {
        // endow1.style.left = '100%';
        endow1.classList.remove('transit-1-show');
        endow1.style.left='1460';
        // endow1.classList.re ove('transit-1-show');    
    }
    if (leftValue<0) {

        endow2.classList.add('transit-1-show');
        // endow2.classList.add('transit-1-show');    
    }
   if(leftValue>1450 ) {
        endow1.classList.add('transit-1-show');  
        // endow1.classList.add('transit-1-show');
    }
    if(leftValue2<-1450) {
          endow2.classList.remove('transit-1-show');  
          // endow2.classList.remove('transit-1-show');
      }
  
  }, 100);
}



const menu_991 = document.querySelector('.icon-screen-991');
const content_menu_991 = document.querySelector('.content-menu-991');
const close_menu_991 = document.querySelector('.close-menu-991');
const expander=document.querySelector('.expander');
function toggleBodyOverflow() {
    const body = document.body;
    if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden';
    }
}

function menu_click() {
    menu_991.addEventListener('click', function() {
        content_menu_991.style.display = 'block';
        expander.style.display = 'block';
        expander.style. background='#000';
        expander.style.opacity='0.5';
        content_menu_991.classList.add('menu-show');
        toggleBodyOverflow();
    });

    close_menu_991.addEventListener('click', function() {
        content_menu_991.classList.remove('menu-show');
        content_menu_991.classList.add('menu-hide');
        expander.style.opacity='0';
        content_menu_991.addEventListener('animationend', function() {
            content_menu_991.style.display = 'none';
            expander.style.display = 'none';
            content_menu_991.classList.remove('menu-hide');
            toggleBodyOverflow();
        }, {once: true});
    });
    expander.addEventListener('click', function() {
      content_menu_991.classList.remove('menu-show');
      content_menu_991.classList.add('menu-hide');
      expander.style.opacity='0';
      content_menu_991.addEventListener('animationend', function() {
          content_menu_991.style.display = 'none';
          expander.style.display = 'none';
          content_menu_991.classList.remove('menu-hide');
          toggleBodyOverflow();
      }, {once: true});
  });
}

menu_click();


//header search
let header_search_callBack =false;
const header_search_991 = document.querySelector('.item-header2');
const search_bar_991 = document.querySelector('.search-bar-991');
const close_search = document.querySelector('.close-search');
let header_search_991_callback;
function header_search(){
if(window.innerWidth <= 991){
  header_search_991.addEventListener('click',function() {
    search_bar_991.style.display = 'block';
  });
  close_search.addEventListener('click', function() {
    search_bar_991.style.display = 'none';
  });
}
document.addEventListener('DOMContentLoaded', function() {
  function header_search() {
    header_search_991_callback = function() {
      search_bar_991.style.display = 'block';
    };
    
    close_search.addEventListener('click', function() {
      search_bar_991.style.display = 'none';
    });
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 991) {
      if(!header_search_callBack){
      header_search();
      header_search_callBack =true;
     }
    header_search_991.addEventListener('click',header_search_991_callback);
    }
    else{
      header_search_991.removeEventListener('click',header_search_991_callback);
      header_search_callback=false;
      search_bar_991.style.display = 'none';
    }
  });
});
}

header_search()

//header search

// header-arrow-down
const header_arrow_down = document.querySelector('.arrow-down');
const header_list_lv2_991_1 = document.querySelector('.header-list-lv2-991-1');
const header_arrow_down_2 = document.querySelector('.arrow-down2');
const header_list_lv2_991_2 = document.querySelector('.header-list-lv2-991-2');
let arrowCalled = false;
let header_arrow_down_callback; // create temporary variables to store the click event callbacks for header_arrow_down
let header_arrow_down_2_callback; // create temporary variables to store the click event callbacks for header_arrow_down_2

function arrow() {
  header_arrow_down_callback = function() { // store the click event callback for header_arrow_down
    header_list_lv2_991_1.classList.add('header-list-lv2-991-show');
    header_list_lv2_991_1.classList.remove('header-list-lv2-991-hide');
    if (header_list_lv2_991_1.style.display === 'block') {
      header_list_lv2_991_1.classList.add('header-list-lv2-991-hide');
      header_list_lv2_991_1.classList.remove('header-list-lv2-991-show');
      header_list_lv2_991_1.addEventListener('animationend', function() {
        header_list_lv2_991_1.style.display = 'none';
      });
    } else {
      header_list_lv2_991_1.style.display = 'block';
    }
    if (header_list_lv2_991_2.style.display === 'block') {
      header_list_lv2_991_2.classList.remove('header-list-lv2-991-show');
      header_list_lv2_991_2.style.display = 'none';
    }
  }

  header_arrow_down_2_callback = function() { // store the click event callback for header_arrow_down_2
    header_list_lv2_991_2.classList.add('header-list-lv2-991-show');
    header_list_lv2_991_2.classList.remove('header-list-lv2-991-hide');
    if (header_list_lv2_991_1.style.display === 'block') {
      header_list_lv2_991_1.classList.remove('header-list-lv2-991-show');
      header_list_lv2_991_1.style.display = 'none';
    }
    if (header_list_lv2_991_2.style.display === 'block') {
      header_list_lv2_991_2.classList.add('header-list-lv2-991-hide');
      header_list_lv2_991_2.classList.remove('header-list-lv2-991-show');
      header_list_lv2_991_2.addEventListener('animationend', function() {
        header_list_lv2_991_2.style.display = 'none';
      });
    } else {
      header_list_lv2_991_2.style.display = 'block';
    }
  }

  header_arrow_down.addEventListener('click', header_arrow_down_callback); // assign the callback variable to the header_arrow_down click event
  header_arrow_down_2.addEventListener('click', header_arrow_down_2_callback); // assign the callback variable to the header_arrow_down_2 click event
}
if (window.innerWidth <= 991) {
  
    arrow();
}
window.addEventListener('resize', function() {
  if (window.innerWidth <= 991) {
    if (!arrowCalled) {
      arrow();
      arrowCalled = true;
    }
    // add the click event callback for header_arrow_down and header_arrow_down_2
    header_arrow_down.addEventListener('click', header_arrow_down_callback);
    header_arrow_down_2.addEventListener('click', header_arrow_down_2_callback);
  }
  if (window.innerWidth > 991) {
    // remove the click event callback for header_arrow_down and header_arrow_down_2
    header_arrow_down.removeEventListener('click', header_arrow_down_callback);
    header_arrow_down_2.removeEventListener('click', header_arrow_down_2_callback);
    // reset the display style of submenus
    header_list_lv2_991_2.style.display = 'none';
    header_list_lv2_991_1.style.display = 'none';
    // reset the arrowCalled flag to allow arrow() to be called later
    arrowCalled = false;
  }
});

// header-arrow-down

//messenger
const button_messenger = document.querySelector('.messenger');
const button_messenger_display = document.querySelector('.fb_customer_chat_bounce_in_v2');
button_messenger.addEventListener('click',function(){
  if( button_messenger_display.style.display==='none')
    button_messenger_display.style.display='block';
  else
    button_messenger_display.style.display='none';  
})
const button_close_messenger = document.querySelector('._9dxh2');
button_close_messenger.addEventListener('click',function(){
  button_messenger_display.style.display='none';
})
//messenger

console.log(window.pageYOffset);
// // Back_to-top
function back_to_top(){
  window.addEventListener('scroll',function(){
    var backtotopBtn= document.querySelector('.scroll-back-to-top');
    backtotopBtn.classList.add('back-to-top-show');
    backtotopBtn.classList.remove('back-to-top-hide');
     if(window.scrollY >300){
      backtotopBtn.style.display='block';
     }
     else{
      backtotopBtn.classList.remove('back-to-top-show');
      backtotopBtn.classList.add('back-to-top-hide');
      backtotopBtn.addEventListener('animationend', function () {
        backtotopBtn.style.display = 'none';
      }, { once: true });
     }
  });
  const btn = document.querySelector('#back-to-top-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let scrollPosition = window.pageYOffset;
    const scrollDuration = 1200;
    const scrollStep = -scrollPosition  / (scrollDuration / 35);
    console.log(scrollStep);
  
    const scrollInterval = setInterval(() => {
      if (scrollPosition > -10) {
        window.scrollTo(0, scrollPosition);
        scrollPosition+=scrollStep;
        console.log(scrollPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 35);
  });
}
  
  back_to_top();
  // Back_to-top
 