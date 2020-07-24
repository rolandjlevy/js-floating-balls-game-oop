class Ball {
  constructor({ width, height, color, x, y, gravity }) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;    
    this.type = null;
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = gravity;
    this.gravitySpeed = 0;
    this.direction = 1;
    this.opacity = 0.7;
  }
  update(area) {
    area.ctx.globalAlpha = this.opacity;
    area.ctx.fillStyle = this.color;
    area.ctx.beginPath();
    area.ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
    area.ctx.fill();
  }
  newPos(area, deltaTime) {
    this.gravitySpeed += this.gravity * this.direction;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    const bottom = area.canvas.height - this.height;
    if (this.y > bottom) {
      this.y = bottom;
      this.gravitySpeed = 0;
    }
    if (this.y < this.height) {
      this.y = this.height;
      this.gravitySpeed = 0;
    }
  }
}