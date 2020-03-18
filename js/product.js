
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
    let cart =document.querySelector('.cart')
    let cartclose =cart.querySelector('.fa-times')
    mycart.onclick=function(){
      cart.style.display='flex'
    }
    cartclose.onclick=function(){
      cart.style.display='none'
    }
    // 放大鏡
    let bigwrap = document.querySelector('#wrap')
    let img =  bigwrap.querySelector('.bigimg')
    let bigimg = bigwrap.querySelector('.bigimg img')
    let wrap = document.querySelector('#wrap .wrap')
    let mark = wrap.querySelector('.mark')
    let first = wrap.querySelector('.first')
    let float = wrap.querySelector('.float')
    mark.onmousemove = function(e){
        let left =  e.clientX - bigwrap.offsetLeft -mark.offsetLeft- float.offsetWidth/2
        let top =   e.clientY  -bigwrap.offsetTop- mark.offsetTop - float.offsetHeight/2 +document.body.scrollTop
        let scrollTop = document.documentElement.scrollTop
        if(left < 0){
            left= 0
        }else if(  left > mark.offsetWidth -float.offsetWidth){
            left =mark.offsetWidth -float.offsetWidth
        }
        if(top < 0){
            top = 0
        }else if(top > mark.offsetHeight -float.offsetHeight){
            top = mark.offsetHeight -float.offsetHeight
        }
        float.style.display ='block'
        float.style.left=`${left}px`
        float.style.top =`${top}px`
        
        let percentX =  left/(mark.offsetWidth -float.offsetWidth)
        let percentY = top /(mark.offsetHeight -float.offsetHeight)
       
        img.style.display='block'
        bigimg.style.left = -percentX *(bigimg.offsetWidth-img.offsetWidth)+'px'
        bigimg.style.top = -percentY*(bigimg.offsetHeight-img.offsetHeight)-scrollTop+'px'
        
    }
        mark.onmouseleave = function(){
            float.style.display='none'
            img.style.display= 'none'
        }
   
    
   