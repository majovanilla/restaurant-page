import addHeader from './header';
import home from './home';
import addFooter from './footer';

function pageLoad() {
  const content = document.getElementById('content');
  const section = document.createElement('section');

  addHeader();

  const addSection = () => {
    content.append(section);
    section.classList.add('landing-section');
  };

  addSection();
  home();
  addFooter();
}

export { pageLoad as default };