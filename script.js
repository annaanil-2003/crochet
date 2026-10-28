// EDIT THIS: Add your WhatsApp number with country code, digits only.
// Example for India: 919876543210 (do not include +, spaces, or dashes).
const WHATSAPP_NUMBER = "918078174990";

// EDIT THESE: Sample products and prices. Replace images with your own
// by changing image to a local path such as "images/rose-bouquet.jpg".
// The current photos are illustrative placeholders, not actual crochet products.
const products = [
  {name:"Artificial Flower Bouquet",category:"bouquets",price:799 ,description:"A forever-blooming gift of love.",image: "WhatsApp Image 2026-10-22 at 00.15.36.jpeg"},
  {name:"Cute Crochet Duckling",category:"plushies",price:699 ,description:"A cheerful bunch to brighten a day.",image:"WhatsApp Image 2026-10-22 at 00.18.48.jpeg"},
  {name:"Mini Crochet World Cup",category:"plushies",price:899,description:"Soft colors and everlasting smiles.",image:"WhatsApp Image 2026-10-22 at 00.19.53.jpeg"},
  {name:"Crochet Baby Boots",category:"baby",price:599,description:"Your new soft little best friend.",image:"WhatsApp Image 2026-10-22 at 00.19.54.jpeg"},
  {name:"Bag Embroidery",category:"embroidery",price:549,description:"A pocket-sized bundle of comfort.",image:"WhatsApp Image 2026-10-22 at 00.23.28.jpeg"},
  {name:"Cute Bunny ",category:"plushies",price:649,description:"Made for hugs and happy moments.",image:"WhatsApp Image 2026-10-22 at 00.23.29.jpeg"},
  {name:"Spiderman",category:"plushies",price:649,description:"Made for hugs and happy moments.",image:"WhatsApp Image 2026-10-22 at 00.30.00.jpeg"}
];

const grid = document.querySelector("#product-grid");
const formatPrice = price => `₹${price.toLocaleString("en-IN")}`;
const whatsappLink = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function renderProducts(filter="all") {
  const visible = products.filter(p => filter === "all" || p.category === filter);
  grid.replaceChildren();
  visible.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    const imageWrap = document.createElement("div"); imageWrap.className = "product-image";
    const img = document.createElement("img"); img.src=product.image; img.alt=product.name+" (illustrative placeholder photo)"; img.loading="lazy";
    const tag = document.createElement("span"); tag.className="product-tag"; tag.textContent=product.tag;
    imageWrap.append(img,tag);
    const info = document.createElement("div"); info.className="product-info";
    const title = document.createElement("h3"); title.textContent=product.name;
    const desc = document.createElement("p"); desc.textContent=product.description;
    const bottom = document.createElement("div"); bottom.className="product-bottom";
    const price = document.createElement("span"); price.className="price"; price.textContent=formatPrice(product.price);
    const order = document.createElement("a"); order.className="order-btn"; order.textContent="Order ↗"; order.target="_blank"; order.rel="noopener noreferrer";
    order.href=whatsappLink(`Hi! I'm interested in the ${product.name} (${formatPrice(product.price)}). Is it available?`);
    bottom.append(price,order); info.append(title,desc,bottom); card.append(imageWrap,info); grid.append(card);
  });
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => {b.classList.remove("active");b.setAttribute("aria-pressed","false");});
  button.classList.add("active");button.setAttribute("aria-pressed","true");renderProducts(button.dataset.filter);
}));

const menuToggle=document.querySelector(".menu-toggle"), navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>{const isOpen=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(isOpen));menuToggle.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");menuToggle.textContent=isOpen?"✕":"☰";});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Open navigation");menuToggle.textContent="☰";}));
document.querySelector("#contact-whatsapp").href=whatsappLink("Hi! I'd like to know more about your crochet products and custom orders.");
document.querySelector("#year").textContent=new Date().getFullYear();
renderProducts();
