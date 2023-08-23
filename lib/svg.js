
//We are importing all the classes from the './shapes' module and utilizing destructuring to make them accessible in our current context. 
const { Shape, Circle, Square, Triangle } = require("./shapes");


//We are defining a new class that includes a constructor method enabling us to provide specific parameters during its instantiation. These values become attributes of the resulting object when you create an instance of the SVG class on index.js

class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
  }


  render() {
    let newShape = this.shape;

    if (newShape === "Circle") {
      let circleShape = new Circle(this.text, this.textFill, this.shape, this.shapeFill);
      return circleShape.render();

    } else if (newShape === "Square") {
      let squareShape = new Square(this.text, this.textFill, this.shape, this.shapeFill);
      return squareShape.render();

    } else if (newShape === "Triangle") {
      let triangleShape = new Triangle(this.text, this.textFill, this.shape, this.shapeFill);
      return triangleShape.render();
    }

    console.log("didnt go in conditions")
  }
}



// this allows us to export the classes from this module to be used in other parts of a program. 
module.exports = SVG;



//Notes to self: 

//brackets after equal sign means that I'm adigning an object 
//brackets before the equal sign means that I'm deconstructing. 