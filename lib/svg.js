
//We are destructuring the classes. 
const { Shape, Circle, Square, Triangle } = require("./shapes")

module.exports = class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
  }

  render(){
    return "";
  }
}
