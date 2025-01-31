const drinksData = [
  {
    name: "Cappuccino",
    image: "images/coffee/cappuccino.png",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    name: "Latte",
    image: "images/coffee/latte.png",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
  },
  {
    name: "Espresso",
    image: "images/coffee/espresso.png",
    description: "Coffee 100% | Milk 0%",
    price: "$5.00",
  },
  {
    name: "Flat White",
    image: "images/coffee/flat_white.png",
    description: "Coffee 60% | Milk 40%",
    price: "$7.00",
  },
  {
    name: "Americano",
    image: "images/coffee/americano.png",
    description: "Coffee 100% | Milk 0%",
    price: "$7.50",
  },
  {
    name: "Frappe",
    image: "images/coffee/frappe.png",
    description: "Coffee 30% | Milk 70%",
    price: "$6.50",
  },
  {
    name: "Mocha",
    image: "images/coffee/mocha.png",
    description: "Coffee 30% | Milk 70%",
    price: "$6.50",
  },
  {
    name: "Irish",
    image: "images/coffee/irish.png",
    description: "Coffee 30% | Milk 50%",
    price: "$6.50",
  },
];

const featuresData = [
  {
    title: "Supreme Beans",
    image: "images/features/coffee-beans.png",
    description: "Beans that provide great taste",
  },
  {
    title: "High Quality",
    image: "images/features/badge.png",
    description: "We provide the highest quality",
  },
  {
    title: "Extraordinary",
    image: "images/features/extraordinary.png",
    description: "Coffee like you have never tasted",
  },
  {
    title: "Affordable Price",
    image: "images/features/affordable.png",
    description: "Our coffee prices are easy to afford",
  },
  {
    title: "Farm to Cup",
    image: "images/features/ecology.png",
    description: "Ethically sourced, sustainably grown",
  },
  {
    title: "Brewed to Perfection",
    image: "images/features/coffee_machine.png",
    description: "Every cup crafted with care",
  },
];

const feedbackData = [
  {
    text: "Amazing coffee and great atmosphere! I visit this place every morning.",
    author: "Jonny Thomas",
    role: "Project Manager",
  },
  {
    text: "Best coffee in town! Highly recommend the Cappuccino.",
    author: "Sarah Lee",
    role: "Software Engineer",
  },
  {
    text: "I love the variety and the quality. Always a perfect start to my day.",
    author: "Michael Johnson",
    role: "Marketing Specialist",
  },
  {
    text: "Friendly staff and excellent service. My favorite coffee shop!",
    author: "Emily Davis",
    role: "Graphic Designer",
  },
  {
    text: "Absolutely love the cozy atmosphere and friendly staff. The Mocha is a must-try!",
    author: "Daniel Johnson",
    role: "Marketing Specialist",
  },
  {
    text: "Great spot for both work and relaxation. The Espresso is top-notch!",
    author: "James Parker",
    role: "Project Manager",
  },
];

const coffeeData = [
  {
    name: "Arabica Dark Roast",
    image: "images/coffee_packs/arabica_dark_roast.png",
    description: "Rich and smooth, with chocolate notes.",
    price: "$12.00",
  },
  {
    name: "Ethiopian Blend",
    image: "images/coffee_packs/ethiopian_blend.png",
    description: "Bright and fruity, with a floral aroma.",
    price: "$14.00",
  },
  {
    name: "Colombian Supremo",
    image: "images/coffee_packs/colombian_supremo.png",
    description: "Bold flavor with a nutty undertone.",
    price: "$13.00",
  },
  {
    name: "Brazilian Santos",
    image: "images/coffee_packs/arabica_dark_roast.png",
    description: "Smooth and sweet with caramel notes.",
    price: "$11.50",
  },
];

