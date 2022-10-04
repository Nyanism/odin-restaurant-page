export default function contactPage(){
  const contentDiv = document.querySelector("#content");

  const contactImage = document.createElement("img");
  contactImage.setAttribute("src", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  contactImage.setAttribute("alt", "The interior of a black-themed restaurant");
  contactImage.classList.add("contact", "contact-bg");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  headline.classList.add("contact", "contact-headline");

  const mainDetails = document.createElement("p");
  mainDetails.textContent = "themockrestaurant@mockgroup.com\r\n";
  mainDetails.textContent += "65550442";
  mainDetails.classList.add("contact", "contact-copy");

  const headlineDetails = document.createElement("div");
  headlineDetails.classList.add("contact", "headline-details");
  headlineDetails.appendChild(headline);
  headlineDetails.appendChild(mainDetails);

  contentDiv.appendChild(contactImage);
  contentDiv.appendChild(headlineDetails);
}