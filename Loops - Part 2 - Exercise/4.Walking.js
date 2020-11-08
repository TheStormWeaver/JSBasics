function solve(input) {
  let command = input.shift();
  let stepssum = 0;
  let arestepsreached = false
  while (command !== "Going home") {
    let steps = Number(command);
    stepssum += steps;
    if (stepssum >= 10000) {
      arestepsreached = true
      break;
    }
    command = input.shift();
  }
  if (command === "Going home") {
    stepssum += Number(input.shift());
  }
  if (stepssum >= 10000) {
    console.log("Goal reached! Good job!");
  } else {
    let result = 10000 - stepssum;
    console.log(`${result} more steps to reach goal.`);
  }
}
solve(["1000","1500","2000","6500"])
