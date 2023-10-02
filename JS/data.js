//header-search-hover
let search1_callback=false;
let search_callback; 
let search_callback2;
let search_icon_callback; 
let search_icon_callback2; 
const search_icon =document.querySelector('.search-icon');
const search=document.querySelector('.search');
function search1(){
  search_icon_callback= function () {
      search.style.display='block';
  } 
  search_icon_callback2 =function(){
    search.style.display='none';
} 
  search_callback=function(){
    search.style.display='block';
}
  search_callback2 =function(){
    search.style.display='none';
}  
}
if(window.innerWidth>991){
search1();
search_icon.addEventListener("mouseover",search_icon_callback);
search_icon.addEventListener("mouseout",search_icon_callback2);
search.addEventListener("mouseover",search_callback);
search.addEventListener("mouseout",search_callback2);
}
window.addEventListener('resize', function() {
  if(window.innerWidth>991){
    if(!search1_callback){
    search1();
    search1_callback=true;
  }
    search_icon.addEventListener("mouseover",search_icon_callback);
    search_icon.addEventListener("mouseout",search_icon_callback2);
    search.addEventListener("mouseover",search_callback);
    search.addEventListener("mouseout",search_callback2);
  }
      if(window.innerWidth<991){
        search_icon.removeEventListener("mouseover",search_icon_callback);
        search_icon.removeEventListener("mouseout",search_icon_callback2);
        search.removeEventListener("mouseover",search_callback);
        search.removeEventListener("mouseout",search_callback2);
        search1_callback=false;
      }
});
//header-search-hover
console.log(1);