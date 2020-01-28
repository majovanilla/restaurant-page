function contact() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');

  const renderContact = () => {
    section.classList.add('contact');
    title.classList.add('main-title', 'text-white');
    text.classList.add('text-white', 'text-center');
    title.textContent = 'Contact Us';
    text.textContent = 'We deliver an amazing experience without any harm';
    section.append(title);
    section.append(text);
  };

  renderContact();
}

export { contact as default };