# 🍽️ Meal Explorer

A modern web application that allows users to search for meals and explore detailed recipe information using a public API.

This project demonstrates how to work with **JavaScript APIs, Fetch requests, and dynamic DOM manipulation** to build interactive web applications.

---

## 🚀 Live Demo

Coming Soon...

---

## 📸 Project Preview

_Add screenshots of your project here_

---

## ✨ Features

- 🔎 **Search Meals** by name
- 🍛 **Dynamic Meal Cards** generated from API data
- 📖 **View Detailed Recipes** with instructions and ingredients
- 🖼️ **Meal Images** for better visualization
- 🎥 **YouTube Recipe Videos** (if available)
- 📱 **Responsive UI** using Tailwind CSS and DaisyUI
- ⚡ **Fast Data Fetching** with Fetch API & Async/Await

---

## 🌐 API Used

This project uses the free recipe API:

**TheMealDB API**

Example Endpoint:

```id="xw2a9s"
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

This API provides:

- Meal name
- Category
- Country / Area
- Ingredients
- Cooking instructions
- Meal images
- YouTube video links

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Tailwind CSS**
- **DaisyUI**
- **JavaScript (ES6)**
- **Fetch API**
- **Async / Await**
- **DOM Manipulation**

---

## 📂 Project Structure

```id="lq7x4v"
meal-explorer
│
├── index.html
├── css
│   └── style.css
├── js
│   └── icons script.js
│
├── assets
│   ├── images
│   └── icons
│
├──README.md
│
└── tailwind.config.js

```

---

## ⚙️ How the Application Works

1. The user enters a meal name in the search box.
2. JavaScript sends a request to the API using **Fetch API**.
3. The API returns meal data in **JSON format**.
4. JavaScript processes the data.
5. Meal cards are dynamically generated and displayed on the page.
6. Clicking a meal card shows detailed recipe information in a modal.

---

## 🔍 Example API Request

```id="8wgrz2"
https://www.themealdb.com/api/json/v1/1/search.php?s=beef
```

Example Response:

```id="c0brxk"
{
  "meals": [
    {
      "strMeal": "Beef and Mustard Pie",
      "strCategory": "Beef",
      "strArea": "British"
    }
  ]
}
```

---

## 🎯 Learning Goals

This project was built to practice:

- Working with real-world APIs
- Fetching and handling external data
- Using Async/Await in JavaScript
- Dynamic UI rendering with DOM
- Structuring a small JavaScript project

---

## 🔮 Future Improvements

Possible upgrades for the project:

- 🔄 Random Meal Generator
- 📂 Filter by Category
- ⭐ Favorite Meals Feature
- ⏳ Loading Spinner
- 🌙 Dark Mode Support

---

## 👨‍💻 Author

**Md Kausar Ali**

Student | Learning Web Development & JavaScript

---

## 🤝 Contribution

Contributions, suggestions, and improvements are welcome!

Feel free to fork this repository and submit a pull request.

---

## 📜 License

This project is created for learning purposes and is open-source.
