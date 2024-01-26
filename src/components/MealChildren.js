class MealChildren extends HTMLElement {
  set meal(meal) {
    this._meal = meal;

    this.innerHTML = `
      <a href="${this._meal.strYoutube}" target="_blank" rel="noopener noreferrer"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="${this._meal.strMealThumb}" alt="${this._meal.strMeal}">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${this._meal.strMeal}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Category : ${this._meal.strCategory}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Area : ${this._meal.strArea}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-ellipsis overflow-hidden">
            Tags : ${this._meal.strTags}
          </p>
        </div>
      </a>
      `;
  }
}

customElements.define("meal-children", MealChildren);