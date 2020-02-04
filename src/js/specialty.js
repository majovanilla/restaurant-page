function Specialty() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  text.innerHTML += `We take care of all species.  <br> 
                    Starting with the most vulnerable: our animals,<br> 
                    we make sure all our dishes come from a happy place. <br>
                    If you are looking for a place where you can eat without
                    remorse...<br> this is it!`;
  const div = document.createElement('div');

  const renderSpecialty = () => {
    section.classList.add('specialty', 'justify-content-center');
    title.classList.add('specialty-title', 'col-12');
    text.classList.add('text-white', 'text', 'col-12');
    title.textContent = 'What we do best';
    div.classList.add('col-8', 'row', 'text-center');
    div.append(title);
    div.append(text);
    section.append(div);
  };

  renderSpecialty();
}

export { Specialty as default };