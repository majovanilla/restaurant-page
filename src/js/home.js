function home() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = `<p class="text-white text-center text"> We deliver an amazing experience without harming animals.
                <br>
                We are commited to health, but also to keeping other lives.
                <br>
                That's why we partnered with AmazingAnimals.org to provide <br> suffering-free meals to you.
                </p>`;

  const renderHome = () => {
    section.classList.add('cover', 'justify-content-center');
    title.classList.add('main-title', 'text-white', 'pb-5');
    title.textContent = 'Conscious Cuisine';
    section.append(title);
    section.innerHTML += text;
  };

  renderHome();
}

export { home as default };