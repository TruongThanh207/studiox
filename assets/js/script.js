var root = document.querySelector(':root');
window.addEventListener('resize', function() {
    var heightSlide = $('#slide-show')[0].children[0].childNodes[1].clientHeight

    // js

    root.style.setProperty('--height-slide', heightSlide + 'px'); 
}, true);

window.addEventListener('scroll', function(){
    var header = document.getElementsByClassName('section-header')[0];
    if(this.window.scrollY > 300){
        header.classList.add('fixed')
        root.style.setProperty('--height-header', '70px');
    }else{
        header.classList.remove('fixed')
        root.removeAttribute('style')
    }
})
