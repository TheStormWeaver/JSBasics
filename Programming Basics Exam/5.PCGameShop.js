/*
A computer game store hires you to calculate  the percentage of game sales from
last month, calculating what percentage of total sales are for any of the games.
The percentages should be divided into four parts, three game titles and everything else:
• Hearthstone
• Fornite
• Overwatch
• Others
Input
From the console read:
• Number of games sold - n - positive integer in the range [1… 100]
For the next n lines, read one line at a time:
Game name - string
Output
Write four lines on the console:
"Hearthstone - {percentage of sales on Hearthstone}%"
"Fornite - {percentage of Fornite sales}%"
"Overwatch - {percentage of Overwatch sales}%"
"Others - {percentage of sales of all other games}%"
The result should be rounded to the second digit after the decimal point.
 */
function pcGameShop(input) {
  let soldgames = input.shift();
  let hearthcount = 0;
  let fortcount = 0;
  let overcount = 0;
  let othercount = 0;
  for (i = 0; i < input.length; i++) {
    let game = input[i];
    if (game == "Hearthstone") {
      hearthcount++;
    } else if (game == "Fortnite") {
      fortcount++;
    } else if (game == "Overwatch") {
      overcount++;
    } else {
      othercount++;
    }
  }
  let finalh = (hearthcount / soldgames) * 100
  let finalf = (fortcount / soldgames) * 100
  let finalo = (overcount / soldgames) * 100
  let finalother = (othercount / soldgames) * 100
  console.log(`Hearthstone - ${finalh.toFixed(2)}%`)
  console.log(`Fortnite - ${finalf.toFixed(2)}%`)
  console.log(`Overwatch - ${finalo.toFixed(2)}%`)
  console.log(`Others - ${finalother.toFixed(2)}%`)
}
pcGameShop([4, "Hearthstone", "Fortnite", "Overwatch", "Counter-Strike"]);
pcGameShop([3, "Diablo 2", "Hearthstone", "Starcraft 2"]);

