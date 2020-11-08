/*
Peter wants to buy N video cards, M processors and P number of RAM. If the number of video cards is higher
than the processors's number, he receives a 15% discount on the final bill. The following prices apply:
• Video card - BGN 250 / pc.
• Processor - 35% of the price of the purchased video cards 
• Memory frame - 10% of the price of the purchased video cards 
Calculate the amount needed to purchase the materials and calculate whether the budget will be enough.
Input
The input consists of four rows:
1. Peter's budget - a real number in the interval [0.0… 100000.0]
2. The number of video cards - an integer in the range [0… 100]
3. The number of processors - an integer in the range [0… 100]
4. The number of memory frames - an integer in the interval [0… 100]
Output
1 line is printed on the console, which should look like this:
• If the budget is sufficient:
"You have {leftover budget} leva left!"
• If the amount exceeds the budget:
"Not enough money! You need {need} amount left!"
Format the result to the second decimal place.
 */
function shopping(input) {
  let budget = input.shift()
  let videocardCount = input.shift()
  let processorCount = input.shift()
  let ramCount = input.shift()
  let videocard = 250 * videocardCount
  let processor = (videocard * 0.35) * processorCount
  let ram = (videocard * 0.10) * ramCount
  let finalprice = videocard + processor + ram
  if(videocardCount > processorCount){
    finalprice = finalprice * 0.85
  }
  let leftover = budget - finalprice
  if(budget > finalprice){
    console.log(`You have ${Math.abs(leftover.toFixed(2))} leva left!`)
  }else{
    console.log(`Not enough money! You need ${Math.abs(leftover.toFixed(2))} leva more`)
  }
}
shopping([900, 2, 1, 3]);
