function solve(input) {
  let end = +input.shift();
  let oddsum = 0;
  let oddmin = Number.MAX_SAFE_INTEGER;
  let oddmax = Number.MIN_SAFE_INTEGER;

  let evensum = 0;
  let evenmin = Number.MAX_SAFE_INTEGER;
  let evenmax = Number.MIN_SAFE_INTEGER;
  for (let position = 1; position <= end; position++) {
    let number = +input.shift();
    if (position % 2 !== 0) {
      oddsum += number;
      if (number > oddmax) {
        oddmax = number;
      }
      if (number < oddmin) {
        oddmin = number;
      }
    } else {
      evensum += number;
      if (number > evenmax) {
        evenmax = number;
      }
      if (number < evenmin) {
        evenmin = number;
      }
    }
  }
  console.log(`OddSum=${oddsum.toFixed(2)},`);
  if (oddmin !== Number.MAX_SAFE_INTEGER) {
    console.log(`OddMin=${oddmin.toFixed(2)},`);
  } else {
    console.log(`OddMin=No,`);
  }
  if (oddmax !== Number.MIN_SAFE_INTEGER) {
    console.log(`OddMax=${oddmax.toFixed(2)},`);
  } else {
    console.log(`OddMax=No,`);
  }
  console.log(`EvenSum=${evensum.toFixed(2)},`);
  if (evenmin !== Number.MAX_SAFE_INTEGER) {
    console.log(`EvenMin=${evenmin.toFixed(2)},`);
  } else {
    console.log(`EvenMin=No,`);
  }
  if (evenmax !== Number.MIN_SAFE_INTEGER) {
    console.log(`EvenMax=${evenmax.toFixed(2)}`);
  } else {
    console.log(`EvenMax=No`);
  }
}
solve(["6","2","3","5","4","2","1"])
