import IEmployee from "../Contracts/Employee";
import Employee from "./EmployeeClass";

class Subordinate extends Employee implements IEmployee{
    constructor(name: string, age: number, startDate: Date){
        super(name, age, startDate)
        this.position = "Subordinate"
    }
    }



export default Subordinate