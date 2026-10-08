"use strict";
const heartIcon = `<svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.3 5.7a5.1 5.1 0 0 0-7.2 0L12 6.8l-1.1-1.1a5.1 5.1 0 0 0-7.2 7.2l7.6 7.1a1 1 0 0 0 1.4 0l7.6-7.1a5.1 5.1 0 0 0 0-7.2Z"/></svg>`;
const asset = (name) => `assets/${name}`;
const samples = [
  {
    id: "chair",
    title: "Your new favorite study chair",
    category: "Furniture",
    mode: "buy",
    price: 45,
    condition: "Good",
    seller: "Jamie K.",
    location: "USC Village",
    image: "chair.webp",
    description:
      "A warm wood accent chair with a woven seat. A few small signs of use, plenty of study sessions left. Easy to carry home with a friend.",
  },
  {
    id: "books",
    title: "Calculus, minus the full price",
    category: "Textbooks",
    mode: "buy",
    price: 25,
    condition: "Well loved",
    seller: "Alex M.",
    location: "Leavey Library",
    image: "books.svg",
    description:
      "A sample calculus textbook listing. Light highlighting and notes in the margins. In a real exchange, confirm the edition and ISBN match your course before arranging pickup.",
  },
  {
    id: "camera",
    title: "A camera for the weekend",
    category: "Electronics",
    mode: "rent",
    price: 12,
    condition: "Like new",
    seller: "Sam R.",
    location: "USC Village",
    image: "camera.svg",
    description:
      "A compact digital camera for a weekend around LA. Sample rental includes a strap and charger. Price is per day; availability and return time would be arranged with the owner.",
  },
  {
    id: "sideboard",
    title: "A little more room for everything",
    category: "Furniture",
    mode: "buy",
    price: 65,
    condition: "Good",
    seller: "Taylor L.",
    location: "USC Village",
    image: "sideboard.webp",
    description:
      "A wooden sideboard for books, dishes, and all the things that need a home. Bring a friend to help carry it. Confirm dimensions before pickup.",
  },
  {
    id: "headphones",
    title: "Find your focus headphones",
    category: "Electronics",
    mode: "buy",
    price: 35,
    condition: "Good",
    seller: "Jordan P.",
    location: "Leavey Library",
    image: "headphones.svg",
    description:
      "Over-ear wireless headphones for long library sessions. Sample listing with a charging cable included. Check fit, battery life, and sound in person before buying.",
  },
  {
    id: "storage",
    title: "Small space, smarter storage",
    category: "Furniture",
    mode: "rent",
    price: 4,
    condition: "Good",
    seller: "Casey W.",
    location: "USC Village",
    image: "storage.webp",
    description:
      "A compact wooden storage unit for a temporary setup. Sample rental priced per day. Agree on pickup, return date, and transport with the owner.",
  },
  {
    id: "lamp",
    title: "For one more chapter",
    category: "Everyday",
    mode: "buy",
    price: 18,
    condition: "Like new",
    seller: "Morgan S.",
    location: "Ronald Tutor Campus Center",
    image: "lamp.svg",
    description:
      "A simple desk lamp for late-night reading. Warm light, adjustable shade, and a small footprint. A sample listing for your next study corner.",
  },
  {
    id: "bookset",
    title: "A fresh perspective on economics",
    category: "Textbooks",
    mode: "buy",
    price: 20,
    condition: "Good",
    seller: "Riley T.",
    location: "Leavey Library",
    image: "economics.svg",
    description:
      "A sample economics textbook listing with a few highlighted pages. Always confirm the required edition and ISBN with your course syllabus.",
  },
  {
    id: "projector",
    title: "Movie night, sorted",
    category: "Electronics",
    mode: "rent",
    price: 10,
    condition: "Good",
    seller: "Drew C.",
    location: "USC Village",
    image: "projector.svg",
    description:
      "A portable projector for a night in with friends. Sample rental includes power and HDMI cables. Price is per day; check availability with the owner.",
  },
];
const categories = ["Textbooks", "Furniture", "Electronics", "Everyday"];
const locations = [
  "USC Village",
  "Leavey Library",
  "Ronald Tutor Campus Center",
];
const fallback = {
  Textbooks: "books.svg",
  Furniture: "chair.webp",
  Electronics: "camera.svg",
  Everyday: "lamp.svg",
};
const storageKey = "trojan-trade-demo-v1";
let stored = {};
try {
  stored = JSON.parse(localStorage.getItem(storageKey)) || {};
} catch {
  /* Browsing works when storage is unavailable. */
}
const isListing = (item) =>
  item &&
  typeof item.id === "string" &&
  item.id.startsWith("local-") &&
  typeof item.title === "string" &&
  item.title.trim().length > 0 &&
  item.title.length <= 70 &&
  typeof item.description === "string" &&
  item.description.length <= 500 &&
  categories.includes(item.category) &&
  ["buy", "rent"].includes(item.mode) &&
  Number.isFinite(item.price) &&
  item.price >= 1 &&
  item.price <= 10000 &&
  ["Like new", "Good", "Well loved"].includes(item.condition) &&
  locations.includes(item.location);
