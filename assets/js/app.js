const nav = document.getElementById('main-nav')
const navigation = document.querySelector('.navigation')
const navToggleBtn = document.querySelector('.nav-open')

window.addEventListener('scroll', function(e){
    if(window.pageYOffset > 200){
        nav.classList.add('sticky-nav')
    }else{
        nav.classList.remove('sticky-nav')
    }
})


navToggleBtn.addEventListener('click', function(e){
    navigation.classList.toggle('active')
})