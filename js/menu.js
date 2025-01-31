const menuItems = {
  coffee: [
    {
      name: "Cappuccino",
      image: "images/coffee/cappuccino.png",
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
      name: "Latte",
      image: "images/coffee/latte.png",
      description: "Coffee 50% | Milk 50%",
      price: "$8.50",
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
      description: "Coffee 50% | Milk 50%",
      price: "$6.50",
    },
    {
      name: "Mocha",
      image: "images/coffee/mocha.png",
      description: "Coffee 50% | Milk 50%",
      price: "$6.50",
    },
    {
      name: "Irish",
      image: "images/coffee/irish.png",
      description: "Coffee 30% | Milk 50%",
      price: "$6.50",
    },
  ],
  tea: [
    {
      name: "Green Tea",
      image: "images/tea/green_tea.png",
      description: "Fresh and calming",
      price: "$4.50",
    },
    {
      name: "Black Tea",
      image: "images/tea/black_tea.png",
      description: "Strong and energizing",
      price: "$4.00",
    },
    {
      name: "Fruit Tea",
      image: "images/tea/fruit_tea.png",
      description: "Sweet, refreshing, and full of life",
      price: "$4.00",
    },
    {
      name: "Herbal Tea",
      image: "images/tea/herbal_tea.png",
      description: "Calming, nourishing",
      price: "$4.00",
    },
  ],
  pastries: [
    {
      name: "Croissant",
      image: "images/pastries/croissant.png",
      description: "Buttery and flaky",
      price: "$3.50",
    },
    {
      name: "Muffin",
      image: "images/pastries/muffin.png",
      description: "Soft and sweet",
      price: "$3.00",
    },
    {
      name: "Сheesecake",
      image: "images/pastries/cheesecake.png",
      description: "Creamy, rich, and irresistibly smooth",
      price: "$5.00",
    },
    {
      name: "Apple Charlotte",
      image: "images/pastries/apple_charlotte.png",
      description: "Warm, spiced apples with a soft",
      price: "$4.50",
    },
  ],
  juice: [
    {
      name: "Apple juice",
      image: "images/juice/apple_juice.png",
      description: "Crisp and refreshing",
      price: "$4.00",
    },
    {
      name: "Orange Juice",
      image: "images/juice/orange_juice.png",
      description: "Bright and invigorating",
      price: "$4.00",
    },
    {
      name: "Сarrot Juice",
      image: "images/juice/carrot_juice.png",
      description: "Fresh, vibrant, and packed with natural goodness",
      price: "$4.00",
    },
  ],
};

const menuContainer = document.getElementById("menu-container");
const categoryButtons = document.querySelectorAll(".menu-category");

function renderMenu(category) {
  menuContainer.innerHTML = "";
  menuItems[category].forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-content">
          <h3 class="menu-item-title">${item.name}</h3>
          <p class="menu-item-description">${item.description}</p>
          <p class="menu-item-price">${item.price}</p>
        </div>
      `;
    menuContainer.appendChild(menuItem);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderMenu("coffee");
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const menuSection = document.querySelector(".menu-section");

  window.addEventListener("scroll", function () {
    const menuSectionTop = menuSection.getBoundingClientRect().top;

    if (menuSectionTop <= 0) {
      header.style.position = "fixed";
      header.style.backgroundColor = "#603809";
      header.style.transition = "background-color 0.3s ease-in-out";
      header.style.top = "0";
      header.style.width = "100%";
      header.style.zIndex = "10";
    } else {
      header.style.position = "absolute";
      header.style.backgroundColor = "transparent";
    }
  });
});
