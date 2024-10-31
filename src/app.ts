import './style.css'
import Circle from './Classes/Circle';
import Rectangle from './Rectangle/Rectangle';
import Manager from './Classes/Manager';
import IEmployee from './Contracts/Employee';
import Subordinate from './Classes/Subordinate';

const circle1 = new Circle("circle", "blue", 12);
const circle2= new Circle("circle", "black", 5);
const circle3= new Circle("circle", "green", 22); 
const rectangle1 = new Rectangle("rectangle", "red", 10, 20)
console.log(circle1, circle2, circle3, rectangle1);

circle1.draw();
rectangle1.draw(); 

const subordinate1 = new Subordinate(
    "Necati",
    38, 
    "Intern"
)
const subordinate2 = new Subordinate(
    "Ugur",
    35,
    "Blockchain Expert"
)
const subordinate3 = new Subordinate(
    "Gonca", 
    49, 
    "Cryptography Expert"
)
const manager1 = new Manager(
    "Farid", 
    32, 
    "Manager Digital Investments"
)
manager1.addSubordinate(subordinate1); 
manager1.addSubordinate(subordinate2); 
manager1.addSubordinate(subordinate3); 
