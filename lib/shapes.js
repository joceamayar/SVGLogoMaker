//Shape serves as the parent class and will transfer all of its attributes to the child classes.

class Shape {
    constructor(text = "svg", textFill = "black", shape ="", shapeFill="") {
        this.text = text;
        this.textFill = textFill;
        this.shape= shape;
        this.shapeFill= shapeFill;
    }
}

//The classes Circle, Square, and Triangle are child classes that inherit properties from a parent class by using the 'extends' keyword. When doing so, the 'super' class is invoked to pass any necessary parameters.

class Circle extends Shape {

    constructor(text="svg",textFill = "black",shape ="", shapeFill="" ) {
        super(text,textFill, shape, shapeFill)
    }

    render() {
        return `
            <circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        `;
    }
}

class Square extends Shape {

    constructor(text="svg", textfill = "black",shape ="", shapeFill="" ) {
        super(text, textfill, shape, shapeFill)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`
    }
}
class Triangle extends Shape {

    constructor(text="svg", textfill = "black",shape ="", shapeFill="" ) {
        super(text, textfill, shape, shapeFill)
    }

    render() {
        return `<polygon points="30,4,4,60,60,60" fill="${this.shapeFill}" />
        <text x="32" y="50" font-size="15" text-anchor="middle" fill="white" >${this.text}</text>`
    }
}

//module.exports allows us to export the classes from this module to be used in other parts of a program. 
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};



