const { circle, } = require("./shapes");
const { square, } = require("./shapes");
const { triangle, } = require("./shapes");

test('should ', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="black" />`);
});

test('should ', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<rect width="100%" height="100%" fill="black" />`);
});

test('should ', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<polygon points="30,4,4,60,60,60" fill="black"/>`);
});

