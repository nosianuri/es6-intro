function add(num1, num2){
    const total = num1 + num2;
    return total;
}
const result = add(15, 17);
console.log(result);
// Option 2
function add(num1, num2) {
    console.log(num1, num2);
    if (num2 == undefined){
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);
// Option 1
function add(num1, num2) {
    num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);
// Option 3
function add(num1, num2 = 33) {
    const total = num1 + num2;
    return total;
}
const result = add(15, 0);
console.log(result);
