function solve(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;
  while (counter <= 12) {
    let grade = +input.shift();
    if (grade >= 4.0) {
      sum += grade;
      counter++;
    }
  }
  let avarage = sum/12
  console.log(`${name} graduated. Average grade: ${avarage.toFixed(2)}`)
}
solve(["Pesho","4","5","5.5","6","5.43","4.5","6","5.55","5","6","6","5.43","5"])
