const button_right = document.getElementById('swiper-button-next-1');
const div = document.getElementById('swiper-wrapper1');
const button_left = document.getElementById('swiper-button-1');
var dem=0;
const button_right_2 = document.getElementById('swiper-button-next-2');
const div_2 = document.getElementById('swiper-wrapper2');
const button_left_2 = document.getElementById('swiper-button-2');
var dem1=0;
button_right.addEventListener('click', function() {
  if(window.innerWidth <991&&dem==9){
    dem++;
  }
    if(dem<9){
    dem++;}
    if(dem>0){button_left.style.opacity="1";}
    if(dem<=9){
        if(window.innerWidth >991){
          var calcValue = -33.2 * dem +  '%';
          div.style.transform = `translate3d(${calcValue}, 0, 0)`;
          div.style.transitionDuration = "0.3s";
          if(dem==9){button_right.style.opacity="0.7";}
        }
        else{
          var calcValue = -42.5 * dem +  '%';
          div.style.transform = `translate3d(${calcValue}, 0, 0)`;
          div.style.transitionDuration = "0.3s";
        }
    }
    if(window.innerWidth <991&&dem==10){
      var calcValue = -40.8 * dem +  '%';
          div.style.transform = `translate3d(${calcValue}, 0, 0)`;
          div.style.transitionDuration = "0.3s";
          if(dem==10){button_right.style.opacity="0.7";}
    }
});

button_left.addEventListener('click', function() {
    if(dem>0){
    dem--;}
    if(dem<9){button_right.style.opacity="1";}
    if(dem==9&&window.innerWidth <991){button_right.style.opacity="1";}
    if(dem>=0){
      if(window.innerWidth >991){
        var calcValue = -33.2 * dem +  '%';
        div.style.transform = `translate3d(${calcValue}, 0, 0)`;
        div.style.transitionDuration = "0.3s";
      }
      else{
        var calcValue = -42.5 * dem +  '%';
        div.style.transform = `translate3d(${calcValue}, 0, 0)`;
        div.style.transitionDuration = "0.3s";
      }}
    if(dem==0){ button_left.style.opacity="0.7";}
  });

button_right_2.addEventListener('click', function() {
  if(window.innerWidth>991){
    if(dem1<3){
    dem1++;}
    if(dem1>0){button_left_2.style.opacity="1";}
    if(dem1<=3){
        var calcValue1 = -16.57 * dem1 +  '%';
        div_2.style.transform = `translate3d(${calcValue1}, 0, 0)`;
        div_2.style.transitionDuration = "0.3s";
    }
    if(dem1==3){button_right_2.style.opacity="0.7";}
  }
    else{
      if(dem1<10){
        dem1++;}
        if(dem1>0){button_left_2.style.opacity="1";}
        if(dem1<=10){
          
              var calcValue = -42.5 * dem1 +  '%';
              div_2.style.transform = `translate3d(${calcValue}, 0, 0)`;
              div_2.style.transitionDuration = "0.3s";
        }
        if(dem1==10){
          var calcValue = -40.8 * dem1 +  '%';
              div_2.style.transform = `translate3d(${calcValue}, 0, 0)`;
              div_2.style.transitionDuration = "0.3s";
              if(dem1==10){button_right_2.style.opacity="0.7";}
        }
    }
});

button_left_2.addEventListener('click', function() {
  if(window.innerWidth>991){
    if(dem1>0){
    dem1--;}
    if(dem1<3){button_right_2.style.opacity="1";}
    if(dem1>=0){
    var calcValue1 = -16.57 * dem1 + '%';
    div_2.style.transform = `translate3d(${calcValue1}, 0, 0)`;
    div_2.style.transitionDuration = "0.3s";}
    if(dem1==0){ button_left_2.style.opacity="0.7";}
  }
    else{
      if(dem1>0){
        dem1--;}
        if(dem1<=9){button_right_2.style.opacity="1";}
        if(dem1>=0){
            var calcValue = -42.5 * dem1 +  '%';
            div_2.style.transform = `translate3d(${calcValue}, 0, 0)`;
            div_2.style.transitionDuration = "0.3s";
          }
        if(dem1==0){ button_left_2.style.opacity="0.7";}
    }
  });

  // hiệu ứng chuyển trên thanh xem quần áo

  // thay đổi giá sale cho sản phẩm
function sale(){
     // Lặp qua từng phần tử có class=price-sale
  const priceSaleElements = document.querySelectorAll(".price-sale");
  const sale = document.querySelectorAll(".sale-lable");
  const price = document.querySelectorAll(".price");
  let result ;
  for(let i=0; i<priceSaleElements.length; i++) {
    const priceSaleElement = priceSaleElements[i];
    const sales =parseFloat(sale[i].innerHTML);
    const prices =parseFloat(price[i].innerHTML);
    result =prices- sales *prices/100;
    // Gán giá trị kết quả tính toán vào phần tử hiện tại
    if(sales != 0){
      priceSaleElement.innerHTML = result;
    }
  }

}

