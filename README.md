# 🛒 ElectroMart – Mock E-Commerce Cart

A **full-stack shopping cart web application** built for the **Vibe Commerce internship assignment**.
It demonstrates end-to-end functionality — product listing, search filter, add/remove items, live cart totals, and mock checkout — all connected to a MongoDB database.

---

## 🚀 Features

### 🖥️ Frontend (React + CSS)

* Modern, responsive **React UI**
* **Search filter** for products
* Beautiful **hero section** with themed gradient & image
* **Dynamic “Add to Cart” button** (shows feedback instantly)
* Separate **Cart page** with quantity control and remove item feature
* **Checkout form** (collects name & email)
* **Order confirmation popup** (centered with order details)
* Custom **color palette**:
  `#2f131b`, `#dba4cd`, `#712356`, `#eed6ec`, `#591837`

### ⚙️ Backend (Node + Express + MongoDB)

* RESTful APIs for:

  * `/api/products` → Fetch all products
  * `/api/cart` → Manage cart items (add, update, delete)
  * `/api/checkout` → Mock checkout & receipt
* Connected to **MongoDB Atlas**
* Proper **CORS**, error handling, and async/await logic
* Seed script for populating product data

---

## 🧩 Tech Stack

| Layer        | Technology                                         |
| ------------ | -------------------------------------------------- |
| **Frontend** | React, React Router DOM, CSS3                      |
| **Backend**  | Node.js, Express.js                                |
| **Database** | MongoDB Atlas                                      |
| **Styling**  | Custom CSS (theme based on magenta/purple palette) |
| **Tools**    | Axios / Fetch API, Dotenv, Mongoose                |

---

## 📦 Project Structure

```
mock-ecom-cart/
│
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   └── CartItem.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── cart.js
│   │   └── checkout.js
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── img/
│   │       └── Electronics.webp
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── HeroSection.js
│   │   │   ├── Products.js
│   │   │   └── Cart.js
│   │   ├── api.js
│   │   ├── App.js
│   │   └── styles.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🧭 1. Clone the repository

```bash
git clone https://github.com/yourusername/mock-ecom-cart.git
cd mock-ecom-cart
```

### 🖥️ 2. Setup the backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Run the seed file to insert demo products:

```bash
node seed.js
```

Start the backend:

```bash
npm start
```

Backend runs at → **[http://localhost:5000](http://localhost:5000)**

---

### 🌐 3. Setup the frontend

```bash
cd ../frontend
npm install
npm start
```

Frontend runs at → **[http://localhost:3000](http://localhost:3000)**

---

## 🛍️ Usage Flow

1. Visit homepage → browse “Featured Products”
2. Use the **search bar** to filter gadgets
3. Click **Add to Cart** → instant success feedback
4. Click **Cart** (in navbar) to view your cart
5. Update quantity / remove items
6. Fill **name** and **email**, then click **Checkout**
7. See an **Order Confirmation Popup** with:

   * Order ID
   * Name
   * Email
   * Total amount
   * Thank-you message

---

## 🧠 Key Learnings

* Full-stack architecture integration (React ↔ Express ↔ MongoDB)
* CRUD operations via REST API
* Component-based UI development
* State management using React hooks
* Frontend-backend sync with real-time cart updates
* Designing consistent, modern UI with a color palette

---

## 🎨 Theme Preview

| Primary | Secondary | Accent  | Light   | Dark    |
| ------- | --------- | ------- | ------- | ------- |
| #712356 | #dba4cd   | #eed6ec | #591837 | #2f131b |

---

## 📸 Screenshots

**Home Page**

> Hero section with search bar and featured products

> <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d22b723c-980e-4b08-9369-0b6f12d51a7d" />

> <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4d67234f-c8dc-4b3f-8fd1-fc0411575083" />

**Cart Page**

> Product images, live total, quantity controls, checkout popup

> <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4ec2217d-eff3-4198-8be0-c63f5c8b2f0f" />

> <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b7a26a44-569b-4a0c-b192-62c3e30ccaf4" />

> <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dc465a47-d355-469b-b209-b32a46d594af" />




---

## 🧾 License

This project is developed for **Vibe Commerce Internship Assignment**
© 2025 **Khushi Khatri**
