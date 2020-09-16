function solve(input) {
    let shape = input.shift();
    let area = 0;
    if(shape === "square"){
      let side = Number(input.shift());
      area = side * side;
    }else if(shape === "rectangle"){
      let sideA = Number(input.shift());
      let sideB = Number(input.shift());
      area = sideA * sideB;
    }else if(shape ==="circle"){
        let radius = Number(input.shift());
        area = radius * radius * Math.PI
    }else if(shape ==="triangle"){
        let strana = Number(input.shift());
        let height = Number(input.shift());
        area = strana * height * 0.5
    }
    console.log(area.toFixed(3));
}
