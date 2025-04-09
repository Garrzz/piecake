// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // Selama yg diklik bukan navbar dan bukan hamburger
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Hilangkan class active
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const btn = document.querySelector(".beli-sekarang"); // Pastikan class ini ada di button
  const closeBtn = document.querySelector(".close");
  const orderForm = document.getElementById("order-form");

  // Pastikan modal tersembunyi saat awal load
  modal.style.display = "none";

  // Tampilkan modal saat tombol "Beli Sekarang" ditekan
  btn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Tutup modal saat tombol close ditekan
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Tutup modal jika klik di luar modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search");
  const searchModal = document.createElement("div");
  const overlay = document.createElement("div");
  const menuItems = document.querySelectorAll(".menu-item");
  const productItems = document.querySelectorAll(".product-card");

  // Tambahkan overlay
  overlay.classList.add("modal-overlay");
  document.body.appendChild(overlay);

  // Modal Search
  searchModal.id = "search-modal";
  searchModal.innerHTML = `
      <h2>Cari Produk atau Menu</h2>
      <input type="text" id="search-input" placeholder="Cari cake favoritmu..." onkeyup="searchItems()">
      <ul id="search-results"></ul>
      <button onclick="closeModal()">Tutup</button>
  `;
  document.body.appendChild(searchModal);

  // Event untuk membuka modal pencarian
  searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(searchModal);
  });

  // Fungsi buka modal
  function openModal(modal) {
      modal.style.display = "block";
      overlay.style.display = "block";
  }

  // Fungsi tutup modal
  window.closeModal = function () {
      searchModal.style.display = "none";
      overlay.style.display = "none";
  };

  // Fungsi pencarian
  window.searchItems = function () {
      const query = document.getElementById("search-input").value.toLowerCase();
      const resultsList = document.getElementById("search-results");
      resultsList.innerHTML = ""; // Kosongkan hasil sebelumnya

      if (query.length > 0) {
          menuItems.forEach(item => {
              const name = item.querySelector("h3").innerText.toLowerCase();
              if (name.includes(query)) {
                  resultsList.innerHTML += `<li onclick="highlightItem('${name}')">${name} - Menu</li>`;
              }
          });

          productItems.forEach(item => {
              const name = item.querySelector("h3").innerText.toLowerCase();
              if (name.includes(query)) {
                  resultsList.innerHTML += `<li onclick="highlightItem('${name}')">${name} - Produk</li>`;
              }
          });
      }
  };

  // Fungsi highlight item saat diklik dari hasil pencarian
  window.highlightItem = function (itemName) {
      const allItems = [...menuItems, ...productItems];
      allItems.forEach(item => {
          const name = item.querySelector("h3").innerText.toLowerCase();
          if (name === itemName.toLowerCase()) {
              item.scrollIntoView({ behavior: "smooth", block: "center" });
              item.style.border = "2px solid #ff6600"; // Highlight item
              setTimeout(() => item.style.border = "none", 2000);
              closeModal();
          }
      });
  };
});

// Ambil elemen
const cartBtn = document.getElementById('cartBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Buka popup saat ikon cart diklik
cartBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Tutup popup saat tombol X diklik
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Tutup popup jika klik di luar kotaknya
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
}
});