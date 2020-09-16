function solve(input) {
  let product = input.shift();
  let town = input.shift();
  let kolichestvo = input.shift();
  let price = 0;
  if (town == "Sofia") {
    if (product == "coffe") {
      price = kolichestvo * 0.50;
      console.log(price);
    } else if (product == "water") {
      price = kolichestvo * 0.80;
      console.log(price);
    } else if (product == "sweets") {
      price = kolichestvo * 1.45;
      console.log(price);
    } else if (product == "peanuts") {
      price = kolichestvo * 1.60;
      console.log(price);
    } else if (product == "beer") {
      price = kolichestvo * 1.20;
      console.log(price);
    }
  }
  if (town == "Varna") {
    if (product == "coffe") {
      price = kolichestvo * 0.45;
      console.log(price);
    } else if (product == "water") {
      price = kolichestvo * 0.70;
      console.log(price);
    } else if (product == "sweets") {
      price = kolichestvo * 1.35;
      console.log(price);
    } else if (product == "peanuts") {
      price = kolichestvo * 1.55;
      console.log(price);
    } else if (product == "beer") {
      price = kolichestvo * 1.10;
      console.log(price);
    }
  }
  if (town == "Plovdiv") {
    if (product == "coffe") {
      price = kolichestvo * 0.40;
      console.log(price);
    } else if (product == "water") {
      price = kolichestvo * 0.70;
      console.log(price);
    } else if (product == "sweets") {
      price = kolichestvo * 1.30;
      console.log(price);
    } else if (product == "peanuts") {
      price = kolichestvo * 1.50;
      console.log(price);
    } else if (product == "beer") {
      price = kolichestvo * 1.15;
      console.log(price);
    }
  }
}
