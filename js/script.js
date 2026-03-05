// =============================
// SELECT DOM ELEMENTS
// =============================

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealsContainer = document.getElementById("meals-container");

const loadingSpinner = document.getElementById("loading-spinner");
const notFound = document.getElementById("not-found");

const randomMealBtn = document.getElementById("random-meal-btn");

const modal = document.getElementById("my_modal_1");
const modalContent = document.getElementById("modal-content");

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
  showLoading();
  // hide not found
  // API URL
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  try {
    // fetch data
    const res = await fetch(url);
    // convert to json
    const data = await res.json();
    // console.log(data.meals);
    // else → display meals
    displayMeals(data.meals);
  } catch (error) {
    // if no meals → show not found
    showNotFound();

    // console.log("Failed to fetch mealName:", error);
  }
}

// =============================
// DISPLAY MEALS
// =============================

function displayMeals(meals) {
  // console.log(meals);
  // clear container
  mealsContainer.innerHTML = "";
  // loop meals
  meals.forEach((meal) => {
    // console.log(meal);
    createMealCard(meal);

    // create card
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-md";

    card.innerHTML = `
      <figure>
         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      </figure>

      <div class="card-body">
        <h2 class="card-title">${meal.strMeal}</h2>

        <p class="text-sm text-gray-500">${meal.strMeal}</p>

        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-primary" id="open-meal-modal-${meal.idMeal}"> View Details </button>
        </div>
      </div>
    `;

    const button = card.querySelector(`#open-meal-modal-${meal.idMeal}`);
    button.addEventListener("click", () => {
      openMealModal(meal.idMeal);
    });
    // add view details button
    // append card
    mealsContainer.append(card);
  });

  hideLoading();
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
  // showLoading();
  // show loading
  // fetch random meal
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  // convert json
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data.meals);
  // openMealModal(data);

  // display in modal
}

// =============================
// OPEN MEAL MODAL
// =============================

async function openMealModal(meal) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.meals);

    openMealModalDetails(data.meals);
  } catch (error) {
    console.log("failed to fetch api: ", error);
  }
  // console.log(meal);
  // mealModal;
  // set modal title
  // set modal image
  // set category
  // set area
  // set instructions
  // set youtube link
  // open modal
}
function openMealModalDetails(meals) {
  meals.forEach((meal) => {
    console.log(meal);

    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredientsList += `<li>${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`;
      }
    }

    // Set modal content
    modalContent.innerHTML = `
    <div id="modal-content" class="p-4">
      <!-- Meal Title -->
      <h3 id="modal-meal-title" class="font-bold text-2xl mb-4 text-center text-primary">
        ${meal.strMeal}
      </h3>

      <!-- Meal Image -->
      <img
        id="modal-meal-image"
        class="rounded-lg mb-6 mx-auto shadow-md"
        src="${meal.strMealThumb}"
        alt="${meal.strMeal}"
      />

      <!-- Category & Area -->
      <div class="flex justify-center gap-6 mb-4 text-gray-600 font-medium">
        <span>Category: ${meal.strCategory}</span>
        <span>Area: ${meal.strArea}</span>
      </div>

      <!-- Ingredients -->
      <h4 class="font-semibold mb-2 text-lg">Ingredients</h4>
      <ul class="list-disc list-inside mb-4 text-gray-700">
        ${ingredientsList}
      </ul>

      <!-- Instructions -->
      <h4 class="font-semibold mb-2 text-lg">Instructions</h4>
      <p id="modal-meal-instructions" class="text-gray-700 mb-4 whitespace-pre-line">
        ${meal.strInstructions}
      </p>

      <!-- YouTube Link -->
      ${
        meal.strYoutube
          ? `<a
        id="modal-meal-video"
        href="${meal.strYoutube}"
        target="_blank"
        class="btn btn-outline btn-primary w-full"
      >
        Watch on YouTube
      </a>`
          : ""
      }
    </div>
  `;

    // Show modal
    modal.showModal();
  });
}

// =============================
// SHOW LOADING
// =============================

function showLoading() {
  // remove hidden class
  loadingSpinner.classList.remove("hidden");
}

// =============================
// HIDE LOADING
// =============================

function hideLoading() {
  // add hidden class
  loadingSpinner.classList.add("hidden");
}

// =============================
// SHOW NOT FOUND
// =============================

function showNotFound() {
  // remove hidden class
  notFound.classList.remove("hidden");
}

// =============================
// HIDE NOT FOUND
// =============================

function hideNotFound() {
  // add hidden class
  notFound.classList.add("hidden");
}
