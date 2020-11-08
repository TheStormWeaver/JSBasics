function solve(input) {
  let end = +input.shift()
  let oddsum = 0
  let evensum = 0
  for(let i = 1; i <= end; i++){
    let number = +input.shift()
    if(i % 2 == 0){
      evensum += number
    }else{
      oddsum += number
    }
  }
  if (oddsum == evensum){
    console.log(`Yes \nSum = ${oddsum}`)
  }else{
    let diff = Math.abs(oddsum - evensum)
    console.log(`No \nDiff = ${diff}`)
  }
}
solve(["4","10","50","60","20"])
