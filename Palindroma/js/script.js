let world;

do{
    world = prompt('Inserire una parola');
}while(!(isNaN(world)));



const size = world.length -1;

const palindroma = paliCheck(world);

const result = document.getElementById('result');
console.log(result);
if(palindroma){
    result.innerHTML += `
        <h1>E' palindroma</h1>
    `
}else{
    result.innerHTML += `
        <h1>Non è palindroma</h1>
    `
}

function paliCheck(string){
    let j = size;
    let palindroma = false;
    for(let i = 0; i < size ; i++ ){
        console.log(string[i]);
        console.log(string[j]);
        if(string[i] === string[j]){
            palindroma = true;
        }else{
            palindroma = false;
        }
        console.log(palindroma);
        j--;
    }
    return palindroma;
}