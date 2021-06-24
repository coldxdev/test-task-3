import { isMobile } from "./utils/isMobile";
import Swiper from "swiper/bundle";
document.addEventListener("DOMContentLoaded", () => {
  const menuBurger = document.querySelector(".menu__burger");
  const menuClose = document.querySelector(".menu__close");
  const menu = document.querySelector(".menu");

  menuBurger.addEventListener("click", () => {
    menuBurger.classList.add("active");
    menu.classList.add("active");
    document.body.classList.add("lock");
  });

  menuClose.addEventListener("click", () => {
    menuBurger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("lock");
  });

  if (isMobile.any()) {
    const menuArrowElems = document.querySelectorAll(".menu__arrow");

    menuArrowElems.forEach((menuArrow) => {
      menuArrow.addEventListener("click", () => {
        menuArrow.closest(".menu__item").classList.toggle("active");
      });
    });
  }
  window.onscroll = () => {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetTop;
    if (window.pageYOffset > headerHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  const mainCardBtn = document.querySelector(".main-card__btn");
  mainCardBtn.addEventListener("click", () =>
    alert(`You clicked to main-card__btn`)
  );

  async function getProducts(button) {
    if (!button.classList.contains("loading")) button.classList.add("loading");
    const api = "https://fakestoreapi.com/products?limit=8";
    let response = await fetch(api, { method: "GET" });
    if (response.ok) {
      let result = await response.json();
      loadProducts(result);
      button.classList.remove("loading");
      button.remove();
    } else {
      alert("Error");
    }
  }

  function loadProducts(data) {
    const productsCards = document.querySelector(".products__cards");

    data.forEach((item) => {
      const productId = item.id;
      const productImg = item.image;
      const productTitle = item.title;
      const productDesr = item.description;
      const productPrice = item.price;

      const template = `

      <div class="products__card products-card">
      <div class="products-card__img">
        <img src="${productImg}" alt="Product ${productId}">
      </div>
      <div class="products-card__content">
        <div class="products-card__info">
          <h5 class="products-card__title">${productTitle}</h5>
          <p class="products-card__desr">${productDesr}</p>
        </div>
        <div class="products-card__prices">
          <div class="products-card__price">${productPrice} $</div>
        </div>
        <div class="products-card__actions card-actions">
          <div class="card-actions__wrapper">
            <a class="card-actions__btn btn btn--white" href="#">Add to cart</a>
            <a class="card-actions__link card-actions__link--share" href="#">Share</a>
            <a class="card-actions__link card-actions__link--like" href="#">Like</a>
          </div>
        </div>
      </div>
      </div>
      `;
      productsCards.insertAdjacentHTML("beforeend", template);
    });
  }
  const btnShowMore = document.querySelector(".products__footer-btn");
  btnShowMore.addEventListener("click", (e) => {
    e.preventDefault();
    getProducts(btnShowMore);
  });

  const slider = new Swiper(".tips-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 3,
    navigation: {
      nextEl: ".slider-arrow--next",
      prevEl: ".slider-arrow--prev",
    },
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  let cardActionsBtnElems = document.querySelectorAll(".card-actions__btn");
  cardActionsBtnElems.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("You added to cart");
    })
  );
});
