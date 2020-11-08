function solve(input) {
   let number = Number(input.shift());
   while (number < 1 || number > 100) {
   number = Number(input.shift());
   }
   console.log(number)
   }
   solve(["35"])
