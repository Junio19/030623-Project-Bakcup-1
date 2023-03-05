import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter{
   
    constructor(
        public recepient: string,
        public details: string,
        public amount: number,
    ){}

    format(){
        return `${this.recepient} is owed P${this.amount} for ${this.details}`
    }
}