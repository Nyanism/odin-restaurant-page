export default function homePage(){
  const contentDiv = document.querySelector("#content");

  const chefImage = document.createElement("img");
  chefImage.setAttribute("src", "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  chefImage.setAttribute("alt", "A chef cooking food atop an open grill");
  chefImage.classList.add("home", "home-bg");

  const headline = document.createElement("h1");
  headline.textContent = "Ready for the gastronomic experience of your lifetime?";
  headline.classList.add("home", "home-headline");

  const mainCopy = document.createElement("p");
  mainCopy.textContent = "Hailing from various parts of the world, our team of well-trained chefs are ready to serve you the most incredible food full of essence and soul.";
  mainCopy.classList.add("home", "home-copy");

  const headlineCopy = document.createElement("div");
  headlineCopy.classList.add("home", "headline-copy");
  headlineCopy.appendChild(headline);
  headlineCopy.appendChild(mainCopy);

  contentDiv.appendChild(chefImage);
  contentDiv.appendChild(headlineCopy);
};