

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
    // nav
    let bar = document.querySelector('.fa-bars')
    let ul = document.querySelector('.nav .wrap')
    bar.onclick= function(){
      ul.classList.toggle('display')  
      
    }
    // 購物車
    // let mycart =document.querySelector('#header .fa-cart-arrow-down')
    // let cartlist =document.querySelector('.cart')
    // let cartclose =cartlist.querySelector('.fa-times')
    // mycart.onclick=function(){
    //   cartlist.style.display='flex'
    // }
    // cartclose.onclick=function(){
    //   cartlist.style.display='none'
    // }
   
    
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
      
    }
    window.addEventListener('scroll',scroll,true)

   