function solve(input) {
  let age = +input.shift();
  let gender = input.shift();
  if (gender == "f") {
    if (age < 16) {
      console.log("Miss");
    } else {
      console.log("Ms.");
    }
  }
  if (gender == "m") {
    if (age < 16) {
      console.log("Master");
    } else {
      console.log("Mr.");
    }
  }
}
