class GameObject {
  constructor(
    id,
    x,
    y,
    width = gameData.cellSize,
    height = gameData.cellSize,
    drawModule,
    velocity = createVector(-1, 0)
  ) {
    this.location = createVector(x, y);
    this.width = width;
    this.height = height;
    this.drawModule = drawModule;
    this.velocity = velocity;
    this.id = id;
  }

  draw() {
    this.drawModule.draw(this.location, this.width, this.height);
  }

  update() {
    this.location.add(this.velocity);
  }
}