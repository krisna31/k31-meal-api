class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<section id="about" class="my-5 scroll-mt-5">
    <div class="flex flex-col justify-center items-center mt-20">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600">
        About</h1>
      <p class="mt-5 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">
        This is a simple website that uses the MealDB API to display a list of food and drinks.
      </p>
    </div>`;
  }
}

customElements.define('about-section', About);