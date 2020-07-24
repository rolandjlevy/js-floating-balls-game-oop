let game;
let display;

document.addEventListener('DOMContentLoaded', (event) => {

  const area = new GameArea({ 
    width: 400, 
    height: 300,  
    className: 'game-area', 
    speed: 15
  });

  const block = new GameBlock({ 
    width: 30, 
    height: 30, 
    color: 'red', 
    x: 50, 
    y: 50, 
    type: null 
  });

  game = { block, area }
  new InputHandler(game);
});

class InputHandler {
  constructor(game) {
  const areaCanvas = document.querySelector('.game-area');
  ['mousedown', 'touchstart'].forEach(event => {
    areaCanvas.addEventListener(event, (e) => { game.block.gravity = -0.2; })
  });
  ['mouseup', 'touchend'].forEach(event => {
    areaCanvas.addEventListener(event, (e) => { game.block.gravity = 0.1; })
  });
  }
}

class GameArea {
  constructor({ width, height, className, speed }) {

    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.className = className;
    this.speed = speed;

    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(() => {
      this.clear();
      game.block.newPos();
      game.block.update();
    }, this.speed);        
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  stop() {
    clearInterval(this.interval);
  }
}

class GameBlock {
  constructor({ width, height, color, x, y, type }) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.05;
    this.gravitySpeed = 0;
  }
  update() {
    game.area.context.fillStyle = this.color;
    game.area.context.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  }
  rockbottom() {
    return game.area.canvas.height - this.height;
  }
  hitBottom() {
    if (this.y > this.rockbottom()) {
      this.y = this.rockbottom();
      this.gravitySpeed = 0;
    }
  }
}