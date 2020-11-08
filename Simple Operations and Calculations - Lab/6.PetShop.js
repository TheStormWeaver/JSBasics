function Zoomagazin(input){
    let dogs = Number(input.shift());
    let animals = Number(input.shift());
    let sum = dogs * 2.50 + animals * 4.00;
    console.log(sum.toFixed(2) + " lv.");
}
Zoomagazin(["5","4"])
