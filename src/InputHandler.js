class InputHandler {
  constructor(area, balls) {
  ['mousedown', 'touchstart'].forEach(event => {
    area.canvas.addEventListener(event, (e) => { 
      const canvasRect = e.target.getBoundingClientRect();
      const event = e.touches ? e.touches[0] : e;
      const mouseX = event.clientX - canvasRect.left;
      const mouseY = event.clientY - canvasRect.top;
      balls.forEach(ball => {
        if (mouseX >= ball.x - ball.width 
         && mouseX <= ball.x + ball.width) {
          ball.direction = -5;
          ball.opacity = 1;
        }
      })
    })
  });
  ['mouseup', 'touchend'].forEach(event => {
    area.canvas.addEventListener(event, (e) => { 
      balls.forEach(ball => { 
        ball.direction = 1;
        ball.opacity = 0.7;
      });
    })
  });
  }
}