function solve(input) {
  let fruit = input.shift();
  let day = input.shift();
  let quantity = +input.shift();
  let price = 0;
  switch (day) {
    case "Monday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Tuesday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Wednesday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Thursday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Friday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Saturday":
      if (fruit == "banana") {
        price = 2.7;
      } else if (fruit == "apple") {
        price = 1.25;
      } else if (fruit == "orange") {
        price = 0.9;
      } else if (fruit == "grapefruit") {
        price = 1.6;
      } else if (fruit == "kiwi") {
        price = 3.0;
      } else if (fruit == "pineapple") {
        price = 5.6;
      } else if (fruit == "grapes") {
        price = 4.2;
      }
      break;
    case "Sunday":
      if (fruit == "banana") {
        price = 2.7;
      } else if (fruit == "apple") {
        price = 1.25;
      } else if (fruit == "orange") {
        price = 0.9;
      } else if (fruit == "grapefruit") {
        price = 1.6;
      } else if (fruit == "kiwi") {
        price = 3.0;
      } else if (fruit == "pineapple") {
        price = 5.6;
      } else if (fruit == "grapes") {
        price = 4.2;
      }
      break;
  }
  if (price > 0){
    console.log(`${(price * quantity).toFixed(2)}`)
  } else {
    console.log("error")
  }
}
solve(["apple","Tuesday","2"])
