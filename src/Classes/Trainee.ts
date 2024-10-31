import IEmployee from "../Contracts/Employee";
import Employee from "./EmployeeClass";


class Trainee extends Employee implements IEmployee{
    position: string = "Trainee";
    constructor(name: string, age: number, startDate: Date){
        super(name, age, startDate)
    }
}
export default Trainee;




