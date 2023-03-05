import { Invoice } from "./classes/Invoce.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice ('Mario', 'house building', 500);
// docTwo = new Payment ('Luigi', 'Machine repair', 1000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('Shaun', 'Web Development', 25000);
// const invTwo = new Invoice('Albert', 'Arduino Programming', 10000);
// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);
// invoices.forEach(inv => {
//     console.log(inv.format())
// })
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docOne = addUID({name: 'Shaun', age: 27})
// console.log(docOne.name);
// enum ResourceType { BOOK, AUTHOR, FILM }
// interface Resource<T>{
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.AUTHOR,
//     data: {name: 'Harry Potter'}
// }
// console.log(docThree)
// let student: [string, number];
// student = ['chun', 23];
