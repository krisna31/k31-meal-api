// import library yang dibutuhkan
import 'flowbite';

// import css
import './index.css';

// import components
import './components/MyNavbar.js';
import './components/MyFooter.js';
import './components/SearchBar.js';
import './components/MealList.js';
import './components/About.js';

// import data source
import RemoteDataSource from './data/RemoteDataSource.js';

// when the page is loaded do this
document.addEventListener('DOMContentLoaded', () => {
  // get all the components that we need
  const mealList = document.querySelector('meal-list');
  const searchElement = document.querySelector('search-bar');

  // on search submit event get all the meals from the API
  searchElement.submitEvent = async (e) => {
    try {
      e.preventDefault();
      const result = await RemoteDataSource.searchMeal(searchElement.value);
      mealList.meals = result;
    } catch (message) {
      mealList.renderErrorWithMessage(message);
    }
  };

  // use IIFE to get all the meals from the API once the page is loaded
  (
    async () => {
      const result = await RemoteDataSource.searchMeal(searchElement.value);
      mealList.meals = result;
    }
  )();
});