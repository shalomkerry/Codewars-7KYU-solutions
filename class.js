// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript
class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    let { width, length, height } = this;
    return width * length * height;
  }
  getSurfaceArea() {
    let { width, length, height } = this;
    return 2 * (width * length + length * height + height * width);
  }
}
let s = new Block([1, 2, 3]);
console.log(s.getHeight());
