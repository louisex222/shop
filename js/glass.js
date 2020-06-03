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
      let then = new Date('June 24, 2020 00:00:00').getTime()
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
    // shop.onmouseover=function(){
    //   bigbox2.style.display='flex'
    // }
    // bigbox2.onmouseleave =function(){
    //   bigbox2.style.display='none'
    // }
    
    // 搜尋
    
    let search = document.querySelector('.search')
    let closebtn= document.querySelector('.fa-times')


   
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
    // // 購物車顯示
    
   
    // 商品增加至購物車
    let box = document.querySelectorAll('#section .box')
    let cartPlus = document.querySelectorAll('.fa-cart-plus')
    
    
    

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
        return JSON.parse(localStorage.getItem('shopcart')) || []
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
              
              let mycart = document.querySelector('.icon a')
              let local = shoplist.model()
              
          let myCart=  (function (cart){
              let item = 0
              for(i in local){
                item += local[i].count
                
                console.log((item))
              }
              mycart.setAttribute('data-text',item)
          })()
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
    
    let timeline = new TimelineMax()
    timeline.from('.intro',1,{
      opacity: 0,
      top: 30+'px'
    })
    .staggerFrom('#section .box',2.4,{
      scale:0,
      ease: 'bounce.out'
    },0.3)
    .from('#activity',0.3,{
      opacity:0.5
  })
   .from('#pic',0.3,{
     opacity: 0.5
   })
   
  .from('#article',0.3,{
    opacity:0.5
  })
  .from('#footer',0.3,{
    opacity:0.5
  })
  
  
  
  window.addEventListener('scroll',function(e){
    let currentY = document.body.scrollTop
    let pageHeight = document.body.scrollHeight - document.body.clientHeight
    let progress = currentY/pageHeight
    timeline.progress(progress)
    // timeline.pause()
    
    let nav= document.querySelector('.nav')
    if(currentY >=100){
      nav.classList.add('fix')
    }else  {
      nav.classList.remove('fix')
    }
    
    currentY > 1500 ? toTop.style.display = 'block':toTop.style.display='none'
    begin = currentY
    toTop.onclick = function(){
      
      clearInterval(timers)
      
      timers = setInterval(function(){
        begin = begin + (end-begin)/50
        
        document.body.currentY = begin
        if(parseInt(begin)==end){
          clearInterval(timers)
        }    
      },10)
    }
        
  },true)
 