function home() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = `<p class="text-white text"> We deliver an amazing experience without harming animals.
                <br>
                We are commited to health, but also to keeping other lives.
                <br>
                That's why we partnered with AmazingAnimals.org to provide <br> suffering-free meals to you.
                </p>`;
  const div = document.createElement('div');

  const renderHome = () => {
    section.classList.add('cover', 'justify-content-end');
    title.classList.add('main-title', 'col-12');
    title.textContent = 'Conscious Cuisine';
    div.classList.add('col-5', 'pl-5', 'pr-0', 'row', 'align-items-center');
    div.append(title);
    div.innerHTML += text;
    section.append(div);
  };

  renderHome();
}

export { home as default };