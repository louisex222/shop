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


    searchclick.onclick=function(){
      search.style.display='flex'
    }
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
     console.log(scrolltop)
   }
   window.addEventListener('scroll',scroll,true)
    
   