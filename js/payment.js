
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
    
    let bar = document.querySelector('.fa-bars')
    let wrap = document.querySelector('.nav .wraps')
    bar.onclick= function(){
      wrap.classList.toggle('display')  
      
    }

   
    
    // tab
    let navs = document.querySelectorAll('.wrap li')
    let div = document.querySelectorAll('.wrap .box');
    
    for(let i =0 ;i<navs.length; i++){
      navs[i].id=i
      navs[i].onclick=function(e){
        
        for(let j=0 ;j<navs.length;j++){
          navs[j].className=''
          div[j].style.display='none'
          
        }
        navs[this.id].className ='active'
        div[this.id].style.display='block'
       
        }
      
    }

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
          if( cart[i]===name){
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
    
     
     return obj
   })()
    // 第三方支付
    TPDirect.setupSDK(11327, 'app_whdEWBH8e8Lzy4N6BysVRRMILYORF6UxXbiOFsICkz0J9j1C0JUlCHv1tVJC','sandbox')
    TPDirect.card.setup('#cardview-container')

    var submitButton = document.querySelector('#submit-button')
    var cardViewContainer = document.querySelector('#cardview-container')
    

    function onClick() {
        TPDirect.card.getPrime(function (result) {
            if (result.status !== 0) {
                console.log('getPrime 錯誤')
                return
            }
            alert('getPrime 成功')
            var prime = result.card.prime
            document.querySelector('#result1').innerHTML = JSON.stringify(result, null, 4)

            
        })
    }
    
    let details = JSON.parse(localStorage.getItem('details')) ||[]
    let detail = document.querySelector('.detail')
    console.log(details)
    function payList(){
      for( let i in details){
         let name = details[i].name
         let mobile = details[i].mobileNumber
         let landMark = details[i].landMark
         let city = details[i].city
         let address = details[i].address
         let  html = ` <form action="">
                        <label for="">Full name:</label>
                        <div type="text" >${name}</div>
                        <label for="">Mobile number:</label>
                        <div type="text" >${mobile}</div>
                        <label for="">Landmark:</label>
                        <div type="text" >${landMark}</div>
                        <label for="">Town/City</label>
                        <div type="text" >${city}</div>
                        <label for="">Address type</label>
                        <div name="address" id="address">${address}</div>
                      </form>`

        detail.innerHTML = html
      }
    }
    payList()

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


// 動畫
  $('.wrap h2').textillate({
    loop:true,
    in:{
      effect:'fadeIn',
      type:'char'
    },
    out:{
      effect:'fadeOut',
      type: 'char',
      reserve: true
    }
  })
  
  $('.wrap button').textillate({
    loop:true,
    in:{
      effect:'fadeIn',
      type:'char'
    },
    out:{
      effect:'fadeOut',
      type: 'char',
      reserve: true
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