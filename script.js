document.addEventListener('DOMContentLoaded', (event) => {

  const area = new Area('#game-area');

  const balls = [
    new Ball({ 
      width: 30, 
      height: 30, 
      color: 'red', 
      x: 50,
      y: 50,
      gravity: 0.05
    }),
    new Ball({ 
      width: 50, 
      height: 50, 
      color: 'green', 
      x: 150,
      y: 50,
      gravity: 0.07
    }),
    new Ball({ 
      width: 70, 
      height: 70, 
      color: 'blue', 
      x: 300,
      y: 50,
      gravity: 0.10
    })
  ];

  new InputHandler(area, balls);

  let lastTime = 0;

  function gameLoop(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    area.clear();
    balls.forEach(ball => {
      ball.newPos(area, deltaTime);
      ball.update(area);
    });
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);

});