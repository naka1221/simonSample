let h1Elem = document.querySelector('.typewriter')

let h1ElemTypWriter = new Typewriter(h1Elem, {
    loop: true,
    cursor: '|'
})

h1ElemTypWriter.typeString('I`m Photographer. ')
    .pauseFor(4500)
    .deleteAll()
    .typeString('I`m Designer.')
    .pauseFor(4500)
    // .deleteChars(7)
    .deleteAll()
    .typeString('I`m Freelancer.')
    .pauseFor(4500)
    .start();



    const heroBg = document.querySelector('.hero-bg');
    const about=document.querySelector('.about');
    const  header =document.querySelector('.header')

window.addEventListener('scroll' ,function(){
    let Y = window.scrollY
    let  position = "center "+Y+"px"
    let h=100-Y
    heroBg.style.backgroundPosition = `${position}`
    // header.style.height=`${h}+"vh"`
    // about.style.top=`${position}`
    // console.log(`${h}+"vh"`)
})





const palett = document.querySelectorAll(".palet-color__box")
palett.forEach(items => {
    items.addEventListener("click" ,function(e){
        for(let j=0; j<palett.length ; j++){
            palett[j].classList.remove("small")
        }
        items.classList.add("small")
        const valpaletColor = e.target
        const pColor=valpaletColor.getAttribute("data-id")
        console.log(pColor)
        var root = document.querySelector(':root');
        root.style.setProperty('--main-color',pColor);
    })
})

const paletIcon= document.querySelector(".palet-icon")
const palet =document.querySelector(".palet")
let flag =0
paletIcon.addEventListener("click" , function(){
    if(flag == 0){
        palet.style.right="0%"
    flag=1;
    
    }
    else if(flag ==1){
        palet.style.right="-200px"
        flag=0
    }
    
})


//////////////   Handel  Pallet Default /////////////
const palletDefault = document.querySelector(".pallet-default")
var root = document.querySelector(':root');

palletDefault.addEventListener("click" , function(){
  root.style.setProperty('--main-color',"#28a745");
})


const toggleBtn = document.querySelector(".nav-btn__toggle")
const menuList = document.querySelector(".menu-list")
const childtoggleBtn = toggleBtn.children
toggleBtn.addEventListener("click" , function(){
   menuList.classList.toggle("activemenu")
   for(let i=0 ; i<childtoggleBtn.length ; i++){
       childtoggleBtn[i].classList.toggle("show")
   }

})
    


// /////////////
// const sidbar =document.querySelectorAll('.sidbar-list__item')
// const topitem =document.querySelector('.top')

// for(let i=0; i<sidbar.length ; i++){
//     sidbar[i].addEventListener('click' , function(){
//     console.log('mmm')
// topitem.style.height=100+"vh"
// })
// }


// work//////////////

const Elitemss =document.querySelectorAll('.list-item')
const item =document.querySelectorAll('.work__photo-box')
const wrapperwork =document.querySelector('.work__photo-wrapper')

for(let i=0; i<Elitemss.length ; i++){
    Elitemss[i].addEventListener('click' , function(){
        for(let j=0; j<Elitemss.length; j++){
            Elitemss[j].classList.remove('active')
        }
        this.classList.add('active');
        const target= this.getAttribute('data-target')


        
        for(let k=0; k<item.length; k++){
            item[k].style.display='none';
            if(target == item[k].getAttribute('data-content')){
                item[k].style.display ='block'
            }
            if(target == "all"){
                item[k].style.display ='block'

            }
        }

    })
}


const listItemSide= document.querySelectorAll(".linklist")


listItemSide.forEach(itemlist => {
    itemlist.addEventListener("click" , function(){
        for(let i=0 ; i<listItemSide.length ; i++){
            listItemSide[i].classList.remove("activeColor")
        }
        itemlist.classList.add("activeColor")
    })
})


