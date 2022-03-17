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
