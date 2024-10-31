import './style.css'
import Circle from './Classes/Circle';
import Rectangle from './Rectangle/Rectangle';
import Manager from './Classes/Manager';
import IEmployee from './Contracts/Employee';

const circle1 = new Circle("circle", "blue", 12);
const circle2= new Circle("circle", "black", 5);
const circle3= new Circle("circle", "green", 22); 
const rectangle1 = new Rectangle("rectangle", "red", 10, 20)
console.log(circle1, circle2, circle3, rectangle1);

circle1.draw();
rectangle1.draw(); 