sale();

  // thay đổi giá sale cho sản phẩm
const button_heart = document.querySelector('.draw-popup');
const button_heart_display = document.querySelector('.hrv-loyaltu-wepfloating');
button_heart.addEventListener('click',function(){
  if( button_heart_display.style.display==='none')
    button_heart_display.style.display='block';
  else
    button_heart_display.style.display='none';  
})
const button_close = document.querySelector('.darw-close');
button_close.addEventListener('click',function(){
  button_heart_display.style.display='none';
})

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


{/* <select-size></select-size> */}
const button_select_size = document.querySelectorAll('.select');

function select_size(){
    for(let i = 0; i < button_select_size.length; i++){
        button_select_size[i].addEventListener('click', function(){
            for(let j = 0; j < button_select_size.length; j++){
                if(i === j){
                    button_select_size[j].style.borderColor = '#000';
                } else {
                    button_select_size[j].style.borderColor = '#ffffff';
                }
            }
        })
    }
}

select_size();

// xem nhanh nut xem anh
const frame_quickview = document.querySelector('.usecase-quickview');
const quickview = document.querySelector('.quickview');
const frame_img = document.querySelector('.swiper-slide');
let isQuickviewClicked = false;
var clickCount = 0;
quickview.addEventListener('click', function() {
  clickCount++;
  frame_quickview.style.display = 'block';
  if (clickCount > 1) {
    frame_quickview.style.display = 'none';
    setTimeout(() => {
      frame_quickview.style.display = 'block';
    }, 200);
  }
  isQuickviewClicked = true;
  frame_img.addEventListener('mouseleave', onMouseLeave);
});


function onMouseLeave() {
  if (!isQuickviewClicked) {
    frame_quickview.style.display = 'none';
    img_last.style.transform = `translate3d(-100%, 0, 0)`;
    img_first.style.transform = `translate3d(0%, 0, 0)`;
    img_product.style.transform = `translate3d(100%, 0, 0)`;
    dem_img=-1;
    dem_img1=9;
    clickCount = 0;
    frame_img.removeEventListener('mouseleave', onMouseLeave);
  }
}

frame_img.addEventListener('mouseover', function() {
  if (isQuickviewClicked) {
    frame_quickview.style.display = 'block';
  }
  isQuickviewClicked = false;
});



