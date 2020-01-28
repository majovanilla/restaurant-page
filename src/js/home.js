function home() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  const renderHome = () => {
    section.classList.add('cover', 'justify-content-center');
    title.classList.add('main-title', 'text-white');
    text.classList.add('text-white', 'text-center', 'text');
    title.textContent = 'Conscious Cuisine';
    text.textContent = 'We deliver an amazing experience without any harm';
    section.append(title);
    section.append(text);
  };

  renderHome();
}

export { home as default };