function Specialty() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const div = document.createElement('div');

  const renderSpecialty = () => {
    section.classList.add('specialty', 'd-flex', 'justify-content-end');
    title.classList.add('text-center', 'specialty-title', 'pb-5');
    text.classList.add('text-justify', 'specialty-text');
    div.classList.add('col-lg-4', 'col-6');
    title.textContent = 'What we do best';
    text.innerHTML += `We take care of all species <br><br>
                      Starting with the most vulnerable: our animals,
                      we make sure all our dishes come from a happy place. <br><br>
                     If you are looking for a place where you can eat without
                     remorse... this is it!`;
    div.append(title);
    div.append(text);
    section.append(div);
  };

  renderSpecialty();
}

export { Specialty as default };