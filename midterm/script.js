const N = 88;
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const sortBtn = document.getElementById("sort-btn");
const noResults = document.getElementById("no-results");
const radios = document.querySelectorAll('input[name="category"]');

// Work with the cards already on the page
const getCards = () => [...grid.querySelectorAll(":scope > .col")];
const getName = (card) =>
  card.querySelector(".card-title").textContent.trim().toLowerCase();
const getPrice = (card) =>
  parseInt(
    card.querySelector(".card-text").textContent.replace(/[^\d]/g, ""),
    10,
  );

// Search + category together
function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const cat = document.querySelector('input[name="category"]:checked').value;
  let visible = 0;

  getCards().forEach((card) => {
    const matchesSearch = getName(card).includes(q);
    const matchesCat = cat === "all" || card.dataset.category === cat;

    card.classList.toggle("d-none", !matchesSearch); // CSS from Task 1 hides by category
    if (matchesSearch && matchesCat) visible++;
  });

  grid.classList.toggle("d-none", visible === 0);
  noResults.classList.toggle("d-none", visible !== 0);
}

search.addEventListener("input", applyFilters);
radios.forEach((r) => r.addEventListener("change", applyFilters));

// Sort by price: low to high, then high to low, and so on
let ascending = true;
sortBtn.addEventListener("click", () => {
  const sorted = getCards().sort((a, b) =>
    ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a),
  );
  sorted.forEach((card) => grid.appendChild(card)); // moves the existing elements
  ascending = !ascending;
});

// "Premium" label for prices above N x 100 = 8,800
getCards().forEach((card) => {
  if (getPrice(card) > N * 100) {
    const inner = card.querySelector(".card");
    inner.classList.add("position-relative");
    const badge = document.createElement("span");
    badge.className =
      "badge bg-warning text-dark position-absolute top-0 start-0 m-2";
    badge.textContent = "Premium";
    inner.appendChild(badge);
  }
});
