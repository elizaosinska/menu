const menuBth=document.querySelector('.menu-btn');
let menuOpen=false;
menuBth.addEventListener('click',() => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
});