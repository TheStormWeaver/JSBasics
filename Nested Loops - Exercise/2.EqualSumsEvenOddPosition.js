function solve(input) {
  let start = +input.shift();
  let end = +input.shift();
  let output = "";
  for (number = start; number <= end; number++) {
    let numasstring = `${number}`;
    let oddsum = 0;
    let evensum = 0;
    for (i = 0; i < numasstring.length; i++) {
      const digit = Number(numasstring[i]);
      if (i % 2 !== 0) {
        oddsum += digit;
      } else {
        evensum += digit;
      }
    }
    if (oddsum == evensum) {
      output += number + " "
    }
  }
  console.log(output)
}
solve(["100000", "100050"])
