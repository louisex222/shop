let map
map = L.map('map').setView([37.75, -122.43], 8);

map.locate({ maxZoom: 16 });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '<a href="https://www.openstreetmap.org/">OSM</a> | Made by Kevin Hsu',
  maxZoom: 16,
}).addTo(map);


   
    // 導航欄
    let bigbox1 = document.querySelector('.bigbox1')
    let bigbox2= document.querySelector('.bigbox2')
    let feature = document.querySelector('.feature >a')
    let shop = document.querySelector('.shop')

    feature.onmouseover=function(){
      bigbox1.style.display='flex'
    }
    bigbox1.onmouseleave =function(){
      bigbox1.style.display='none'
    }
    // shop.onmouseover=function(){
    //   bigbox2.style.display='flex'
    // }
    // bigbox2.onmouseleave =function(){
    //   bigbox2.style.display='none'
    // }
    
    // 搜尋
    let searchclick = document.querySelector('.nav .fa-search')
    let search = document.querySelector('.search')
    let closebtn= document.querySelector('.fa-times')


    // searchclick.onclick=function(){
    //   search.style.display='flex'
    // }
    closebtn.onclick=function(){
      search.style.display='none'
    }
    // 登入
    let user = document.querySelector('.fa-user')
    let login= document.querySelector('.login')
    let loginclose = login.querySelector('.fa-times')
    
    user.onclick=function(){
      login.style.right="0"
      login.style.display ='flex'
    }
    loginclose.onclick =function(){
      login.style.right='-375px'
    }

    let bar = document.querySelector('.fa-bars')
    let ul = document.querySelector('.nav .wrap')
    bar.onclick= function(){
      ul.classList.toggle('display')  
      
    }
    // // 購物車
    // let mycart =document.querySelector('#header .fa-cart-arrow-down')
    // let cart =document.querySelector('.cart')
    // let cartclose =cart.querySelector('.fa-times')
    // mycart.onclick=function(){
    //   cart.style.display='flex'
    // }
    // cartclose.onclick=function(){
    //   cart.style.display='none'
    // }
    let local = JSON.parse(localStorage.getItem('shopcart')) || []
    let mycart = document.querySelector('.icon a')
    let item =0
    for(i in local){
      item += local[i].count
      
      console.log((item))
    }
    mycart.setAttribute('data-text',item)
   //  至頂

   let toTop = document.querySelector('#top')
   let timers
   let begin = 0
   let end =0 
   function scroll(){
     let scrolltop = document.body.scrollTop
     scrolltop > 500 ? toTop.style.display = 'block':toTop.style.display='none'
     begin = scrolltop
     toTop.onclick = function(){
       
       clearInterval(timers)
       
       timers = setInterval(function(){
         begin = begin + (end-begin)/50
         console.log(begin,end,scrolltop)
         document.body.scrollTop = begin
       if(parseInt(begin)==end){
           clearInterval(timers)
       }    
       },10)
     }
     let nav= document.querySelector('.nav')
    if(scrolltop >=100){
      nav.classList.add('fix')
    }else  {
      nav.classList.remove('fix')
    }
     console.log(scrolltop)
   }
   window.addEventListener('scroll',scroll,true)
    
   $('#section .text p').textillate({
     
     loop:true,
     in:{ 
       effect: 'fadeIn',
       type:'char'
     },
     out:{
       effect:'fadeIn',
       type: 'char'
     }
   })

   $('#section .box button').textillate({
      loop:true,
      in:{ 
        effect: 'fadeIn',
        type:'char'
      },
      out:{
        effect:'fadeIn',
        type: 'char'
      }
   })

   
  // fb

  window.fbAsyncInit = function() {
    FB.init({
    appId: '2559611937684469', // 填入 FB APP ID
    cookie: true,
    xfbml: true,
    version: 'v7.0'
    });
    FB.AppEvents.logPageView()
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    });
};

// 處理各種登入身份
function statusChangeCallback(response) {
console.log(response);
var target = document.getElementById("FBstatus"),
html = "";

// 登入 FB 且已加入會員
if (response.status === 'connected') {


FB.api('/me?fields=id,name,email', function(response) {
console.log(response);
html += "會員暱稱：" + response.name

target.innerHTML = html;
});
}

}


// 載入 FB SDK
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s);
js.id = id;
js.src = "https://connect.facebook.net/zh_TW/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));