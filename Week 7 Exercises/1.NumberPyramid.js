function solve(input) {
  let end = +input.shift();
  let currentnumber = 1;
  let isbigger = false;
  let line = "";
  for (let row = 1; row <= end; row++) {
    for (let number = 1; number <= row; number++) {
      if (currentnumber > end) {
        isbigger = true;
        break;
      }
      line += currentnumber + " ";
      currentnumber++;
    }
    console.log(line);
    line = ""
    if (isbigger) {
      break;
    }
  }
}
solve(["7"])
