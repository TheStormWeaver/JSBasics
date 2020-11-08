function solve(input) {
  let initialvalue = +input.shift();
  let end = initialvalue * 2;
  let leftsum = 0;
  let rightsum = 0;
  for (let i = 1; i <= end; i++) {
    let currentnumber = +input.shift();
    if (i <= initialvalue) {
      leftsum += currentnumber;
    } else {
      rightsum += currentnumber;
    }
  }
  if(leftsum === rightsum){
    console.log(`Yes, sum = ${leftsum}`)
  }else{
    let difference = Math.abs(leftsum - rightsum)
    console.log(`No, diff = ${difference}`)
  }
}
solve(["2","10","90","60","40"])
