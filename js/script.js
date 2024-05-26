const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");

const toggleActive = (btn, target) => {
  btn.addEventListener("click", () => {
    target.classList.toggle("active");
    const clickOutsideListener = (e) => {
      if (!btn.contains(e.target) && !target.contains(e.target)) {
        target.classList.remove("active");
        document.removeEventListener("click", clickOutsideListener);
      }
    };
    document.addEventListener("click", clickOutsideListener);
  });
};

toggleActive(document.querySelector("#search-btn"), document.querySelector(".search-form"));
toggleActive(document.querySelector("#menu-btn"), document.querySelector(".navbar"));
