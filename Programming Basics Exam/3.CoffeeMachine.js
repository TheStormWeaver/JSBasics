/*
Write a program that calculates the bill of a customer who bought a certain number of drinks from a coffee machine.
        Sugar        Normal      Extra sugar
Espresso BGN 0.90 / pc. BGN 1 / pc. BGN 1.20 / pc.
Cappuccino BGN 1.00 / pc. BGN 1.20 / pc. BGN 1.60 / pc.
Tea BGN 0.50 / pc. BGN 0.60 / pc. BGN 0.70 / pc.
You should keep in mind the following discounts:
• There is a 35% discount for a sugar-free drink.
• If you choose "Espresso" and buy at least 5, there is a 25% discount.
• For an amount exceeding 15, 20% discount from the final price,
Discounts are applied in the order of their description.
Input
The input is read from the console and consists of three lines:
• First line - drink - text with options "Espresso", "Cappuccino" or "Tea"
• Second line - sugar - text with "Without", "Normal" or "Extra" options
• Third row - number of drinks - integer in the range [1… 50]
Output
One line should be printed on the console:
"You bought {number of drinks} cups of {drink} for {final price} lv."
The price should be formatted to the second digit after the decimal point.
 */
function coffee(input) {
  let drink = input.shift();
  let sugar = input.shift();
  let drinkcount = input.shift();
  let drinksum = 0;
  switch (drink) {
    case "Espresso":
      if (sugar == "Without") {
        drinksum += 0.9 * drinkcount;
        drinksum *= 0.65;
      } else if (sugar == "Normal") {
        drinksum += 1 * drinkcount;
      } else if (sugar == "Extra") {
        drinksum += 1.2 * drinkcount;
      }
      if (drinkcount > 5) {
        drinksum *= 0.75;
      }
      break;
    case "Cappuccino":
      if (sugar == "Without") {
        drinksum += 1 * drinkcount;
        drinksum *= 0.65;
      } else if (sugar == "Normal") {
        drinksum += 1.2 * drinkcount;
      } else if (sugar == "Extra") {
        drinksum += 1.6 * drinkcount;
      }
      break;
    case "Tea":
      if (sugar == "Without") {
        drinksum += 0.5 * drinkcount;
        drinksum *= 0.65;
      } else if (sugar == "Normal") {
        drinksum += 60 * drinkcount;
      } else if (sugar == "Extra") {
        drinksum += 0.7 * drinkcount;
      }
      break;
  }
  if (drinksum > 15) {
    drinksum *= 0.8;
  }
  console.log(
    `You bought ${drinkcount} cups of ${drink} for ${drinksum.toFixed(2)} lv.`
  );
}
coffee(["Espresso", "Without", 10]);
coffee(["Cappuccino", "Normal", 13]);
coffee(["Tea", "Extra", 3]);
