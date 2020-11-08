function solve(input) {
let price = Number(input.shift());
let puzzlescount = Number(input.shift());
let dollscount = Number(input.shift());
let bearscount = Number(input.shift());
let minionscount = Number(input.shift());
let truckscount = Number(input.shift());
let sum =puzzlescount *2.60 +dollscount *3 +bearscount *4.1 +minionscount *8.2 +truckscount * 2
let toyscount = puzzlescount+ dollscount + bearscount + minionscount+ truckscount;
if(toyscount >=50){
    let discount = sum * 0.25;
    sum -= discount
}
let RentDiscount = sum * 0.1
sum -= RentDiscount
if(sum >= price){
    console.log(`Yes! ${(sum - price).toFixed(2)} lv left.`)
}else {
    console.log(`Not enough money! ${(price - sum).toFixed(2)} lv needed.`)
}
}
solve(["30","50","10"])
