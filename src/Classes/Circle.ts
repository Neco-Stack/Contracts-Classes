import IShape from "../Contracts/IShape";

class Circle implements IShape{
    name: string; 
    color: string;
    radius: number;
    isRound: boolean

    constructor(name: string, color: string, radius: number) {
        this.name = name; 
        this.color = color; 
        this.isRound = true; 
        this.radius = radius


    }
    public draw(): void {
        console.log("Drawing circle");
        
    }
}

export default Circle