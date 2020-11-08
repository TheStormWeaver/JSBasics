/*
Ivan has invented a new game so he can compete with his friends. Your task is to write a
program for the game. Each player writes his/her name, then for each letter of their name they write one
letter, if the number matches the ASCII value of the corresponding letter, the player receives 10 points, 
otherwise, they get only 2 points. The winner is the player with the most points at the end of the game. In case of
two players having equal number of points, the second who reaches the result wins.
Input
Until you receive the "Stop" command, read one line at a time:
• Name of the player with length n - text
For each player read n number of rows:
• number - an integer in the interval [0… 127]
Output
Print one line in the following format:
• "The winner is {winner's name} with {winner's points} points!"
 */
function nameGame(input) {
  let name = input.shift()
  let bestpoints = 0
  let winner = ""
  while(name != "Stop"){
    let points = 0
    for(i = 0; i < name.length; i++){
      let num = input[i]
      let ascii = name[i].charCodeAt()
      if(num == ascii){
        points += 10
      }else{
        points += 2
      }
      if (points >= bestpoints){
        bestpoints = points
        winner = name
      }
    }
    name = input.shift()
  }
  console.log(`The winner is ${winner} with ${bestpoints} points!`)
}
nameGame(["Ivan",
  73,
  20,
  98,
  110,
  "Ivo",
  80,
  65,
  87,
  "Stop"]);

