import { calcFactorial } from "./calcFactorial";
let i = 1;
let result = 1;
while (result <= 2**53 - 1) {
  i++;
  result *= i;
}
console.log(i - 1);

console.log(calcFactorial(19));
console.log(2**53 - 1);