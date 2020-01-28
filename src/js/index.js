import '../css/style.css';
import pageLoad from './page-load';
import home from './home';
import story from './story';
import specialty from './specialty';
import menu from './menu';
import contact from './contact';

pageLoad();

const navMenu = document.querySelector('.navbar-menu');

const menuClick = (event) => {
  const selection = event.target.textContent;
  const homeE = document.getElementById('home');
  const storyE = document.getElementById('our-story');
  const specialtyE = document.getElementById('our-specialty');
  const menuE = document.getElementById('menu');
  const contactE = document.getElementById('contact');

  switch (selection) {
    case homeE:
      home();
      break;
    case storyE:
      story();
      break;
    case specialtyE:
      specialty();
      break;
    case menuE:
      menu();
      break;
    case contactE:
      contact();
      break;
    default:
      home();
  }
};

navMenu.addEventListener('click', menuClick);
