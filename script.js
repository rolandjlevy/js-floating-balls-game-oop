document.addEventListener('DOMContentLoaded', (event) => {

  const area = new Area('#game-area');

  const balls = [
    new Ball({ 
      width: 30, 
      height: 30, 
      color: 'red', 
      x: 50,
      y: 50,
      gravity: 0.02
    }),
    new Ball({ 
      width: 40, 
      height: 40, 
      color: 'green', 
      x: 130,
      y: 50,
      gravity: 0.04
    }),
    new Ball({ 
      width: 50, 
      height: 50, 
      color: 'blue', 
      x: 230,
      y: 50,
      gravity: 0.06
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