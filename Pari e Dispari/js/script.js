let userChoice;
let userNum;

do{
    userChoice = prompt("Scegliere pari o dispari");
}while((userChoice != 'pari') && (userChoice != 'dispari'));

do{
    userNum = parseInt(prompt("Scegliere numero tra 1 e 5"))
}while((isNaN(userNum)) || (userNum < 1) || (userNum > 5));

console.log(userChoice);
console.log(userNum);

const pcNum = randNum(1,5);
console.log(pcNum);
const numSum = userNum + pcNum;
console.log(numSum);
let result = document.getElementById("result");

if(userWon(userChoice, numSum)){
    result.innerHTML += `
        <h1> Ha vinto l'utente</h1>
    `
}else{
    result.innerHTML += `
        <h1> Ha vinto il pc</h1>
    `
}


function randNum(min, max){
    return Math.ceil((Math.random() * (max - min)) + min);
}

function userWon(choice,num){
    if(((choice === 'pari') && (isEven(num)) || ((choice === 'dispari') && !(isEven(num)) ))){
        return true;
    }
    //ha vinto l'utente
    return false;
    //ha vinto il pc
}

function isEven(num){
    return num % 2 ? false : true;
}
