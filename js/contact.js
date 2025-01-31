document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const reserveSection = document.querySelector(".reserve");

  window.addEventListener("scroll", function () {
    const reserveTop = reserveSection.getBoundingClientRect().top;

    if (reserveTop <= 0) {
      header.style.position = "fixed";
      header.style.backgroundColor = "#603809";
      header.style.transition = "background-color 0.3s ease-in-out";
      header.style.zIndex = "1000";
      header.style.width = "100%";
    } else {
      header.style.position = "absolute";
      header.style.backgroundColor = "transparent";
    }
  });
});
