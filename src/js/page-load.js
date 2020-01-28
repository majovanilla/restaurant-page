import addHeader from './header';
import addFooter from './footer';

function pageLoad() {
  const content = document.getElementById('content');
  const section = document.createElement('section');

  const addSection = () => {
    content.append(section);
    section.classList.add('landing-section');
  };

  addHeader();
  addSection();
  addFooter();
}

export { pageLoad as default };