
//We are destructuring the classes and getting 
const { Shape, Circle, Square, Triangle } = require("./shapes")

class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
  }


  // const { SVG } = require("./lib/svg");
  // let svgShapes = new SVG("AND", "green", "triangle", "yellow");

  // let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  //     ${svgShapes.render()}
  //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  //     </svg>`;

  render() {
    let newShape = this.shape;
    console.log();

    if (newShape === "Circle") {
      let circleShape = new Circle();
      console.log(circleShape.render())
      return circleShape.render();

    } else if (newShape === "Square") {
      let squareShape = new Square();
      return squareShape.render();

    } else if (newShape === "Triangle") {
      let triangleShape = new Triangle();
      return triangleShape.render();
    }
    console.log("didnt go in conditions")
  }
}

// let test = new SVG("Tes", "blue", "Circle", "red")
// console.log(test)
// console.log(test.render())
//brackets after equal sign means that I'm adigning an object 
module.exports = SVG;