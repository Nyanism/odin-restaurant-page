export default function menuPage() {
  const contentDiv = document.querySelector("#content");

  const menuImage = document.createElement("img");
  menuImage.setAttribute("src", "https://images.unsplash.com/photo-1633504498295-50aa936d57bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80");
  menuImage.setAttribute("alt", "A set of cutlery and a menu on a tbale");
  menuImage.classList.add("menu", "menu-bg");

  const headline = document.createElement("h1");
  headline.textContent = "Menu";
  headline.classList.add("menu", "menu-headline");

  const menuList = document.createElement("ul");
  let foodOne = document.createElement("li");
  foodOne.textContent = "Pizza";
  let foodTwo = document.createElement("li");
  foodTwo.textContent = "Chocolate Cake";
  let foodThree = document.createElement("li");
  foodThree.textContent = "Sparkling Wine";
  menuList.appendChild(foodOne);
  menuList.appendChild(foodTwo);
  menuList.appendChild(foodThree);
  menuList.classList.add("menu", "menu-ist")

  const headlineMenu = document.createElement("div");
  headlineMenu.classList.add("menu", "headline-menu");
  headlineMenu.appendChild(headline);
  headlineMenu.appendChild(menuList);

  contentDiv.appendChild(menuImage);
  contentDiv.appendChild(headlineMenu);
};
