
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
    
    // nav
    let bar = document.querySelector('.fa-bars')
    let ul = document.querySelector('.nav .wrap')
    bar.onclick= function(){
      ul.classList.toggle('display')  
      
    }
   
    // 放大鏡
    let bigwrap = document.querySelector('#wrap')
    let bigimg = bigwrap.querySelector('.bigimg img')
    
    
    let first = wrap.querySelector('.first')
   
  
   
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
      scrolltop > 300 ? toTop.style.display = 'block':toTop.style.display='none'
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

function checkLoginState() {
  FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  });
  }