# 🎓 CSC336 Web Technologies: Lab Mid Term

**Upgrade Your E-commerce Listing and Product Pages** · Project: _Diners_ (clothing, footwear and accessories)

|                |                                                                      |
| -------------- | -------------------------------------------------------------------- |
| **Name**       | Muhammad Zulqarnain Lone                                             |
| **Roll No**    | FA24-BCS-088                                                         |
| **Course**     | CSC336 Web Technologies, COMSATS University Islamabad, Lahore Campus |
| **Instructor** | Muhammad Usman Akram                                                 |

---

## 🔢 My personal numbers

| Value  | Formula                        |  Result   |
| :----: | ------------------------------ | :-------: |
| **N**  | last two digits of roll number |  **88**   |
| **BP** | 600 + N                        | **688px** |
| **H**  | (N × 7) mod 360                |  **256**  |
| **K**  | (N mod 3) + 3                  |   **4**   |

**Derived values:**

- 🎨 Accent colour: `hsl(256, 70%, 45%)`
- 📌 Sticky offset: (88 mod 40) + 70 = **78px**
- ⭐ Premium threshold: 88 × 100 = **Rs. 8,800**

---

## 📁 Files changed

| File           |  Task   |  Status  |
| -------------- | :-----: | :------: |
| `index.html`   | 1 and 3 | modified |
| `product.html` |    2    | modified |
| `style.css`    | 1 and 2 | modified |
| `script.js`    |    3    | **new**  |

---

## ✅ Task 1: CSS-only category filter

- Added a `data-category` attribute to each of the 8 product columns, using **K = 4** categories: `tops`, `bottoms`, `footwear`, `accessories`.
- Added **5 radio buttons** (All plus 4 categories) above the grid, with "All" checked on load.
- Filtering uses `main:has(#cat-x:checked) .col:not([data-category="x"]) { display: none; }`, so hidden cards leave the grid and no gaps remain. The selected button uses the accent colour `hsl(256, 70%, 45%)`.
- **No JavaScript** is used.

## ✅ Task 2: Product page layout with sticky details box

- Rebuilt `<main>` of `product.html` as a **CSS Grid with named areas**: `image`, `details`, `description`. Also linked `style.css` to the page.
- **Below 688px:** one column (image, details, description).
- **From 688px:** image and details side by side, description full width underneath.
- The details box uses `position: sticky; top: 78px`, with `align-items: start` on the grid so it can stick. A 10-paragraph description makes the scrolling visible.

## ✅ Task 3: JavaScript live search and price sort

- `script.js` works on the **existing cards**, with no rebuilt array or `innerHTML`.
- **Search:** filters by product name (case-insensitive) together with the Task 1 category filter, and shows "No products found" in place of the grid when nothing matches.
- **Sort by price:** reads each price from the card and alternates low to high and high to low by moving the elements with `appendChild`.
- **Premium label:** added on page load to products costing more than Rs. 8,800.

---

## 🤖 AI tools used

Claude (Anthropic)
