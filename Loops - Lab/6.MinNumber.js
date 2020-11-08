function solve(input){
  let n = Number(input.shift()); 
  let counter = 0;
  let min = Number.MAX_SAFE_INTEGER;
  while (counter < n) {
  let num = Number(input.shift());
  counter++;
  if (num < min) {
  min = num;
  }
  }
  console.log(min);
  }
solve(["2","100","99"])
