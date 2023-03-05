/** 
// DATA TYPES
let name: string = 'Jay'
let age: number;
let isLogic: boolean = true;

age = 25

// ARRAY
let digits: number[] = []
let players: string[] = ['John', 'Peter', 'Luke']

digits.push(1)

console.log(players)


//TUPLES
let student: [number, string] = [1, 'John']

let employees: [number, string, boolean][];

employees = [
    [1, 'John', true],
    [2, 'Judas', false]
]

console.log(employees)

// UNION

let pid: number|string;

pid = true

// ENUM
enum Directions{
    Up,
    Down,
    Left,
    Right
}

console.log(Directions.Left)

// TYPE ASSERTION
let customerID: any;
let ID = <number>customerID;

ID = 25;

console.log(ID)

// FUNCTION

const addition = (x:number, y:number):number => {
    return x + y;
}

console.log(addition(2,2))

const displayName = (name: string):void => {
    console.log('Hello my name is ' + name)
}

displayName('Jay');

// OBJECTS

type Hero = {
    name: string,
    alias: string
}

let hero: Hero = {
    name: 'Tony Stark',
    alias: 'IronMan'
}
console.log(hero)

// TYPE
type codes = number| string;
let code: codes = 0;

// INTERFACE

interface Hero {
    name: string,
    alias: string
}

let hero: Hero = {
    name: 'Steve Rogers',
    alias: 'Captain America'
}

console.log(hero)

// CLASS

interface personFormat{
    name: string,
    age: number,
    height: number
}

class Person implements personFormat{
    name: string
    age: number
    height: number

    constructor(name: string, age: number, height: number){
        this.name = name;
        this.age = age;
        this.height = height
    }

    register(){
        return `${this.name} has been registered`
    }
}

class Hero extends Person{
    power: string;


    constructor(name: string, age: number, height: number, power: string ){
        super(name, age, height);
        this.power = power
    }

}

let hero1 = new Hero('Tony', 38, 165, 'IronMan');

console.log(hero1)
console.log(hero1.register())

// INTERFACE IN FUNCTION

interface MathFunc {
    (x: number, y:number): number
}

const addition: MathFunc = (x:number, y:number) => x + y;

console.log(addition(2,2))

*/

// GENERICS
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3]);
let strArr = getArray(['A','B','C']);


numArr.push(4)
strArr.push('D')
console.log(strArr)
console.log(numArr)

















