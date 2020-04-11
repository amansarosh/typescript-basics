import * as _ from 'lodash';

async function hello() {
    return 'world';
}

// let lucky = 23; //implicit
// let lucky: number = 23; //explicit
// // lucky = '23' // string not assignable to number pro to ts

interface Person {
    first: string;  // reqiured
    last: string;  //reqiured
    [key: string]: any  //can be any
}
const person: Person = {
    first: 'Aman',
    last: 'Sarosh'
}
const person1: Person = {
    first: 'Person1FN',
    last: 'Person1LN',
    fast: true
}


function pow(x: number, y: number) {
    return Math.pow(x, y);
}
console.log(pow(3, 3));


const arr: number[] = []
arr.push(1)
