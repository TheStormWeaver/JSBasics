function solve(input) {
  let name = input.shift();
  let counter = 1;
  let sum = 0;
  let excluded = 0;
  let isexcluded = false;
  while (counter <= 12) {
    let grade = +input.shift();
    if (grade >= 4.0) {
      sum += grade;
      counter++;
    } else if (grade < 4.0) {
      excluded++;
    }
    if (excluded >= 2) {
      isexcluded = true;
      break;
    }
  }
  let avarage = sum / 12;
  if (isexcluded == true){
    console.log(`${name} has been excluded at ${counter} grade`)
  }else{
  console.log(`${name} graduated. Average grade: ${avarage.toFixed(2)}`);
  }
}
solve(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
