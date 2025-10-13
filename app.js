let num = Math.floor(Math.random() * 10) + 1;
console.log('Try to guess a number between 1 to 10');
while (true) {
    let a = prompt('Enter number (type "quit" to exit or "change" to change computer number):');
    if (a == "quit") {
        console.log('Quitting');
        break;
    } else if (a == "change") {
        let Num1;
        do {
            Num1 = Math.floor(Math.random() * 10) + 1;
        } while (Num1 == num);
        console.log('Number changes old number is',num)
        num = Num1;
        continue;
    }
    a = Number(a);
    if (isNaN(a)) {
        console.log("Please enter a valid number!");
        continue;
    }
    if (a === num) {
        console.log('Correct guess!',a);
        break;
    } else if (a > num) {
        console.log("You guessed too high! that is",a);
    } else if (a < num) {
        console.log("You guessed too low! that is",a);
    }
}
