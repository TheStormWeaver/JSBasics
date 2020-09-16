function Solve(input) {
    let datacount = Number(input.shift())
    let sellers = Number(input.shift())
    let cakes = Number(input.shift())
    let gofrets = Number(input.shift())
    let pancakes = Number(input.shift())
    let cakessold = cakes * 45
    let gofretssold =  gofrets * 5.80
    let pancakessold = pancakes * 3.20
    let oneday = (cakessold + gofretssold + pancakessold) * sellers
    let companyfunds = oneday * datacount
    let sumafterrecords = companyfunds - (companyfunds * 0.125)
    console.log(sumafterrecords.toFixed(2))
}
Solve(["20","8","14","30","16"])
