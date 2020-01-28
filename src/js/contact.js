function contact() {
  const content = document.getElementById('content');
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  const renderContact = () => {
    section.classList.add('cover');
    title.classList.add('main-title', 'text-white');
    text.classList.add('text-white', 'text-center');
    title.textContent = 'Conscious Cuisine';
    text.textContent = 'We deliver an amazing experience without any harm';
    section.append(title);
    section.append(text);
    content.append(section);
  };

  renderContact();
}

export { contact as default };