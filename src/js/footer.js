function footer() {
  const content = document.getElementById('content');
  const footer = document.createElement('footer');
  const text = document.createElement('div');
  const textInput = document.createTextNode('Created by majo_vanilla');

  const addFooter = () => {
    text.classList.add('text-center', 'text-white');
    text.append(textInput);
    footer.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'footer');
    footer.append(text);
    content.append(footer);
  };

  addFooter();
}

export { footer as default };