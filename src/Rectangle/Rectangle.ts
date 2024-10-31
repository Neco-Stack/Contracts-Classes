import IShape from "../Contracts/IShape";

class Rectangle implements IShape {
    name: string; 
    color: string; 
    width: number; 
    height: number; 
    isRound: boolean;

    constructor(name: string, color:string, width:number, height:number,){
        this.name = name; 
        this.color = color; 
        this.width = width; 
        this.height = height
        this.isRound = false
    }

        public draw(): void {
            console.log("Drawing rectangle");
        }
}

export default Rectangle;
