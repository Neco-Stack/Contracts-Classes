import IEmployee from "../Contracts/Employee";

class Manager implements IEmployee {
    name: string; 
    age: number; 
    position: string; 
    private assignedEmployees: IEmployee[]; 

    constructor(name: string, age: number, position: string){
        this.name = name; 
        this.age = age;
        this.position = position; 
        this.assignedEmployees = []
    }
}




export default Manager;