function Specialty() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  const renderSpecialty = () => {
    section.classList.add('specialty');
    title.classList.add('main-title', 'text-white');
    text.classList.add('text-white', 'text-center');
    title.textContent = 'What we do best';
    text.textContent = 'We deliver an amazing experience without any harm';
    section.append(title);
    section.append(text);
  };

  renderSpecialty();
}

export { Specialty as default };