let game;
let display;

document.addEventListener('DOMContentLoaded', (event) => {
  const area = new GameArea(480, 270, 'game-area', 15);
  const block = new GameBlock(30, 30, 'red', 80, 75);
  // block.init(area);
  // area.init(block);
  game = { block, area }
  const areaCanvas = document.querySelector('.game-area');
  ['mousedown', 'touchstart'].forEach((event) => {
    areaCanvas.addEventListener(event, (e) => { game.block.gravity = -0.2; })
  });
  ['mouseup', 'touchend'].forEach((event) => {
    areaCanvas.addEventListener(event, (e) => { game.block.gravity = 0.1; })
  });
  display = document.querySelector('.display');
});

class GameArea {
  constructor(width, height, className, intervalSpeed) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.className = className;
    this.intervalSpeed = intervalSpeed;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(() => {
      this.clear();
      game.block.newPos();
      game.block.update();
    }, this.intervalSpeed);        
  }
  // init(block) {
  //   this.block = block;
  //   console.log(this.block);
  // }
  stop() {
    clearInterval(this.interval);
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

class GameBlock {
  constructor(width, height, color, x, y, type) {
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
  // init(area) {
  //   this.area = area;
  //   console.log(this.area);
  // }
  update() {
    game.area.context.fillStyle = this.color;
    game.area.context.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
    display.innerHTML = ''; 
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