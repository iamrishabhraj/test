let memu=document.querySelector('#memu-bar');
let navbar=document.querySelector('.navbar');
memu.addEventListener('click',()=>{
    memu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll=()=>{
    memu.classList.remove('fa-times');
    //  navbar.classList.toggle('active');
}