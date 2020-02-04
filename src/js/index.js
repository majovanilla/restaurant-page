import '../css/scss/style.scss';
import pageLoad from './page-load';
import home from './home';
import story from './story';
import specialty from './specialty';
import menu from './menu';
import contact from './contact';

function render() {
  pageLoad();
  home();

  const navMenu = document.querySelector('.navbar-nav');
  const section = document.querySelector('.landing-section', 'align-items-center');
  const menuList = Array.from(document.getElementsByClassName('navbar-link'));

  const activeLink = (selectedMenu) => {
    menuList.forEach(link => {
      if (selectedMenu === link.id) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  };

  const clearSection = () => {
    const all = section.classList;
    section.innerHTML = '';
    section.classList.remove(...all);
    section.classList.add('landing-section');
  };

  const menuClick = (event) => {
    const selection = event.target.id;

    switch (selection) {
      case 'home':
        clearSection();
        home();
        activeLink('home');
        break;
      case 'our-story':
        clearSection();
        story();
        activeLink('our-story');
        break;
      case 'our-specialty':
        clearSection();
        specialty();
        activeLink('our-specialty');
        break;
      case 'menu':
        clearSection();
        menu();
        activeLink('menu');
        break;
      case 'contact':
        clearSection();
        contact();
        activeLink('contact');
        break;
      default:
        clearSection();
        home();
        activeLink('home');
    }
  };

  navMenu.addEventListener('click', menuClick);
}

render();