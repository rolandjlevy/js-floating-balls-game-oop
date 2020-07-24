class InputHandler {
  constructor(area, balls) {
  ['mousedown', 'touchstart'].forEach(event => {
    area.canvas.addEventListener(event, (e) => { 
      const rect = e.target.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      balls.forEach(ball => {
        if (mouseX >= ball.x - ball.width && mouseX <= ball.x + ball.width) {
          ball.direction = -2;
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