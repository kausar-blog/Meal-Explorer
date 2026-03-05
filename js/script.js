// =============================
// SELECT DOM ELEMENTS
// =============================

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealsContainer = document.getElementById("meals-container");

const loadingSpinner = document.getElementById("loading-spinner");
const notFound = document.getElementById("not-found");

const randomMealBtn = document.getElementById("random-meal-btn");

const mealModal = document.getElementById("meal-modal");

const modalMealTitle = document.getElementById("modal-meal-title");
const modalMealImage = document.getElementById("modal-meal-image");
const modalMealCategory = document.getElementById("modal-meal-category");
const modalMealArea = document.getElementById("modal-meal-area");
const modalMealInstructions = document.getElementById(
  "modal-meal-instructions",
);
const modalMealVideo = document.getElementById("modal-meal-video");

// =============================
// EVENT LISTENERS
// =============================

searchBtn.addEventListener("click", function () {
  const mealName = searchInput.value;

  searchMeals(mealName);
});

randomMealBtn.addEventListener("click", function () {
  getRandomMeal();
});

// =============================
// SEARCH MEALS FUNCTION
// =============================

async function searchMeals(mealName) {
  // show loading spinner
  // hide not found
  // API URL
  // fetch data
  // convert to json
  // if no meals → show not found
  // else → display meals
}

// =============================
// DISPLAY MEALS
// =============================

function displayMeals(meals) {
  // clear container
  // loop meals
  // create card
  // add view details button
  // append card
}

// =============================
// CREATE MEAL CARD
// =============================

function createMealCard(meal) {
  // create div
  // set innerHTML
  // return card
}

// =============================
// GET RANDOM MEAL
// =============================

async function getRandomMeal() {
  // show loading
  // fetch random meal
  // convert json
  // display in modal
}

// =============================
// OPEN MEAL MODAL
// =============================

function openMealModal(meal) {
  // set modal title
  // set modal image
  // set category
  // set area
  // set instructions
  // set youtube link
  // open modal
}

// =============================
// SHOW LOADING
// =============================

function showLoading() {
  // remove hidden class
}

// =============================
// HIDE LOADING
// =============================

function hideLoading() {
  // add hidden class
}

// =============================
// SHOW NOT FOUND
// =============================

function showNotFound() {
  // remove hidden class
}

// =============================
// HIDE NOT FOUND
// =============================

function hideNotFound() {
  // add hidden class
}
