// break up with var
let balance = 1240;
balance =1340;
const userName = 'janpakhi potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
// userName = 'moyna pakhi';

const numbers = [45, 23, 89, 66];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;

for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}