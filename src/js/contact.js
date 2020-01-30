function contact() {
  const section = document.querySelector('.landing-section', 'row');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const div = document.createElement('div');
  const img = document.createElement('div');

  const renderContact = () => {
    section.classList.add('contact');
    title.classList.add('contact-title');
    text.classList.add('contact-text');
    img.classList.add('contact-img');
    div.classList.add('text-container', 'col-6', 'pl-5');
    title.textContent = 'Reservations';
    text.innerHTML += `Make your day special by dinning with us in a great atmosphere.<br><br>
                        If you can imagine it, we can host your event. Our specialty are large parties.<br><br>
                        Phone: +52 1 22 55 22 55 <br>
                        Address: rue de Montparnasse 345`;
    div.append(title);
    div.append(text);
    section.append(img);
    section.append(div);
  };

  renderContact();
}

export { contact as default };