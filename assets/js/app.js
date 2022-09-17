const nav = document.getElementById("main-nav");
const navigation = document.querySelector(".navigation");
const navToggleBtn = document.querySelector(".nav-open");
const socialLinks = document.querySelector('.social-links')


window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 200) {
    nav.classList.add("sticky-nav");
    socialLinks.classList.add("active");
  } else {
    nav.classList.remove("sticky-nav");
    socialLinks.classList.remove("active");
  }
});

navToggleBtn.addEventListener("click", function (e) {
  navigation.classList.toggle("active");
  document.body.classList.toggle("disable-scroll");
});
