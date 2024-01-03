class Circle {
    constructor(radius, double, colour) {
        this.radius = radius;
        this.double = double;
        this.colour = colour;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
   }

}
{
const myCircle = new Circle(7);
myCircle.setRadius(8);
const area = myCircle.calculateArea();
const circumference = myCircle.calculateCircumference();
const radius =myCircle.getRadius()
console.log(`The area of the circle is: ${area.toFixed(2)}`);
console.log(`The circumference of the circle is: ${circumference.toFixed(2)}`);
console.log(`The radius of the circle is :${(radius)}`)
console.log(`Updated radius of the circle: ${myCircle.getRadius()}`);

} {
    const circle = new Circle("0.5", "1.0", "RED")
    console.log(circle)
}
