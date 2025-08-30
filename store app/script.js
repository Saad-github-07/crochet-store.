// --- Quick config ---
// Replace this with your WhatsApp number (with country code). Example: +919876543210
const WHATSAPP_NUMBER = "+91XXXXXXXXXX";

// Optional: currency to display when you add prices later.
const CURRENCY = "₹";

// --- Product catalog ---
const PRODUCTS = [
  {
    id: "cream-pearl-flower",
    name: "Cream Pearl Flower Charm",
    description: "Hand-crocheted flower with pearl cluster. Cute add-on for keys or pouches.",
    image: "./assets/product-1.jpg",
    price: null // set a number like 199 to show a price
  },
  {
    id: "cream-flower-bag-charm",
    name: "Cream Flower Bag Charm",
    description: "Minimal cream flower charm. Looks lovely on tote bags.",
    image: "./assets/product-4.jpg",
    price: null
  },
  {
    id: "purple-star-bookmark",
    name: "Purple Star Bookmark",
    description: "Crochet star bookmark with soft tail cord. Perfect for journals.",
    image: "./assets/product-3.jpg",
    price: null
  },
  {
    id: "cream-flower-closeup",
    name: "Cream Flower (close-up)",
    description: "Pearl-center flower charm in soft yarn. Limited stock.",
    image: "./assets/product-2.jpg",
    price: null
  }
];

function encodeWhatsAppMessage(product) {
  const text = `Hello! I'm interested in: ${product.name} (${product.id}).`;
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d+]/g,'')}/?text=${encodeURIComponent(text)}`;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  PRODUCTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="body">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <div class="price">${p.price ? (CURRENCY + p.price) : "Contact for price"}</div>
      </div>
      <div class="actions">
        <a class="btn-outline" href="${encodeWhatsAppMessage(p)}" target="_blank" rel="noopener">Order on WhatsApp</a>
        <a class="btn-outline" href="${p.image}" download>Download Photo</a>
      </div>
    `;
    grid.appendChild(card);
  });

  // set contact link in footer section too
  const whatsLink = document.getElementById("whats-link");
  if (whatsLink) whatsLink.href = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d+]/g,'')}`;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
