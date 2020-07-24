class Area {
  constructor(id) {
    this.canvas = document.querySelector(id);
    this.canvas.width = getComputedStyle(this.canvas).getPropertyValue('--game-width');
    this.canvas.height = getComputedStyle(this.canvas).getPropertyValue('--game-height');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.opacity = '1';
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}