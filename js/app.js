// SELECT DOM ELEMENTS
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const mealsContainer = document.getElementById("meals-container");
const loadingSpinner = document.getElementById("loading-spinner");
const notFound = document.getElementById("not-found");
const randomMealBtn = document.getElementById("random-meal-btn");
const modal = document.getElementById("my_modal_2");
const modalContent = document.getElementById("modal-content");

// EVENT LISTENERS
searchBtn.addEventListener("click", () => searchMeals(searchInput.value));
randomMealBtn.addEventListener("click", getRandomMeal);

// SEARCH MEALS FUNCTION
async function searchMeals(mealName) {
  showLoading();
  hideNotFound();

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.meals) {
      showNotFound();
    } else {
      displayMeals(data.meals);
    }
  } catch (error) {
    console.log("Failed to fetch meals:", error);
    showNotFound();
  }

  hideLoading();
}

// DISPLAY MEALS
function displayMeals(meals) {
  mealsContainer.innerHTML = "";

  meals.forEach((meal) => {
    const card = createMealCard(meal);
    mealsContainer.append(card);
  });
}

// CREATE MEAL CARD
function createMealCard(meal) {
  const card = document.createElement("div");
  card.className = "card bg-base-100 shadow-md";

  card.innerHTML = `
    <figure>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="rounded-lg" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${meal.strMeal}</h2>
      <p class="text-sm text-gray-500">Category: ${meal.strCategory}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-primary" id="open-meal-${meal.idMeal}">View Details</button>
      </div>
    </div>
  `;

  const button = card.querySelector(`#open-meal-${meal.idMeal}`);
  button.addEventListener("click", () => getMealById(meal.idMeal));

  return card;
}

// GET RANDOM MEAL
async function getRandomMeal() {
  showLoading();
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    getMealById(data.meals[0].idMeal);
  } catch (error) {
    console.log("Failed to fetch random meal:", error);
  } finally {
    hideLoading();
  }
}

// OPEN MEAL MODAL

async function getMealById(idMeal) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.meals);

    // openMealModalDetails(data.meals);
    openMealModal(data.meals[0]);
    // openMealModal(data.meals);
  } catch (error) {
    console.log("Failed to fetch meal by id:", error);
  }
}

function openMealModal(meal) {
  let ingredientsList = "";

  let i = 1;
  while (meal[`strIngredient${i}`]) {
    ingredientsList += `<li>${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`;
    i++;
  }

  modalContent.innerHTML = `
    <h3 class="font-bold text-2xl mb-4 text-center text-primary">${meal.strMeal}</h3>

    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="rounded-lg mb-6 mx-auto shadow-md" />

    <div class="flex justify-center gap-6 mb-4 text-gray-600 font-medium">
      <span>Category: ${meal.strCategory}</span>
      <span>Area: ${meal.strArea}</span>
    </div>

    <h4 class="font-semibold mb-2 text-lg">Ingredients</h4>
    <ul class="list-disc list-inside mb-4 text-gray-700">
      ${ingredientsList}
    </ul>

    <h4 class="font-semibold mb-2 text-lg">Instructions</h4>
    <p class="text-gray-700 mb-4 whitespace-pre-line">${meal.strInstructions}</p>

    ${
      meal.strYoutube
        ? `<a href="${meal.strYoutube}" target="_blank" class="btn btn-outline btn-primary w-full">Watch on YouTube</a>`
        : ""
    }
  `;

  // Show modal
  modal.showModal();
}

// SHOW / HIDE LOADING

function showLoading() {
  loadingSpinner.classList.remove("hidden");
}
function hideLoading() {
  loadingSpinner.classList.add("hidden");
}

// SHOW / HIDE NOT FOUND

function showNotFound() {
  notFound.classList.remove("hidden");
}
function hideNotFound() {
  notFound.classList.add("hidden");
}