let ownListings = (Array.isArray(stored.listings) ? stored.listings : [])
  .filter(isListing)
  .slice(0, 50)
  .map((item) => ({ ...item, seller: "You", image: fallback[item.category] }));
const products = () => [...ownListings, ...samples];
const validIds = new Set(products().map((item) => item.id));
let saved = new Set(
  (Array.isArray(stored.saved) ? stored.saved : []).filter((id) =>
    validIds.has(id),
  ),
);
let query = "",
  category = "All",
  mode = "all",
  sort = "newest",
  savedOnly = false;
const grid = document.querySelector("#product-grid");
const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(value);
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
let toastTimer;
function notify(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 4000);
}
function persist() {
  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ saved: [...saved], listings: ownListings }),
    );
    return true;
  } catch {
    notify(
      "Browser storage is unavailable. Changes will last for this visit only.",
    );
    return false;
  }
}
function render() {
  let visible = products().filter(
    (item) =>
      (category === "All" || item.category === category) &&
      (mode === "all" || item.mode === mode) &&
      (!savedOnly || saved.has(item.id)) &&
      `${item.title} ${item.category} ${item.description} ${item.location}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  if (sort !== "newest")
    visible.sort((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price,
    );
  grid.innerHTML = visible
    .map(
      (item) =>
        `<article class="product-card"><div class="product-photo"><a href="#${escape(item.id)}" data-detail="${escape(item.id)}" aria-label="View ${escape(item.title)}"><img src="${asset(item.image)}" alt="${escape(item.title)}" loading="lazy" width="500" height="360"></a><span class="condition">${escape(item.condition)}</span><button class="favorite" data-save="${escape(item.id)}" aria-pressed="${saved.has(item.id)}" aria-label="${saved.has(item.id) ? "Unsave" : "Save"} ${escape(item.title)}">${heartIcon}</button></div><div class="product-meta"><span>${escape(item.category)}</span><span class="${item.mode === "rent" ? "rental-tag" : ""}">${item.mode === "rent" ? "↻ For rent" : "For sale"}</span></div><div class="product-title-row"><h3><a href="#${escape(item.id)}" data-detail="${escape(item.id)}">${escape(item.title)}</a></h3><span class="price">${money(item.price)}${item.mode === "rent" ? "<small> / day</small>" : ""}</span></div><div class="seller-line"><span class="avatar" aria-hidden="true">${escape(item.seller.slice(0, 1))}</span><span>${escape(item.seller)}</span><span class="location">⌖ ${escape(item.location)}</span></div></article>`,
    )
    .join("");
  document.querySelector("#result-count").textContent =
    `${visible.length} ${savedOnly ? "saved " : ""}${visible.length === 1 ? "find" : "finds"}${category === "All" ? "" : ` in ${category.toLowerCase()}`}`;
  document.querySelector("#empty-state").hidden = visible.length > 0;
  document.querySelector("#empty-copy").textContent = savedOnly
    ? "Save a find with the heart button, or reset your filters to see more."
    : "Try a different search or give another category a look.";
  document.querySelector("#saved-count").textContent = saved.size;
  document
    .querySelector("#saved-toggle")
    .setAttribute("aria-pressed", String(savedOnly));
  document
    .querySelectorAll("[data-category]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === category),
      ),
    );
  document
    .querySelectorAll("[data-mode]")
    .forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.mode === mode)),
    );
}
function resetFilters() {
  query = "";
  category = "All";
  mode = "all";
  savedOnly = false;
  sort = "newest";
  document.querySelector("#search").value = "";
  document.querySelector("#sort").value = "newest";
  render();
}
const dialogTriggers = new WeakMap();
function openDialog(dialog, trigger = document.activeElement) {
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
}
function details(id, trigger) {
  const item = products().find((product) => product.id === id);
  if (!item) return;
  document.querySelector("#detail-content").innerHTML =
    `<img class="detail-image" src="${asset(item.image)}" alt="${escape(item.title)}"><h2 id="detail-title">${escape(item.title)}</h2><div class="detail-price">${money(item.price)}${item.mode === "rent" ? " <small>/ day</small>" : ""}</div><div class="detail-facts"><span>${escape(item.condition)}</span><span>${item.mode === "rent" ? "For rent" : "For sale"}</span><span>⌖ ${escape(item.location)}</span></div><p>${escape(item.description)}</p><p style="margin-top:14px">Listed by ${escape(item.seller)} · ${item.id.startsWith("local-") ? "Your demo listing" : "Sample student listing"}</p><div class="demo-note">Portfolio demo: this listing is illustrative. No message will be sent and no item can be purchased or reserved.</div>${item.id.startsWith("local-") ? '<button type="button" class="text-button" id="remove-listing" style="margin-top:15px">Remove my demo listing</button>' : ""}<form id="message-form"><label for="message-draft">Try drafting a message<textarea id="message-draft" name="message" rows="3" required maxlength="500">Hi ${escape(item.seller.split(" ")[0])}! Is this ${item.mode === "rent" ? "available to rent" : "still available"}? I'd love to arrange a campus pickup.</textarea></label><button type="submit" class="button primary">Preview message →</button><p id="message-feedback" role="status" style="margin-top:12px"></p></form>`;
  document.querySelector("#remove-listing")?.addEventListener("click", () => {
    ownListings = ownListings.filter((listing) => listing.id !== id);
    saved.delete(id);
    const persisted = persist();
    document.querySelector("#detail-dialog").close();
    render();
    document.querySelector("#search").focus({ preventScroll: true });
    if (persisted) notify("Your demo listing was removed.");
  });
  document
    .querySelector("#message-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const field = event.currentTarget.elements.message;
      if (!field.value.trim()) {
        field.setCustomValidity("Please write a message first.");
        field.reportValidity();
        return;
      }
      document.querySelector("#message-feedback").textContent =
        `Your message preview: “${field.value.trim()}” — Demo only; nothing was sent.`;
    });
  document
    .querySelector("#message-draft")
    .addEventListener("input", (event) => event.target.setCustomValidity(""));
  openDialog(document.querySelector("#detail-dialog"), trigger);
}
document.addEventListener("click", (event) => {
  const open = event.target.closest("[data-open]");
  if (open) openDialog(document.getElementById(open.dataset.open), open);
  const detail = event.target.closest("[data-detail]");
  if (detail) {
    event.preventDefault();
    details(detail.dataset.detail, detail);
  }
  const favorite = event.target.closest("[data-save]");
  if (favorite) {
    const id = favorite.dataset.save;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    render();
    const replacement = [...grid.querySelectorAll("[data-save]")].find(
      (button) => button.dataset.save === id,
    );
    (replacement || document.querySelector("#saved-toggle")).focus({
      preventScroll: true,
    });
    if (persist())
      notify(
        saved.has(id)
          ? "Saved for later. Good find!"
          : "Removed from your saved finds.",
      );
  }
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    category = categoryButton.dataset.category;
    render();
  }
  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    mode = modeButton.dataset.mode;
    render();
  }
  const close = event.target.closest(".close-dialog");
  if (close) close.closest("dialog").close();
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () =>
    dialogTriggers.get(dialog)?.focus({ preventScroll: true }),
  );
});
document.querySelector("#search").addEventListener("input", (event) => {
  query = event.target.value;
  render();
});
document.querySelector("#sort").addEventListener("change", (event) => {
  sort = event.target.value;
  render();
});
document
  .querySelector("#reset-filters")
  .addEventListener("click", resetFilters);
