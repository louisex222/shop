
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


    
    closebtn.onclick=function(){
      search.style.display='none'
    }
    
    // nav
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
   
     // 時間的倒數 至四月一日
    //  let timer = null  
    //  timer = setInterval(function(){
    //    let then = new Date('June 24, 2020 00:00:00').getTime()
    //    let now = new Date().getTime()
    //    let count = Math.round((then-now)/1000)
    //    let seconds = Math.floor(count%60)
    //    let minutes = Math.floor((count%3600)/60)
    //    let hours = Math.floor((count/3600)%24)
    //    let days = Math.floor(count/3600/24)
    //    document.querySelector('.day').innerText = `${days}`
    //    document.querySelector('.hour').innerText = `${hours}`
    //    document.querySelector('.min').innerText = `${minutes}`
    //    document.querySelector('.sec').innerText = `${seconds}`
    //  },1000)
    let local = JSON.parse(localStorage.getItem('shopcart'))
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
      scrolltop > 1500 ? toTop.style.display = 'block':toTop.style.display='none'
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
      let currentY = document.body.scrollTop
      if(currentY >=100){
        nav.classList.add('fix')
      }else  {
        nav.classList.remove('fix')
      }
      console.log(scrolltop)
    }
    window.addEventListener('scroll',scroll,true)

   
    // 動畫
    $('#bigbox .box h2').textillate({
      
      in:{effect:'fadeIn',
        shuffle: true},
        type: 'word',
        
        
    })
    $('#bigbox .box p').textillate({
      in:{effect:'fadeIn'},
      sync:true,
      type: 'word',
      callback:function(){
        $('#bigbox button').textillate({
          in:{effect:'fadeIn'},
          type:'char',
          loop:true,
          out:{
            effect:'fadeIn',
            type:'char'
          }
        })
      }
    })

    $('#content button').textillate({
      in:{effect:'fadeIn'},
      loop:true,
      type:'char',
      out:{
        effect:'fadeIn',
        type:'char'
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
    
function checkLoginState() {
  FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  });
  }