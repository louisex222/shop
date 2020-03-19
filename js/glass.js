  // RWD 輪播
  let mySwiper = new Swiper ('.swiper-container', {
    
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  })
 
    // 時間的倒數 至四月一日
    let timer = null  
    timer = setInterval(function(){
      let then = new Date('April 1, 2020 00:00:00').getTime()
      let now = new Date().getTime()
      let count = Math.round((then-now)/1000)
      let seconds = Math.floor(count%60)
      let minutes = Math.floor((count%3600)/60)
      let hours = Math.floor((count/3600)%24)
      let days = Math.floor(count/3600/24)
      document.querySelector('.day').innerText = `${days}`
      document.querySelector('.hour').innerText = `${hours}`
      document.querySelector('.min').innerText = `${minutes}`
      document.querySelector('.sec').innerText = `${seconds}`
    },1000)

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
    shop.onmouseover=function(){
      bigbox2.style.display='flex'
    }
    bigbox2.onmouseleave =function(){
      bigbox2.style.display='none'
    }
    
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
    // 購物車顯示
    let mycart =document.querySelector('#header .fa-cart-arrow-down')
    let cartlist =document.querySelector('.cart')
    let cartclose =cartlist.querySelector('.fa-times')
    mycart.onclick=function(){
      cartlist.style.display='flex'
    }
    cartclose.onclick=function(){
      cartlist.style.display='none'
    }
   
    // 商品增加至購物車
    let box = document.querySelectorAll('#section .box')
    let cartPlus = document.querySelectorAll('.fa-cart-plus')
    let carts = document.querySelector('.cart ul')
    let li = carts.childNodes[1]
    // let local = JSON.parse(localStorage.getItem('local'))||[]
    

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
           if( cart[i]===id){
             cart[i].count++
             save()
             return
           }
        }
        let items = new Item(id,name,count,price)
        cart.push(items)
        save()
      }
      obj.cartCount = function(){
        var count = 0;
        var cart = JSON.parse(sessionStorage.getItem('shopcart'));
        for(var i in cart){
            count +=cart[i].count;
            

        }
        return count;
    };
      obj.model = function(){
        return JSON.parse(localStorage.getItem('shopcart'))
      }
      obj.total = function(){
        let sum =0
        for(let i in cart){
          sum += cart[i].price *cart[i].count
        }
        return sum 
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
    
     function cartLocal() {
       for (let i=0 ;i<box.length;i++){
          cartPlus[i].onclick = function(){
            
            
              this.id = [i]
              let id = this.id
              let name = box[i].querySelector('h4').innerText
              let price = box[i].querySelector('p').innerText
              let count = 1
              
              shoplist.addcart(id,name,count,price)
              let html = `
              
              <li ${id}>
                  <span class="name">${name}</span>
                  <input type="text" value='1'>
                  <span class="cancel" >X</span>
                  <span class="price">${price}</span>
              </li>
              `
            li.innerHTML += html
            carts.appendChild(li)
            totals()
    
            let close = document.querySelectorAll('.cancel')
            for(let i=0 ; i< close.length; i++){
              close[i].onclick = function(){
                let id = cart[i].id
                shoplist.del(id)
                let parent = this.parentNode.parentNode;
                let child = this.parentNode;
                parent.removeChild(child)
                document.querySelector('.total').innerHTML = '$'+'0'+'NTD'
                totals()
              }
            }
  
          }
  
  
      }   
        
    }
    cartLocal()   
   
    function totals(){
      let sum =0 
      let total= document.querySelector('.cart .total')
      let price= document.querySelectorAll('.price')
      for (let i=0 ;i< price.length; i++){
        sum += parseInt(price[i].innerText)
          total.innerHTML = ` $${sum} NTD`
        
      }
    }
    