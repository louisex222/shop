
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
      login.style.right="17px"
    }
    loginclose.onclick =function(){
      login.style.right='-30%'
    }

    // 購物車
    let mycart =document.querySelector('#header .fa-cart-arrow-down')
    let cartlist =document.querySelector('.cart')
    let cartclose =cartlist.querySelector('.fa-times')
    mycart.onclick=function(){
      cartlist.style.display='flex'
    }
    cartclose.onclick=function(){
      cartlist.style.display='none'
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
   
   
   let table = document.querySelector('.wrap table')
   let basket = document.querySelector('.wrap .bigbox .basket')
   let ul = basket.querySelector('ul')
   
   function showlist(){
     
     let local =shoplist.model()
     for(let i in local){
       let id = local[i].id
       let count = local[i].count
       let name = local[i].name
       let price= Math.floor(local[i].price*local[i].count)
       let html =`
            
                <td>${i}</td>
                <td><img src="images/s1.jpg"></td>
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
    showlist()

   
    function totalprice(){
      let sum=0
      let total = basket.querySelector('span')
      let price = table.querySelectorAll('.price')
      for(let i=0 ;i< price.length; i++){
        sum += parseInt(price[i].innerText)
        
        total.innerHTML = ` $${sum}`
      }
      
    }
    
    function delbtn(){
      
      let close = document.querySelectorAll('.wrap .close')
      for(let i in close){

        close[i].onclick = function(e){  
            
          let parent =  this.parentNode.parentNode
          let child = this.parentNode
          parent.removeChild(child)
          totalprice()
          
        }
      }


    }
    let num =1
    
   
    let span= table.querySelectorAll('span')
    let minus = document.querySelectorAll('.minus')
     for(let i =0 ; i<minus.length ; i++){
       minus[i].onclick =function(e){
         
        num-=1 
        span[i].innerText =num

          
        
       }
     }
     let plus = document.querySelectorAll('.plus') 
     for(let i =0 ; i<plus.length ; i++){
      plus[i].onclick =function(e){
        num+=1 
        span[i].innerText =num

      }
    }
  
   