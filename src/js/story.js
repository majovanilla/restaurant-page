function Story() {
  const section = document.querySelector('.landing-section');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const img = document.createElement('div');

  const renderStory = () => {
    section.classList.add('story', 'justify-content-around');
    title.classList.add('text-center', 'story-title');
    text.classList.add('text-justify', 'story-text');
    img.classList.add('story-img');
    div.classList.add('text-container', 'col-4');
    title.textContent = 'Our story';
    text.innerHTML += `We love animals. <br><br>
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