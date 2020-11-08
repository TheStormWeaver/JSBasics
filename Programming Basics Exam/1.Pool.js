/*
A teacher from SoftUni organizes a working day at the pool because of the arrival of the summer.
Your task is to write a program that calculates how much should be paid. Every
member of the team must pay an entrance fee. One umbrella is enough for two
people.You know that only 75% of the team is looking for a sunbed. When calculating the number of umbrellas and sunbeds, write
their number that is closer to a larger integer.

4 numbers are read from the console:
1. First row - number of people. Integer in the interval [1… 100]
2. Second row - entrance fee. Number in the interval [0.00… 50.00]
3. Third row - price one for a sunbed. Number in the interval [0.00… 50.00]
4. Fourth row - price for one umbrella. Number in the interval [0.00 ... 50.00]
*/
function pool(input) {
  let people = input.shift()
  let entryfee = input.shift()
  let sunbedprice = input.shift()
  let umbrellaprice = input.shift()
  let fee = people * entryfee
  let sunbed = Math.ceil(people * 0.75) * sunbedprice
  let umbrella = Math.ceil(people * 0.50) * umbrellaprice
  let finalsum = fee + sunbed + umbrella
  console.log(`${finalsum.toFixed(2)} lv.`)
}
pool([21, 5.5, 4.4, 6.2]);
