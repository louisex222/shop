
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
    // 放大鏡
    let bigwrap = document.querySelector('#wrap')
    let img =  bigwrap.querySelector('.bigimg')
    let bigimg = bigwrap.querySelector('.bigimg img')
    let wrap = document.querySelector('#wrap .wrap')
    let mark = wrap.querySelector('.mark')
    let first = wrap.querySelector('.first')
    let float = wrap.querySelector('.float')
    console.log(first.src)
    // mark.onmousemove = function(e){
    //     let left =  e.clientX - bigwrap.offsetLeft -mark.offsetLeft- float.offsetWidth/2
    //     let top =   e.clientY  -bigwrap.offsetTop- mark.offsetTop - float.offsetHeight/2 +document.body.scrollTop
    //     let scrollTop = document.documentElement.scrollTop
    //     if(left < 0){
    //         left= 0
    //     }else if(  left > mark.offsetWidth -float.offsetWidth){
    //         left =mark.offsetWidth -float.offsetWidth
    //     }
    //     if(top < 0){
    //         top = 0
    //     }else if(top > mark.offsetHeight -float.offsetHeight){
    //         top = mark.offsetHeight -float.offsetHeight
    //     }
    //     float.style.display ='block'
    //     float.style.left=`${left}px`
    //     float.style.top =`${top}px`
        
    //     let percentX =  left/(mark.offsetWidth -float.offsetWidth)
    //     let percentY = top /(mark.offsetHeight -float.offsetHeight)
       
    //     img.style.display='block'
    //     bigimg.style.left = -percentX *(bigimg.offsetWidth-img.offsetWidth)+'px'
    //     bigimg.style.top = -percentY*(bigimg.offsetHeight-img.offsetHeight)-scrollTop+'px'
        
    // }
    //     mark.onmouseleave = function(){
    //         float.style.display='none'
    //         img.style.display= 'none'
    //     }
   
    let  imgPoint = bigwrap.querySelectorAll('.box img')
    console.log(imgPoint)
    function changImg(e){
     first.src = this.src
     bigimg.src = this.src
    }
    imgPoint.forEach(img =>img.addEventListener('click',changImg))
   
   

    let shoplist = (function(){
      cart =[]
      function Item(id,name,count,price){
         this.id = id
         this.name= name
         this.price = price
         this.count = count
         
      }
     function save(){
       localStorage.setItem('shopcart',JSON.stringify(cart))
     }
     function load(){
       cart = JSON.parse(localStorage.getItem('shopcart'))
       if ( localStorage.getItem('shopcart') !== null){
          load()
       }
     }
     let  obj = {}
     obj.addcart = function(id,name,count,price){
       for( let i in cart){
          if( cart[i].name===name){
            cart[i].count++
            save()
            return
          }
       }
       let items = new Item(id,name,count,price)
       cart.push(items)
       save()
     }
    
     obj.model = function(){
       return JSON.parse(localStorage.getItem('shopcart'))
     }
   
     obj.del =function(id){
       for(let i in cart){
         if(cart[i].id ==id)
         cart.splice(i,1)
       }
       save()
     }
     return obj
   })()

   let btn = bigwrap.querySelector('a')
   var radio = document.getElementsByName("product")
   function addCart(){

      let id = this.id
      let name 
      let select = bigwrap.querySelector('#select')
      var index= select.selectedIndex
      let count = select.options[index].innerText
      let price = bigwrap.querySelector('p').innerText
      for(var i=0;i< radio.length;i++){
        if(radio[i].checked){
           name = radio[i].value
          }
        }
      shoplist.addcart(id,name,count,price)
      
      
    }
    btn.addEventListener('click',addCart)


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

    
    $('#wrap .bigbox2  h2').textillate({
      
      in:{
        effect: 'fadeIn',
        type: 'word'
      },
      out:{
        effect: 'fadeIn',
        type:'word'
      },
      callback: function(){
        $('#wrap .bigbox2  p').textillate({
          loop: true,
          in:{
            effect: 'fadeIn',
            type: 'word'
          },
          out:{
            effect: 'fadeIn',
            type:'word'
          },
        })
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