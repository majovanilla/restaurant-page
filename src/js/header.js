function header() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const name = document.createElement('div');
  const nameP = document.createElement('p');
  const nameText = document.createTextNode('The Vegetarian');
  const menuList = document.createElement('ul');
  const menuTabs = ['Home', 'Our story', 'Our Specialty', 'Menu', 'Contact'];

  menuTabs.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item;
    const name = item.replace(' ', '-').toLowerCase();
    link.setAttribute('id', name);
    link.classList.add('text-white', 'navbar-link');
    link.href = '#';
    const li = document.createElement('li');
    li.appendChild(link);
    menuList.appendChild(li);
  });

  const addHeader = () => {
    header.classList.add('nav-bar');
    name.classList.add('navbar-name');
    name.appendChild(nameP);
    nameP.appendChild(nameText);
    menuList.classList.add('navbar-menu');
    header.append(name, menuList);
    content.append(header);
  };

  addHeader();
}

export { header as default };