const button_right_img = document.querySelector('.right');
const img_product = document.querySelector('.container-img');
const img=img_product.querySelectorAll('img');
const img_first=document.querySelector('.img-first')
const img_last=document.querySelector('.img-last')
const button_left_img = document.querySelector('.left');
var dem_img=-1;
var dem_img1=9;
button_right_img.addEventListener('click', function() {
  if(dem_img1==9){
        dem_img++;}
        if(dem_img1==8&&dem_img==-1){
          img_last.style.transform = `translate3d(-100%, 0, 0)`;
          img_last.style.transitionDuration = "0.3s";
          img_first.style.transform = `translate3d(0%, 0, 0)`;
          img_first.style.transitionDuration = "0.3s";
          img_product.style.transform = `translate3d(100%, 0, 0)`;
          img_product.style.transitionDuration = "0s";
          dem_img1=9;
        }
        if(dem_img==0&&dem_img1==9){
          img_first.style.transform = `translate3d(-100%, 0, 0)`;
          img_first.style.transitionDuration = "0.3s";
          img_product.style.transform = `translate3d(0%, 0, 0)`;
          img_product.style.transitionDuration = "0.3s";
          img_product.style.zIndex='0'
        }
         if(dem_img1==9&&dem_img>0){
        var calcValue1 = -100 * dem_img +  '%';
        img_product.style.zIndex='999'
        img_product.style.transform = `translate3d(${calcValue1}, 0, 0)`;
        img_product.style.transitionDuration = "0.3s";
        img_first.style.transform = `translate3d(100%, 0, 0)`;
        img_first.style.transitionDuration = "0s"; 
        img_last.style.transform = `translate3d(100%, 0, 0)`;
        img_last.style.transitionDuration = "0s"; 
        img_product.addEventListener("transitionend", function() {
          img_product.style.transitionDuration = "0s"; // Đặt lại transition-duration = 0s khi transition kết thúc
        });}
        if(dem_img1!=9&&dem_img1!=8){
          dem_img1++;
        var calcValue1 = -100 * dem_img1 +  '%';
        img_product.style.zIndex='999'
        img_product.style.transform = `translate3d(${calcValue1}, 0, 0)`;
        img_product.style.transitionDuration = "0.3s";
        if(dem_img1==8){
          img_last.style.transform = `translate3d(0, 0, 0)`;
          img_last.style.transitionDuration = "0.3s";
          img_first.style.transform = `translate3d(100%, 0, 0)`;
          img_first.style.transitionDuration = "0s";
        }
        }
        if(dem_img1==9&&dem_img==8){
          img_last.style.transform = `translate3d(0%, 0, 0)`;
          img_last.style.transitionDuration = "0.3s"; 
        }
        if(dem_img1==9&&dem_img>8){
          img_last.style.transform = `translate3d(-100%, 0, 0)`;
          img_last.style.transitionDuration = "0.3s"; 
          img_first.style.transform = `translate3d(0, 0, 0)`;
          img_first.style.transitionDuration = "0.3s";
          img_product.style.transform = `translate3d(100%, 0, 0)`;
          img_product.style.transitionDuration = "0s";
          dem_img=-1;
      }
});
button_left_img.addEventListener('click', function() {
    if(dem_img==-1){
    dem_img1--;}
    if(dem_img1==8&&dem_img==-1){
    img_first.style.transform = `translate3d(100%, 0, 0)`;
    img_first.style.transitionDuration = "0.3s";
    img_last.style.transform = `translate3d(0%, 0, 0)`;
    img_last.style.transitionDuration = "0.3s";
    img_product.style.transform = `translate3d(-800%, 0, 0)`;
    img_product.style.transitionDuration = "0s";
    }
    if(dem_img1<8&&dem_img==-1){
      img_last.style.transform = `translate3d(100%, 0, 0)`;
      img_last.style.transitionDuration = "0.3s";
      var calcValue1 = -100 * dem_img1 + '%';
      img_product.style.transform = `translate3d(${calcValue1}, 0, 0)`;
      img_product.style.transitionDuration = "0.3s";
      img_first.style.transform = `translate3d(-100%, 0, 0)`;
      img_first.style.transitionDuration = "0s"; 
      img_product.addEventListener("transitionend", function() {
        img_product.style.transitionDuration = "0s"; // Đặt lại transition-duration = 0s khi transition kết thúc
      });}
      if(dem_img!=-1){
      dem_img--;
      if(dem==0){
        img_first.style.transform = `translate3d(-100%, 0, 0)`;
        img_first.style.transitionDuration = "0s";
        img_last.style.transform = `translate3d(-100%, 0, 0)`;
        img_last.style.transitionDuration = "0s";
      }
      if(dem_img==-1){
        img_product.style.transform = `translate3d(100%, 0, 0)`;
        img_product.style.transitionDuration = "0.3s";
        img_first.style.transform = `translate3d(0, 0, 0)`;
        img_first.style.transitionDuration = "0.3s";
      }
      else{
      var calcValue1 = -100 * dem_img +  '%';
      img_product.style.zIndex='999'
      img_product.style.transform = `translate3d(${calcValue1}, 0, 0)`;
      img_product.style.transitionDuration = "0.3s";
      if(dem_img==-1){
        img_last.style.transform = `translate3d(0, 0, 0)`;
        img_last.style.transitionDuration = "0.3s";
      }
      }
    }
      if(dem_img1==-1&&dem_img==-1){
        img_first.style.transform = `translate3d(0, 0, 0)`;
        img_first.style.transitionDuration = "0.3s"; 
        img_last.style.transform = `translate3d(-100%, 0, 0)`;
        img_last.style.transitionDuration = "0s";
        dem_img1=9;
      }
    
});
// xem nhanh nut xem anh

// các hiệu ứng của screen 991px

// header-menu
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


// header-menu
//header search
let header_search_callBack =false;
const header_search_991 = document.querySelector('.search-icon');
const search_bar_991 = document.querySelector('.search-bar-991');
const close_search = document.querySelector('.close-search');
let header_search_991_callback;
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
      }, { once: true });
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
      }, { once: true });
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
// Back_to-top
function back_to_top(){
window.addEventListener('scroll',function(){
  var backtotopBtn= document.querySelector('.scroll-back-to-top');
  backtotopBtn.classList.add('back-to-top-show');
  backtotopBtn.classList.remove('back-to-top-hide');
   if(window.pageYOffset >300){
    backtotopBtn.style.display='block';
   }
   else{
    backtotopBtn.classList.remove('back-to-top-show');
    backtotopBtn.classList.add('back-to-top-hide');
    backtotopBtn.addEventListener('animationend', function () {
      backtotopBtn.style.display = 'none';
    }, { once: true });
   }
})
const btn = document.querySelector('#back-to-top-btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const scrollDuration = 800;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});
}


back_to_top();
// Back_to-top
