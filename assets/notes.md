# Notes

### Inspired by 
+ This gravity game from [w3schools](https://www.w3schools.com/graphics/game_gravity.asp)

### Reference

> draw a block
```javascript
update(area) {
  area.ctx.fillStyle = this.color;
  area.ctx.fillRect(this.x, this.y, this.width, this.height);
}
```

> Display data
```javascript
  display = document.querySelector('.display');
  display.innerHTML = ''; 
```

### Links & resources

+ [calculating the mouse position](https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element)