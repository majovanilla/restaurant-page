function Story() {
  const section = document.querySelector('.landing-section');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const img = document.createElement('div');

  const renderStory = () => {
    section.classList.add('story', 'justify-content-between');
    title.classList.add('text-center', 'story-title');
    text.classList.add('text-justify', 'story-text', 'text', 'col-10', 'pr-5', 'text-center', 'mx-auto');
    img.classList.add('story-img', 'col-6');
    div.classList.add('text-container', 'col-6');
    title.textContent = 'Our story';
    text.innerHTML += `We deliver an amazing experience without harming animals.
                        We are commited to health, but also to keeping other lives.
                        <br><br> That's why we partnered with AmazingAnimals.org to provide suffering-free meals to you.
                        <br><br>
                        So when we were faced with the difficult situation
                        of choosing between our health and harming beautiful
                        creatures, we decided to create an alternative: <br><br>
                        We are the first restaurant to team with great associations
                        to bring sustainable and suffering-free food.`;
    div.append(title);
    div.append(text);
    section.append(div);
    section.append(img);
  };

  renderStory();
}

export { Story as default };