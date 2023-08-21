
const fs = require("fs")

//brackets before the equal sign means that I'm deconstructing. 
const SVG = require("./lib/SVG.js")
let svgShapes = new SVG("AND", "green", "Triangle", "yellow");
console.log(svgShapes);
let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShapes.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;

fs.writeFile("lib/shape.svg", svgString, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("File written successfully\n");
    }
})


