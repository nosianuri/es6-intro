/* let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great';
// default parameter
function getName(first, last = 'Chowdhury'){
    return first + ' ' + last;
}
// template string
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`
console.log(myPeople);
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}
 // template string
 const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Akbar')} My name is ${priyoPerson}.`

 console.log(myPeople);

 // arrow function
 const getName2 = (first, last) => first + ' ' + last;
 const fiveTimes = x => x * 5;
 const bigArrowFunc = (x, y, z) => {
const firstPart = x + y;
const secondPart = y * z;
const thirdPart = x / z;
const result = (firstPart + secondPart) * thirdPart;
return result;
 }

 const nnumbers = [2, 4, 67, 54];
 const min = Math.min(...numbers); */

//  function getSum(a,b=9){
//      return a+b;
//  }
//  console.log(getSum(2,7));

//  const y = x => x * x;
//  const z = y(5);
//  console.log(z);

//  const myFunc =(Nayak)=> console.log('Nayak!');
const numbers= [10, 20, 30, 40, 50, 60, 70];
const max =Math.max(...numbers);
console.log(max);
const cars = ['toyota', 'honda', 'mercedes'];
const newCars =[...cars, 'ferari'];
console.log(newCars);