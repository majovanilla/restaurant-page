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

  const menuClick = (event) => {
    const selection = event.target.id;

    switch (selection) {
      case 'home':
        section.innerHTML = '';
        home();
        break;
      case 'our-story':
        section.innerHTML = '';
        story();
        break;
      case 'our-specialty':
        section.innerHTML = '';
        specialty();
        break;
      case 'menu':
        section.innerHTML = '';
        menu();
        break;
      case 'contact':
        section.innerHTML = '';
        contact();
        break;
      default:
        section.innerHTML = '';
        home();
    }
  };

  // const activeLink = (selectedMenu) => {

  //   if selectedMenu.id === 
  // };

  navMenu.addEventListener('click', menuClick);
  activeLink();
}

render();