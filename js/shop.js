

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
    // nav
    let bar = document.querySelector('.fa-bars')
    let ul = document.querySelector('.nav .wrap')
    bar.onclick= function(){
      ul.classList.toggle('display')  
      
    }
    // 購物車
    let mycart =document.querySelector('#header .fa-cart-arrow-down')
    let cart =document.querySelector('.cart')
    let cartclose =cart.querySelector('.fa-times')
    mycart.onclick=function(){
      cart.style.display='flex'
    }
    cartclose.onclick=function(){
      cart.style.display='none'
    }
   
    
   // 商品增加至購物車
   let box = document.querySelectorAll('#content .box')
   let cartPlus = document.querySelectorAll('.fa-cart-plus')
   let carts = document.querySelector('.cart ul')
   let li = carts.childNodes[1]
   let local = JSON.parse(localStorage.getItem('local'))||[]
   console.log(li)
   
   function showlist(){

     for (let i=0 ;i<box.length;i++){
       
         cartPlus[i].onclick=function(){
           console.log(1)
  
             let name = box[i].querySelector('h4').innerText
             let price = box[i].querySelector('p').innerText
             let items = { name: `${name}`,price:`${price}`}
             local.push(items)
             console.log(local)
             window.localStorage.setItem('local',JSON.stringify(local))
             let html = `
             
             <li id='${i}'>
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
     
     showlist()
   function totals(){
     let sum =0 
     let total= document.querySelector('.cart .total')
     let price= document.querySelectorAll('.price')
     for (let i=0 ;i< price.length; i++){
       sum += parseInt(price[i].innerText)
         total.innerHTML = ` $${sum} NTD`
       
     }
   }