const drinksContainer = document.getElementById("drinks-container");
const sliderContainer = document.querySelector(".slider-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const sliderDotsContainer = document.getElementById("slider-dots");

let index = 0;
const maxVisibleCards = 4;

function renderDrinks() {
  drinksContainer.innerHTML = "";
  drinksData.forEach((drink) => {
    const drinkCard = document.createElement("div");
    drinkCard.classList.add("drink-card");
    drinkCard.innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <div class="drink-info">
                <h3>${drink.name}</h3>
                <p>${drink.description}</p>
                <p class="drink-price">${drink.price}</p>
                <a class="order-now" href="menu.html">Order Now</a>
            </div>
        `;
    drinksContainer.appendChild(drinkCard);
  });

  sliderDotsContainer.innerHTML = "";
  let totalSlides = Math.ceil(drinksData.length / maxVisibleCards);
  for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i * maxVisibleCards;
      updateSlider();
    });
    sliderDotsContainer.appendChild(dot);
  }

  if (drinksData.length > maxVisibleCards) {
    sliderContainer.style.display = "flex";
    sliderDotsContainer.style.display = "flex";
  } else {
    sliderContainer.style.display = "block";
    sliderDotsContainer.style.display = "none";
  }
}

function updateSlider() {
  const cardWidth = document.querySelector(".drink-card").offsetWidth;
  const totalCards = drinksData.length;
  const maxIndex = Math.max(0, totalCards - maxVisibleCards);

  if (index > maxIndex) index = maxIndex;
  if (index < 0) index = 0;

  drinksContainer.style.transform = `translateX(-${
    index * (cardWidth + 20)
  }px)`;

  document.querySelectorAll(".slider-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === Math.floor(index / maxVisibleCards));
  });
}

leftBtn.addEventListener("click", () => {
  index -= maxVisibleCards;
  updateSlider();
});

rightBtn.addEventListener("click", () => {
  index += maxVisibleCards;
  updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  renderDrinks();
  updateSlider();
});

window.addEventListener("resize", updateSlider);

const featuresContainer = document.getElementById("features-container");

function renderFeatures() {
  featuresContainer.innerHTML = "";
  featuresData.forEach((feature) => {
    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = `
            <img src="${feature.image}" alt="${feature.title}">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
    featuresContainer.appendChild(featureCard);
  });
}

document.addEventListener("DOMContentLoaded", renderFeatures);

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const discoverSection = document.querySelector(".discover");

  window.addEventListener("scroll", function () {
    const discoverTop = discoverSection.getBoundingClientRect().top;
    if (discoverTop <= 0) {
      header.style.position = "fixed";
      header.style.backgroundColor = "#603809";
      header.style.transition = "background-color 0.3s ease-in-out";
    } else {
      header.style.position = "absolute";
      header.style.backgroundColor = "transparent";
    }
  });
});

const feedbackContainer = document.getElementById("feedback-cards-container");
const feedbackLeftBtn = document.querySelector(".feedback-left-btn");
const feedbackRightBtn = document.querySelector(".feedback-right-btn");

let feedbackIndex = 0;
const maxFeedbackVisible = 2;

function renderFeedback() {
  feedbackContainer.innerHTML = "";
  feedbackData.forEach((feedback) => {
    const feedbackCard = document.createElement("div");
    feedbackCard.classList.add("feedback-card");
    feedbackCard.innerHTML = `
      <p>${feedback.text}</p>
      <div class="feedback-author">${feedback.author}</div>
      <div class="feedback-role">${feedback.role}</div>
    `;
    feedbackContainer.appendChild(feedbackCard);
  });
}

function updateFeedbackSlider() {
  const cardWidth = document.querySelector(".feedback-card").offsetWidth;
  feedbackContainer.style.transform = `translateX(-${
    feedbackIndex * (cardWidth + 20)
  }px)`;
}

feedbackLeftBtn.addEventListener("click", () => {
  feedbackIndex = Math.max(0, feedbackIndex - maxFeedbackVisible);
  updateFeedbackSlider();
});

feedbackRightBtn.addEventListener("click", () => {
  const maxIndex = feedbackData.length - maxFeedbackVisible;
  feedbackIndex = Math.min(maxIndex, feedbackIndex + maxFeedbackVisible);
  updateFeedbackSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  renderFeedback();
  updateFeedbackSlider();
});

const coffeeContainer = document.getElementById("coffee-packs-container");
const shopLeftBtn = document.querySelector(".shop-left-btn");
const shopRightBtn = document.querySelector(".shop-right-btn");

let coffeeIndex = 0;
const maxVisibleCoffeeCards = 3;

function renderCoffeePacks() {
  coffeeContainer.innerHTML = "";
  coffeeData.forEach((coffee) => {
    const coffeeCard = document.createElement("div");
    coffeeCard.classList.add("coffee-card");
    coffeeCard.innerHTML = `
      <img src="${coffee.image}" alt="${coffee.name}" />
      <div class="coffee-info">
        <h3>${coffee.name}</h3>
        <p>${coffee.description}</p>
        <p class="coffee-price">${coffee.price}</p>
      </div>
    `;
    coffeeContainer.appendChild(coffeeCard);
  });
}

function updateCoffeeSlider() {
  const cardWidth = document.querySelector(".coffee-card").offsetWidth;
  const totalCards = coffeeData.length;
  const maxIndex = Math.max(0, totalCards - maxVisibleCoffeeCards);

  if (coffeeIndex > maxIndex) coffeeIndex = maxIndex;
  if (coffeeIndex < 0) coffeeIndex = 0;

  coffeeContainer.style.transform = `translateX(-${
    coffeeIndex * (cardWidth + 20)
  }px)`;

  // Disabling buttons if limits are reached
  shopLeftBtn.disabled = coffeeIndex === 0;
  shopRightBtn.disabled = coffeeIndex === maxIndex;
}

// Navigation by buttons
shopLeftBtn.addEventListener("click", () => {
  coffeeIndex -= maxVisibleCoffeeCards;
  updateCoffeeSlider();
});

shopRightBtn.addEventListener("click", () => {
  coffeeIndex += maxVisibleCoffeeCards;
  updateCoffeeSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  renderCoffeePacks();
  updateCoffeeSlider();
});

window.addEventListener("resize", updateCoffeeSlider);

const menuButton = document.getElementById("menuButton");
const header = document.querySelector(".header");

menuButton.addEventListener("click", () => {
  header.classList.toggle("open");
});
