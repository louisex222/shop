
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
    
    let bar = document.querySelector('.fa-bars')
    let wrap = document.querySelector('.nav .wrap')
    bar.onclick= function(){
      wrap.classList.toggle('display')  
      
    }
   
    
    // 添加清單
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
   
   
   let table = document.querySelector('.wrap table')
   let basket = document.querySelector('.wrap .bigbox .basket')
   let ul = basket.querySelector('ul')
   let p = document.querySelector('.wrap p')
   let local =shoplist.model()
   function showlist(){
     let local =shoplist.model()
     for(let i in local){
      let number =  parseInt(i)+1
       let id = local[i].id
       let count = local[i].count
       let name = local[i].name
       let price= Math.floor(local[i].price*local[i].count)
       let html =`
            
                <td>${i}</td>
                <td><img src="images/s${number}.jpg"></td>
                <td>
                    <div class="count">
                        <div class="minus" data-id="${id}"></div>
                        <div><span data-id="${id}">${count}</span></div>
                        <div class="plus" data-id="${id}"></div>
                    </div>
                </td>
                <td class="name">${name}</td>
                <td class="price">${price}</td>
                <td class="close">X</td>
               
       `
       
        let tr = document.createElement('tr')
        tr.dataset.id = id
        tr.innerHTML = html
        table.appendChild(tr)
        
        
        
      }
      delbtn()
      totalprice()
    }
    

    function totalprice(){
      let sum = 0
      let total = basket.querySelector('span')
      let price = table.querySelectorAll('.price')
      total.innerHTML =''
      for(let i=0 ;i< price.length; i++){
        sum += parseInt(price[i].innerText)
        total.innerText = `$${sum}` 
      }
      
      
    }
  
    
    function delbtn(){
      let close = document.querySelectorAll('.wrap .close')
      let total = basket.querySelector('span')
      
      for(let i in close){
        close[i].onclick = function(){  
            
          let parent =  this.parentNode.parentNode
          let child = this.parentNode
          parent.removeChild(child)

          local.splice(i,1)
          localStorage.setItem('shopcart',JSON.stringify(local))
        
          totalprice()
          
        }
      }

    }
    
    showlist()
    
    {

      let span= table.querySelectorAll('span')
      let minus = document.querySelectorAll('.minus')
       for(let i =0 ; i<minus.length ; i++){
         minus[i].onclick =function(e){
          let num = parseInt(span[i].textContent )
          let local =shoplist.model()
          num-=1 
          span[i].innerText =num
          value[i].innerText = num *local[i].price
        
          totalprice()
         }
       }
       
    
    
      let plus = document.querySelectorAll('.plus')
      let value = table.querySelectorAll('.price')
      
      
      for(let i =0 ; i<plus.length ; i++){
        plus[i].onclick =function(e){
          let num = parseInt(span[i].textContent )
          let local =shoplist.model()
          num+=1 
          span[i].innerText =num
          value[i].innerText = num *local[i].price
          
          totalprice()
        }
      }
    }

    let details = JSON.parse(localStorage.getItem('details')) ||[]
    let  name = document.querySelector('.detail form').children[1]
    let  mobileNumber = document.querySelector('.detail form').children[3]
    let  landMark = document.querySelector('.detail form').children[5]
    let  city = document.querySelector('.detail form').children[7]
    let  address = document.querySelector('.detail form').children[9]

    console.log(name,mobileNumber,landMark,city,address)
    let customList = function(name,mobileNumber,landMark,city,address){
      this.name = name,
      this.mobileNumber= mobileNumber,
      this.landMark = landMark,
      this.city =city,
      this.address = address
      console.log(this)
    }
    function makeDetail(e){
      let details =[]
      let custom = new customList(name.value,mobileNumber.value,landMark.value,city.value,address.value)
      details.push(custom)
      localStorage.setItem('details',JSON.stringify(details))
    }
    
    document.querySelector('form a').addEventListener('click',makeDetail)

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

    // 動畫
    $('.wrap h2').textillate({
      loop:true,
      in:{
        effect:'fadeIn',
        type:'char'
      },
      out:{
        effect:'fadeOut',
        type:'char',
        reverse:true
      }
    })
    
    $('.wrap form div').textillate({
      loop:true,
      in:{
        effect:'fadeIn',
        type:'char'
      },
      out:{
        effect:'fadeOut',
        type:'char',
        reverse:true
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