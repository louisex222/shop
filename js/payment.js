
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
    let wrap = document.querySelector('.nav .wraps')
    bar.onclick= function(){
      wrap.classList.toggle('display')  
      
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
    
    // tab
    let navs = document.querySelectorAll('.wrap li')
    let div = document.querySelectorAll('.wrap .box');
    
    for(let i =0 ;i<navs.length; i++){
      navs[i].id=i
      navs[i].onclick=function(e){
        let that =this
        for(let j=0 ;j<navs.length;j++){
          navs[j].className=''
          div[j].style.display='none'
          
        }
        navs[that.id].className ='active'
        div[that.id].style.display='block'
       
        }
      
    }

    
   