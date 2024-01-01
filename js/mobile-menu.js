const btnClose = document.querySelector(".mobile-menu__button--close");
const btnOpen = document.querySelector(".header__button--open");
const mobileMenu = document.querySelector(".mobile-menu");
console.log(btnClose);
console.log(btnOpen);
console.log(mobileMenu);
const handleClick = () => {
  mobileMenu.classList.toggle("is-open");
};

const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

btnClose.addEventListener("click", handleClick);
btnOpen.addEventListener("click", handleClick);

btnClose.addEventListener("click", disableScroll);
btnOpen.addEventListener("click", disableScroll);
