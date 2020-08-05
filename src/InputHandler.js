class InputHandler {
  constructor(area, balls) {
    ['mousedown', 'touchstart'].forEach(event => {
      area.canvas.addEventListener(event, (e) => {
        const mousePos = this.mouseXY(e);
        balls.forEach(ball => {
          if (mousePos.x >= ball.x - ball.width 
          && mousePos.x <= ball.x + ball.width) {
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
  mouseXY(e) {
    const canvasRect = e.target.getBoundingClientRect();
    const eventType = e.touches ? e.touches[0] : e;
    const x = eventType.clientX - canvasRect.left;
    const y = eventType.clientY - canvasRect.top;
    return { x, y };
  }
}