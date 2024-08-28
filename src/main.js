
// Código para que el editFilmForm se pueda arrastrar a donde queramos
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editFilmForm');
  
    let isDragging = false;
    let startX, startY, initialX, initialY;
  
    form.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = form.offsetLeft;
      initialY = form.offsetTop;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  
    function onMouseMove(e) {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        form.style.left = `${initialX + dx}px`;
        form.style.top = `${initialY + dy}px`;
      }
    }
  
    function onMouseUp() {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  });






