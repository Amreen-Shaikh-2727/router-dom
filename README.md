# React Router Navigation

## About the Project

This project is a React application that demonstrates navigation between multiple pages using React Router DOM. It includes a blog-style Home page, a Dashboard page, and separate Login and Signup pages.

## Features

- Navigation between pages using React Router DOM
- Blog-style Home page with article content
- Dashboard page with a sidebar and popular posts
- Login form with email and password fields
- Signup form with name, email, and password fields
- Responsive layout for different screen sizes
- Shared navigation bar and footer

## Technologies Used

- React
- Vite
- JavaScript
- React Router DOM
- CSS

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── BlogSidebar.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## How to Run

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Install React Router DOM:

   ```bash
   npm install react-router-dom
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in the terminal.

## Application Routes

| Route | Page |
|---|---|
| `/home` | Home |
| `/dashboard` | Dashboard |
| `/login` | Login |
| `/signup` | Signup |

## Note

The Login and Signup forms currently provide basic form validation. User authentication and account registration are not connected to a backend.
