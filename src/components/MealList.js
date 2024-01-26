import './MealChildren.js';

class MealList extends HTMLElement {
    set meals(meals) {
        this._meals = meals;

        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-children");
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        })
    }

    renderErrorWithMessage(message) {
        this.innerHTML = ""; this.innerHTML += `<h2 class="px-4 text-red-300 font-bold text-2xl">${message}</h2>`;
    }
}

customElements.define("meal-list", MealList);