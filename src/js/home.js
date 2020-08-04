import iconSrc from '../img/icon.png';

function home() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  text.classList.add('text-white', 'text', 'col-12');
  const div = document.createElement('div');
  const icon = document.createElement('img');

  const renderHome = () => {
    section.classList.add('cover', 'justify-content-center');
    title.classList.add('main-title', 'col-12');
    title.textContent = 'Conscious Cuisine';
    text.textContent = 'Ciudad de México';
    div.classList.add('col-8', 'row', 'text-center', 'justify-content-center');
    icon.setAttribute('src', iconSrc);
    div.append(title);
    div.append(icon);
    div.append(text);
    section.append(div);
  };

  renderHome();
}

export { home as default };