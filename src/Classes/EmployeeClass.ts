import IEmployee from "../Contracts/Employee";

class Employee implements IEmployee {
    name: string; 
    age: number; 
    position: string; 
    startDate: Date

    constructor(name: string, age: number, startDate: Date){
        this.name = name; 
        this.age = age; 
        this.startDate = startDate; 
        this.position = ""
    }
    getYearsOfService(): number {
        const actualYear = new Date; 
        const yearsOfService = actualYear.getFullYear() - this.startDate.getFullYear(); 
        return yearsOfService;
    }
}

export default Employee; 