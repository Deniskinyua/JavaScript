/**
 * method includes();
 * 
 * syntax: (i) .includes(searchEelement), (ii) .includes(searchEelement, fromIndex)
 * 
 * Return value: (Boolean) true if found, false otherwise
 */


// Declare variable
let word = 'Goodmorning my neighbours. I am going to work';

//Using syntax: (i) .includes(searchEelement)

//Just confirming
console.log(word.includes('Goodbye'));


//function with if/else statements
function chekingIncludes(word) {
    if (word.includes('Goodbye')) {
        return word;
}
    else{
        return word + '.Goodbye!';
    }
}
console.log(chekingIncludes(word));

// Rather precise function 
function chekingTncl (word) {
    return word.includes('.Hooray!') ? word : word + '.Hooray!';
}
console.log(chekingTncl(word));

//Using syntaxt: includes(searchElement, fromIndex);
console.log(word.includes('Goodmorning', 9));


