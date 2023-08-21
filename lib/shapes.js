// Shape is the parent class, this one will pass everithing to the child classes 
class Shape {
    constructor(fill = "black") {
        this.fill = fill;
    }
    // set.color 
}
//Circle, Square, and Triangle are the child classes, they all the the attributes from the parent class Shape

class Circle extends Shape {

    constructor(fill = "black") {
        super(fill)
        // this.radius = radius
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }
}

class Square extends Shape {

    constructor(fill = "black") {
        super(fill)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }
}
class Triangle extends Shape {

    constructor(fill = "black") {
        super(fill)
    }

    render() {
        return `<polygon points="30,4,4,60,60,60" fill="${this.fill}" />`
    }
}

//module.exports will export the classes to used them in other files usign the word "require"
module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};