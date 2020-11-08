function solve(input){
let n = Number(input.shift());
let counter = 0;
let max = Number.MIN_SAFE_INTEGER;
while (counter < n) {
let num = Number(input.shift());
counter++;
if (num > max) {
max = num;
}
}
console.log(max);
}
solve(["2","100","99"])
