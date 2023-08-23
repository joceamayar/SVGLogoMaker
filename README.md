# SVG Logo Maker 

https://github.com/joceamayar/SVGLogoMaker

## Description


This program makes use of "package.json," which serves as the central hub for managing dependencies, scripts, and project metadata, making it an indispensable component of this program.

In addition we use a series of files like: example files that contain the original SVG code for three shapes, serving as reference examples. The shapes.test.js file contains test cases that ensure shapes (Circle, Square, and Triangle) from the "./shapes" module can be created, have their colors set, and render to SVG representations correctly. 

Within the SVG.js file, classes from the './shapes' module are imported using destructuring to make them accessible. A new class is defined with a constructor method, allowing specific parameters during instantiation. These parameters become attributes of objects created from the SVG class in index.js. As for the index.js file it generates an SVG file by creating an instance of the SVG class with specific shape and color parameters. Then saves this SVG to the file system as "shape.svg," with the shape and colors determined by the user input. Finally the shape.svg file contains the generated logo.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install this program you have to make sure to installed  Node.js system, which can be find at: (https://nodejs.org/).



## Usage

The SVG Logo Maker enables users to design professional logos for their projects without the need for a graphic designer. It offers a selection of primary shapes - circles, squares, and triangles - which users can customize by adding their business initials with up to three letters and picking their favorite colors.




## Credits

Class video: https://zoom.us/rec/play/0OwyTjUTbLFr1IQvgfde24G6b-SeWiqDkSCBKbaJ-pY9wnIC3BmYOczsekwkwCFrNmi40SbKkwZHm0Xg.0LkzGgvB00v3l5-o?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fzoom.us%2Frec%2Fshare%2FySiB9JkXkrZC393YATaGJVJvGy0Q1-dIk-l6gPs4c1uW8-lHN2bOb-KIdBXVwsLr.qJEXuvEm0xoHfVIL

Triangle: https://stackoverflow.com/questions/46699715/place-text-inside-of-the-svg-polygon
          
Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Constructures: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

SVG: https://en.wikipedia.org/wiki/SVG
    https://svgjs.dev/docs/3.0/getting-started/
    https://www.geeksforgeeks.org/node-js-fs-writefile-method/
    https://stackoverflow.com/questions/32657516/how-to-properly-export-an-es6-class-in-node-4
    https://www.geeksforgeeks.org/node-js-fs-writefile-method/
    https://developer.mozilla.org/en-US/docs/Web/SVG


## License

MIT License

Copyright (c) 2023 Jos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
