import '../css/style.css';
import pageLoad from './page-load';
import home from './home';
import story from './story';
import specialty from './specialty';
import menu from './menu';
import contact from './contact';

function render() {

  pageLoad();
  home();

  const navMenu = document.querySelector('.navbar-menu');
  const section = document.querySelector('.landing-section');
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

  const menuClick = (event) => {
    const selection = event.target.id;

    switch (selection) {
      case 'home':
        section.innerHTML = '';
        home();
        activeLink('home');
        break;
      case 'our-story':
        section.innerHTML = '';
        story();
        activeLink('our-story');
        break;
      case 'our-specialty':
        section.innerHTML = '';
        specialty();
        activeLink('our-specialty');
        break;
      case 'menu':
        section.innerHTML = '';
        menu();
        activeLink('menu');
        break;
      case 'contact':
        section.innerHTML = '';
        contact();
        activeLink('contact');
        break;
      default:
        section.innerHTML = '';
        home();
        activeLink('home');
    }
  };

  navMenu.addEventListener('click', menuClick);
}

render();