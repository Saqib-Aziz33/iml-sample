const nav = document.getElementById('main-nav')

window.addEventListener('scroll', function(e){
    if(window.pageYOffset > 200){
        nav.classList.add('sticky-nav')
    }else{
        nav.classList.remove('sticky-nav')
    }
})