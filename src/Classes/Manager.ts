import IEmployee from '../Contracts/Employee';
import Employee from './EmployeeClass';

class Manager extends Employee {
    private assignedEmployees: IEmployee[]; 

    constructor(name: string, age: number, startDate: Date){
        super(name, age, startDate)
        this.assignedEmployees = []
    }
    addSubordinate(employee: IEmployee): void {
        this.assignedEmployees.push(employee)
    }
}



export default Manager;