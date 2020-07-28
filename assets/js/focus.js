let mouseDown = false;

element.addEventListener('mousedown', () => {
  mouseDown = true;
});

element.addEventListener('mouseup', () => {
  mouseDown = false;
});

element.addEventListener('focus', (event) => {
  if (mouseDown) {
    event.target.blur();
  }
});