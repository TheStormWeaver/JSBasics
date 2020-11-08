function greetingByName(input) {
    let name = input.shift();
    let greeting = `Hello, ${name}!`;
    console.log(greeting);    
    }
greetingByName(["Georgi"])
