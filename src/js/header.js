function header() {
  const addHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'nav-bar', 'navbar-dark');
    const button = `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>`;

    const brand = document.createElement('a');
    const text = document.createTextNode('The Vegetarian');
    brand.append(text);
    brand.classList.add('navbar-brand');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('collapse', 'navbar-collapse');
    menuDiv.setAttribute('id', 'navbarSupportedContent');

    const menuList = document.createElement('ul');
    menuList.classList.add('navbar-nav', 'ml-auto');
    const menuTabs = ['Home', 'Our story', 'Our Specialty', 'Menu', 'Contact'];

    menuDiv.append(menuList);
    nav.append(brand);
    nav.innerHTML += button;
    nav.append(menuDiv);
    header.append(nav);
    content.append(header);


    menuTabs.forEach(item => {
      const link = document.createElement('a');
      let linkText = document.createTextNode(item);
      linkText = item.replace(' ', '-').toLowerCase();
      link.setAttribute('id', linkText);
      link.classList.add('text-white', 'nav-link', 'navbar-link');
      link.href = '#';
      const li = document.createElement('li');
      li.classList.add('nav-item');
      link.append(item);
      li.appendChild(link);
      menuList.appendChild(li);
    });
  };

  addHeader();
}

export { header as default };