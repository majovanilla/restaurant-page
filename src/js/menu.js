function Menu() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  const renderMenu = () => {
    section.classList.add('menu');
    title.classList.add('main-title', 'text-white');
    text.classList.add('text-white');
    title.textContent = 'Main Menu';
    text.textContent = 'We deliver an amazing experience without any harm';
    section.append(title);
    section.append(text);
  };

  renderMenu();
}

export { Menu as default };