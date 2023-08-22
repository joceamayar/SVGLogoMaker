
const fs = require("fs")

//we are using require to get the funtinability from SVG.js file.
const SVG = require("./lib/SVG.js")

//we are creating an instance of the SVG class 
let svgShapes = new SVG("AND", "green", "Triangle", "yellow");
console.log(svgShapes);

let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShapes.render()}
    
    </svg>`;

fs.writeFile("lib/shape.svg", svgString, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("File written successfully\n");
    }
})


