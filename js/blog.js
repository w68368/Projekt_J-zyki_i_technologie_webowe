const blogData = [
  {
    title: "How To Make A Great Coffee",
    image: "images/blog/make_coffee.png",
    description:
      "Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press. Follow our step-by-step guide to master the perfect cup!",
  },
  {
    title: "Why does caffeine make us stay awake?",
    image: "images/blog/caffeine.png",
    description:
      "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!",
  },
  {
    title: "Different types of coffee Explained",
    image: "images/blog/beans.png",
    description:
      "Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a smooth yet sweet drink - great over ice! Finally there's nitro which takes cold brew and injects it (through nitrogen) with carbon dioxide for an even creamier texture and slightly sweet flavor profile. No matter what you choose, chances are you won't be disappointed!",
  },
  {
    title: "The Art of Espresso Brewing",
    image: "images/blog/espresso_brewing.png",
    description:
      "Espresso is an art form. In this guide, we'll show you how to brew a flawless shot every time, exploring techniques, equipment, and tips from the experts!",
  },
];

const blogContainer = document.querySelector(".blog-cards-container");
const blogLeftBtn = document.querySelector(".blog-left-btn");
const blogRightBtn = document.querySelector(".blog-right-btn");
const blogDotsContainer = document.getElementById("blog-slider-dots");
const overlay = document.getElementById("blog-overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayImage = document.getElementById("overlay-image");
const overlayDescription = document.getElementById("overlay-description");
const closeOverlayBtn = document.querySelector(".close-overlay-btn");
const header = document.querySelector(".header");
const blogSection = document.querySelector(".blog");

let blogIndex = 0;
const maxBlogVisibleCards = 3;

function renderBlogCards() {
  blogContainer.innerHTML = "";
  blogData.forEach((post, index) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-info">
          <h3>${post.title}</h3>
          <p>${post.description.substring(0, 100)}...</p>
          <button class="read-more" data-index="${index}">More</button>
        </div>
      `;
    blogContainer.appendChild(blogCard);
  });

  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      const postIndex = e.target.getAttribute("data-index");
      openOverlay(postIndex);
    });
  });

  blogDotsContainer.innerHTML = "";
  const totalBlogSlides = Math.ceil(blogData.length / maxBlogVisibleCards);
  for (let i = 0; i < totalBlogSlides; i++) {
    let dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      blogIndex = i * maxBlogVisibleCards;
      updateBlogSlider();
    });
    blogDotsContainer.appendChild(dot);
  }
}

function openOverlay(index) {
  const post = blogData[index];
  overlayTitle.textContent = post.title;
  overlayImage.src = post.image;
  overlayImage.alt = post.title;
  overlayDescription.textContent = post.description;
  overlay.style.display = "flex";
}

function closeOverlay() {
  overlay.style.display = "none";
}

closeOverlayBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});

function updateBlogSlider() {
  const cardWidth = document.querySelector(".blog-card").offsetWidth;
  const totalCards = blogData.length;
  const maxIndex = Math.max(0, totalCards - maxBlogVisibleCards);

  if (blogIndex > maxIndex) blogIndex = maxIndex;
  if (blogIndex < 0) blogIndex = 0;

  blogContainer.style.transform = `translateX(-${
    blogIndex * (cardWidth + 20)
  }px)`;

  document.querySelectorAll(".slider-dot").forEach((dot, i) => {
    dot.classList.toggle(
      "active",
      i === Math.floor(blogIndex / maxBlogVisibleCards)
    );
  });
}

blogLeftBtn.addEventListener("click", () => {
  blogIndex -= maxBlogVisibleCards;
  if (blogIndex < 0) blogIndex = 0;
  updateBlogSlider();
});

blogRightBtn.addEventListener("click", () => {
  blogIndex += maxBlogVisibleCards;
  const maxIndex =
    Math.ceil(blogData.length / maxBlogVisibleCards) * maxBlogVisibleCards -
    maxBlogVisibleCards;
  if (blogIndex > maxIndex) blogIndex = maxIndex;
  updateBlogSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  renderBlogCards();
  updateBlogSlider();

  window.addEventListener("scroll", function () {
    const blogTop = blogSection.getBoundingClientRect().top;
    if (blogTop <= 0) {
      header.style.position = "fixed";
      header.style.backgroundColor = "#603809";
      header.style.transition = "background-color 0.3s ease-in-out";
    } else {
      header.style.position = "absolute";
      header.style.backgroundColor = "transparent";
    }
  });
});

window.addEventListener("resize", updateBlogSlider);
