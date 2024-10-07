// header_fixed_on_scroll
window.addEventListener('scroll',function(e) {     
    if(scrollY> 0){
        document.querySelector('.header').classList.add('fixed')
    }else{
        document.querySelector('.header').classList.remove('fixed')
    }
})
const popupMenu =  () => {
    const menu = document.getElementById("menu");
    const bar = document.querySelectorAll(".bar")
    menu.classList.toggle("active");
    bar[0].classList.toggle("rotate_bar1");
    bar[1].classList.toggle("rotate_bar3");
    bar[2].classList.toggle("rotate_bar2");
};

