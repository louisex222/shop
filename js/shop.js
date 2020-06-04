

    // 導航欄
    let bigbox1 = document.querySelector('.bigbox1')
    let bigbox2= document.querySelector('.bigbox2')
    let feature = document.querySelector('.feature >a')
    let shop = document.querySelector('.shop >a')

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
  
   
    
   // 商品增加至購物車
   let box = document.querySelectorAll('#content .box')
   let cartPlus = document.querySelectorAll('.fa-cart-plus')
  //  let carts = document.querySelector('.cart ul')
  //  let li = carts.childNodes[1]
   
   
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
 
   function cartLocal(){

     for (let i=0 ;i<box.length;i++){
         cartPlus[i].onclick=function(){
         let count = 1
         let id = [i]
         let name = box[i].querySelector('h4').innerText
         let price = box[i].querySelector('p').innerText
         shoplist.addcart(id,name,count,price)
         
          
          let mycart = document.querySelector('.icon a')
          let local = shoplist.model()
          function myCart(){
            let item =0
            for(i in local){
              item += local[i].count
              
              console.log((item))
            }
            mycart.setAttribute('data-text',item)
        }
        myCart()
         }
  
  
     }   
   }
     
     cartLocal()

  let local = shoplist.model()
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
      scrolltop > 1000 ? toTop.style.display = 'block':toTop.style.display='none'
      begin = scrolltop
      toTop.onclick = function(){
        
        clearInterval(timers)
        
        timers = setInterval(function(){
          begin = begin + (end-begin)/50
          
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
    }
    window.addEventListener('scroll',scroll,true)

    let datas =[{product:'Farenheit',price:'575.00',img:'images/s1.jpg'},
    {product:'Opium',price:'325.00',img:'images/s2.jpg'},
    {product:'Kenneth Cole',price:'575.00',img:'images/s3.jpg'},
    {product:'Farenheit Oval',price:'325.00',img:'images/s4.jpg'},
    {product:'Aislin Wayfarer',price:'775.00',img:'images/s5.jpg'},
    {product:'Azmani Round',price:'725.00',img:'images/s6.jpg'},
    {product:'Farenheit Wayfarer',price:'475.00',img:'images/s7.jpg'},
    {product:'Fossil Wayfarer',price:'825.00',img:'images/s8.jpg'}]
    let input = document.querySelector('.bigbox1 input')
    
    
    

    function searchHandler(word,datas){
      return  datas.filter(text =>{
        let regex = new RegExp(word,'gi')
        
       return text.product.match(regex) 
      })
      

    }
    function list(){
      let words = searchHandler(this.value,datas)
      let html = words.map((list,i)=>{
       
        return `
        <div class="box">
          <a class="view" href="product.html">Quick View</a>
          <img src="${list.img}" alt="">
          <a class="index${i+1}" href="single.html">New</a>
        <div class="item">
            <h4>${list.product}</h4>
            <p>${list.price}</p>
            <ul>
                <li> <i class="fa fa-star" aria-hidden="true"></i></li>
                <li> <i class="fa fa-star" aria-hidden="true"></i></li>
                <li> <i class="fa fa-star" aria-hidden="true"></i></li>
                <li> <i class="fa fa-star" aria-hidden="true"></i></li>
            </ul>
            <i class="fa fa-cart-plus"></i>
        </div>
</div>
        `
      })
      document.querySelector('#content').innerHTML = html
      console.log('true')
    }
    
    input.addEventListener('keyup',list)

    let timeline = new TimelineMax()
    
    .staggerFrom('#content .box',2.4,{
      scale:0,
      ease: 'bounce.out'
    },0.3)

    $('.new h3').textillate({
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