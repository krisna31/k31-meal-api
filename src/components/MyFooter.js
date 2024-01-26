class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="p-3 w-full bg-gray-700 text-white text-center">
          <p>@2024 | Created by Jelvin Krisna Putra</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);