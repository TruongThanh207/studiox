var root = document.querySelector(':root');
window.addEventListener('resize', function() {
    var heightSlide = $('#slide-show')[0].children[0].childNodes[1].clientHeight

    // js

    root.style.setProperty('--height-slide', heightSlide + 'px'); 
}, true);

window.addEventListener('scroll', function(){
    var section_header = document.getElementsByClassName('section-header')[0];
    if(this.window.scrollY > 300){
        section_header.classList.add('fixed')
        section_header.style.setProperty('--height-header', '70px');
    }else{
        section_header.classList.remove('fixed')
        section_header.removeAttribute('style')
    }
})

var nav_mobile = document.querySelector('#nav-mobile');

var nav_menu = document.querySelector('.icon-nav')

nav_menu.onclick = function(){
    this.style.display = 'none';
    nav_mobile.classList.add("menu-mobile")

    for (let i = 0; i < nav_mobile.children.length; i++){
        nav_mobile.children[i].style.display = 'block'
    }
};

var nav_closed = document.querySelector('.icon-close').onclick = function(){
    this.style.display = 'none'
    nav_mobile.classList.remove("menu-mobile")
    for (let i = 0; i < nav_mobile.children.length; i++){
        nav_mobile.children[i].style.display = 'none'
    }
    nav_menu.style.display = 'block'
};
