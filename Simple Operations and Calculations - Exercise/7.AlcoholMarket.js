function Solve(input) {
    let wiskiprice = Number(input.shift())
    let beer = Number(input.shift())
    let wine = Number(input.shift())
    let rakiq = Number(input.shift())
    let wiski = Number(input.shift())
    let rakiqprice = wiskiprice / 2
    let wineprice = rakiqprice - (0.4 * rakiqprice)
    let beerprice = rakiqprice - (0.8 * rakiqprice)
    let rakiqsum = rakiq * rakiqprice
    let winesum = wine * wineprice
    let beersum = beerprice * beer
    let wiskisum = wiski * wiskiprice
    let sum = rakiqsum + winesum + beersum + wiskisum
    console.log(sum.toFixed(2))
}
Solve(["50","10","3.5","6.5","1"])
