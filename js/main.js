// get contact elemnt
var contact= document.getElementsByClassName('contactUs');
//get modal element
var modal= document.getElementsByClassName('modal')[0];
var modalContent= document.getElementsByClassName('modalContent')[0];

// get close modal
var closeModal= document.getElementsByClassName('closeModal')[0];

//get woman image
var image1= document.getElementsByClassName('image1')[0];
var image1Mobile= document.getElementsByClassName('image1Mobile')[0];

//get menu element
var menu =document.getElementsByClassName('menu')[0];

//get navigation link
var navLink =document.getElementsByClassName('navLink')[0];

//get menu modal element
var menuModal =document.getElementsByClassName('menuModal')[0];
//get close menu element
var closeMenu =document.getElementsByClassName('closeMenu')[0];

//function to open contact form 
Array.from(contact).forEach(el => {
    el.addEventListener('click',()=>{
        modal.style.display='block';
        document.body.style.overflow = 'hidden';
        menuModal.style.display='none'
    })
});

//function to close modal
closeModal.addEventListener('click',()=>{
    modal.style.display='none';
    document.body.style.overflow = 'auto';
})

//close modal with outside click
modal.addEventListener('click',(e)=>{
    if(e.target==modalContent){
        modal.style.display='none';
        document.body.style.overflow = 'auto';
    }
})

let mobile;
//function to check if mobile
function checkScreen(){
    let width=window.innerWidth;
    if(width<=750){
        mobile=true;
        return(mobile)
    }
    else{
        mobile=false
        return(mobile)
    }
}

//function to change woman image position
function changeImagePosition(){
    if(mobile){
        image1.style.display='none';
        image1Mobile.style.display='block'
        menu.style.display='block'
        navLink.style.display='none'
    }
    else if(!mobile){
        image1.style.display='block';
        image1Mobile.style.display='none'
        menu.style.display='none'
        navLink.style.display='block'
    }
}
//function to listen resizing 
window.addEventListener('load',()=>{
    window.addEventListener('resize',()=>{
        checkScreen()
        changeImagePosition()
        console.log(mobile)
    })
    checkScreen()
    changeImagePosition()
})

//function to open menu
menu.addEventListener('click',()=>{
    menuModal.style.display='block'
    document.body.style.overflow = 'hidden';
})

//function to close menu
closeMenu.addEventListener('click',()=>{
    menuModal.style.display='none'
    document.body.style.overflow = 'auto';
})
//close for outside click
menuModal.addEventListener('click',(e)=>{
    if(e.target==menuModal){
        menuModal.style.display='none'
        document.body.style.overflow = 'auto';
    }
})