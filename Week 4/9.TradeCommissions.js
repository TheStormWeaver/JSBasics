function solve(input) {
  let city = input.shift();
  let sales = +input.shift();
  let comision = 0;
  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        comision = 0.05;
      } else if (sales >= 500 && sales <= 1000) {
        comision = 0.07;
      } else if (sales >= 1000 && sales <= 10000) {
        comision = 0.08;
      } else if (sales > 10000) {
        comision = 0.12;
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        comision = 0.045;
      } else if (sales >= 500 && sales <= 1000) {
        comision = 0.075;
      } else if (sales >= 1000 && sales <= 10000) {
        comision = 0.1;
      } else if (sales > 10000) {
        comision = 0.13;
      }
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        comision = 0.055;
      } else if (sales >= 500 && sales <= 1000) {
        comision = 0.08;
      } else if (sales >= 1000 && sales <= 10000) {
        comision = 0.12;
      } else if (sales > 10000) {
        comision = 0.145;
      }
      break;
  }
  if (comision > 0) {
    console.log(`${(comision * sales).toFixed(2)}`);
  } else {
    console.log("error")
  }
}
solve(["Sofia","1500"])
