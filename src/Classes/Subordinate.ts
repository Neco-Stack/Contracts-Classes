import IEmployee from "../Contracts/Employee";

class Subordinate implements IEmployee{
    name: string; 
    age: number; 
    position: string; 

    constructor(name: string, age: number, position: string){
        this.name = name; 
        this.age = age; 
        this.position = position
    }
}


export default Subordinate