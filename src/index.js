import homePage from "./home.js";

function displayNavBar(){
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  const navLinks = document.createElement("ul");

  const homeLink = document.createElement("li");
  homeLink.textContent = "Home";
  homeLink.addEventListener("click", () => {
    const menuNodes = document.querySelectorAll(".menu");
    menuNodes.forEach((node) => {
      node.remove();
    });

    const contactNodes = document.querySelectorAll(".contact");
    contactNodes.forEach((node) => {
      node.remove;
    });

    homePage();
  });

  const menuLink = document.createElement("li");
  menuLink.textContent = "Links";
  menuLink.addEventListener("click", () => {
    const homeNodes = document.querySelectorAll(".home");
    homeNodes.forEach((node) => {
      node.remove();
    });

    const contactNodes = document.querySelectorAll(".contact");
    contactNodes.forEach((node) => {
      node.remove;
    });

    menuPage();
  });

  const contactLink = document.createElement("li");
  contactLink.textContent = "Contact";
  homeLink.addEventListener("click", () => {
    const menuNodes = document.querySelectorAll(".menu");
    menuNodes.forEach((node) => {
      node.remove();
    });

    const homeNodes = document.querySelectorAll(".home");
    homeNodes.forEach((node) => {
      node.remove;
    });

    contactPage();
  });

  navLinks.appendChild(homeLink);
  navLinks.appendChild(menuLink);
  navLinks.appendChild(contactLink);
  navBar.appendChild(navLinks);
  document.querySelector("#content").appendChild(navBar);
};

displayNavBar();

homePage();
