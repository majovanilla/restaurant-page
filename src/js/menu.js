function Menu() {
  const section = document.querySelector('.landing-section');
  const title = document.createElement('h1');
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const text = `<h4 class="font-weight-bold"> Veggie Quesadilla </h4>
                <p> Delicious handmade tortilla with fresh cheese and a selection of vegetables from the house</p>
                <h4 class="font-weight-bold"> Enchiladas </h4>
                <p> The classic with fresh cheese and happy shreded chicken on top</p>
                <h4 class="font-weight-bold"> Veggie Quesadilla</h4>
                <p> Delicious handmade tortilla with fresh cheese and a selection of vegetables from the house</p>
                <h4 class="font-weight-bold"> Veggie Quesadilla</h4>
                <p> Delicious handmade tortilla with fresh cheese and a selection of vegetables from the house</p>`;

  const renderMenu = () => {
    section.classList.add('menu', 'row');
    title.classList.add('menu-title', 'col-12');
    leftDiv.classList.add('col-6', 'px-5');
    rightDiv.classList.add('col-6', 'px-5');
    title.textContent = 'Our Menu';
    section.append(title);
    leftDiv.innerHTML += text;
    rightDiv.innerHTML += text;
    section.append(leftDiv);
    section.append(rightDiv);
  };

  renderMenu();
}

export { Menu as default };