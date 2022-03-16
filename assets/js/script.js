window.addEventListener('resize', function(event) {
    var heightSlide = $('#slide-show')[0].children[0].childNodes[1].clientHeight

    // js

    var root = document.querySelector(':root');
    root.style.setProperty('--height-slide', heightSlide + 'px'); 
}, true);