document.querySelector("#saved-toggle").addEventListener("click", () => {
  const next = !savedOnly;
  resetFilters();
  savedOnly = next;
  render();
  document.querySelector("#marketplace").scrollIntoView({ behavior: "smooth" });
});
document
  .querySelector("#listing-form")
  .addEventListener("input", (event) => event.target.setCustomValidity?.(""));
document.querySelector("#listing-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  for (const name of ["title", "description"]) {
    const field = form.elements[name];
    if (field.value.trim().length < (name === "description" ? 10 : 1)) {
      field.setCustomValidity(
        name === "description"
          ? "Add at least 10 characters describing your item."
          : "Please enter an item name.",
      );
      field.reportValidity();
      return;
    }
  }
  if (ownListings.length >= 50) {
    notify("This demo supports up to 50 local listings.");
    return;
  }
  const data = Object.fromEntries(new FormData(form));
  ownListings.unshift({
    id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: data.title.trim(),
    description: data.description.trim(),
    price: Number(data.price),
    category: data.category,
    mode: data.mode,
    condition: data.condition,
    location: data.location,
    seller: "You",
    image: fallback[data.category],
  });
  const persisted = persist();
  form.reset();
  document.querySelector("#listing-dialog").close();
  resetFilters();
  document.querySelector("#marketplace").scrollIntoView({ behavior: "smooth" });
  if (persisted) notify("Demo listing added. Only visible in this browser.");
});
render();
