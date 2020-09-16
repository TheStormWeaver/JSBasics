function solve(input) {
  let end = +input.shift()
  let sum = 0
  let maxnumber = Number.MIN_SAFE_INTEGER
  for(number = 1;number <=end;number++){
    let number = +input.shift()
    sum += number
    if(number > maxnumber){
      maxnumber = number
    }

  }
  let result = sum - maxnumber
  if(result === maxnumber){
    console.log(`Yes`)
    console.log(`Sum = ${maxnumber}`)
  }else{
    let diff = Math.abs(maxnumber - result)
    console.log(`No`)
    console.log(`Diff = ${diff}`)
  }
}
solve(["7","3","4","1","1","2","12","1"])
