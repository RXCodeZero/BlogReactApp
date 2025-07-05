# BlogSite - React + Express + MongoDB Fullstack Application

## 📊 Overview

BlogSite is a modern, full-stack blogging application using **React (Vite)** on the frontend and **Express.js + MongoDB** on the backend. Users can sign up, sign in, post blogs, view blogs, and enjoy animated theme support with inspirational quotes.

---

## 🔧 Tech Stack

* **Frontend**: React (Vite), React Router, Font Awesome, Custom CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas
* **Authentication**: JSON Web Tokens (JWT)
* **Validation**: Zod
* **Quotes API**: ZenQuotes (with backend proxy)

---

## 📁 Project Structure

```
blogsite/
├── client/               # React frontend
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom hooks (e.g. useThemeToggle)
│   ├── pages/            # Pages (Landing, Blogs, Auth, Create)
│   ├── App.jsx           # Main app router
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── server/               # Express backend
│   ├── index.js          # Main backend logic
│   └── models/           # Mongoose schemas (User, Blog)
├── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/blogsite.git
cd blogsite
```

### 2. Frontend Setup

#### Option A: Create Vite App (If not already created)

```bash
npm create vite@latest client -- --template react
cd client
npm install
```

#### Option B: If already present

```bash
cd client
npm install
```

### 3. Run Frontend

```bash
npm run dev
```

> Runs at: [http://localhost:5173](http://localhost:5173)

Optional: Setup proxy in `vite.config.js`

```js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:3005',
    },
  },
};
```

---

### 4. Backend Setup

```bash
cd ../server
npm install express mongoose cors jsonwebtoken zod node-fetch
```

Start server:

```bash
node index.js
```

Or (dev mode):

```bash
npx nodemon index.js
```

> Runs at: [http://localhost:3005](http://localhost:3005)

---

## 🔐 Auth Endpoints

* `POST /signup` → Register new user
* `POST /signin` → Authenticate and receive JWT
* `POST /blog` → Create blog (requires token)
* `GET /blogs` → Fetch all blogs
* `GET /blogs/:id` → Fetch single blog by ID
* `GET /quote` → Fetch random quote (uses backend proxy)

---

## 🔄 Theme & UX Features

* Light/Dark theme toggle
* Animated background gradients
* Inspirational quotes with fallback
* Smooth transitions & responsive layout

---

## 💡 Future Improvements

* [ ] Edit & Delete blog posts
* [ ] User profile pages
* [ ] Blog tagging and filtering
* [ ] Better 404 and loading UI

---

## Screenshots

![image](https://github.com/user-attachments/assets/cdb1ecf2-10d6-41b3-aec9-d3c933c80dcb)

![image](https://github.com/user-attachments/assets/777213fd-1b0c-47f4-9100-2b626081329c)

![image](https://github.com/user-attachments/assets/f75bbb9d-a767-4079-8e7f-db77e77e9905)

![image](https://github.com/user-attachments/assets/98c090da-194a-474c-96b1-b66a74cff299)

![image](https://github.com/user-attachments/assets/5795abb8-ed1c-4762-8319-3e319bf1fa9d)

![image](https://github.com/user-attachments/assets/1d1e1a2f-0c61-4ee9-8f73-8771a46121aa)

