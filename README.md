# 🚀 Product Builder App

A modern product management application built with **React + TypeScript + Vite**.
It allows users to create, edit, and manage products with a clean and responsive UI.

---

## 📸 Preview

> Add screenshots here (recommended)

```
/screenshots/home.png
```

---

## ✨ Features

* 🛍️ Create, edit, and delete products
* 🎨 Select multiple colors for each product
* 🖼️ Image support for products & categories
* ⚡ Fast performance using Vite
* 📱 Responsive design (mobile-friendly)
* 🔍 Clean and reusable component structure
* ♻️ Shared UI components (Image, Button, Modal, etc.)

---

## 🧱 Tech Stack

* **Frontend:** React + TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **State Management:** React Hooks
* **Deployment:** GitHub Pages

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── ui/            # Reusable UI components
│   ├── Image.tsx      # Shared optimized image component
│   ├── ProductCard.tsx
│
├── Interfaces/        # TypeScript interfaces
├── utils/             # Helper functions
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/moham60/productBuilderTS.git

# Go into the project
cd productBuilderTS

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 🚀 Deployment (GitHub Pages)

```bash
npm run build
npm run deploy
```

Make sure your `vite.config.js` includes:

```js
base: '/productBuilderTS/'
```

---

## ⚡ Performance Optimizations

* Lazy loading for non-critical images
* Priority loading for above-the-fold content
* Optimized component reusability
* Reduced unnecessary re-renders

---

## 🧠 Future Improvements

* 🔐 Authentication system
* ☁️ Backend integration (Supabase / Firebase)
* 📦 Drag & drop product builder
* 🔎 Search & filtering system
* 🌍 Multi-language support

---

## 👨‍💻 Author

**Mohamed**
GitHub: https://github.com/moham60

---

## 📄 License

This project is open-source and available under the MIT License.
