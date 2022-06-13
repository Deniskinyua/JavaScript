// ARROW FUNCTIONS
/**
 * This is a concise way of creating JavaScript Functions besides use of function expressions
 */
//Normal JavaScript Functions
function interviewQuestion(uname){
    console.log(`Hello ${uname}, tell us more about yourself.`)
}
interviewQuestion('John');//Expected output: Hello John, tell us more about yourself.

//Using arrow functions
const interviewQuestion1 = (yourname) => {
    console.log(`Hello ${yourname}, tell us more about yourself.`)
}
interviewQuestion1('Lucy'); //Expected output:Hello Lucy, tell us more about yourself.

//Remember we can also declare the functions anonymously
const interviewQuestion2 = function(uname){
    console.log(`Hello ${uname}, tell us more about yourself.`)
}
interviewQuestion2('Mwangi')// Hello Mwangi, tell us more about yourself.

//Refining the arrow function declaration
const interviewQuestion3 = yourname => { //Note the removed curly brackets (Only if we have one parameter)
    console.log(`Hello ${yourname}, tell us more about yourself.`)
}
interviewQuestion3('Lucy'); //Expected output:Hello Lucy, tell us more about yourself.

//Further Refinement
const interviewQuestion4 = yourname => yourname
interviewQuestion4('Hello Mercy'); //Expected output:Hello Mercy(Execute on console).

//The arrow function can work with parenthesis
const interviewQuestion5 = yourname => (
    console.log(`Hello ${yourname}, tell us more about yourself.`)
) //Note replaced curly brackets with parenthesis (Only if we have one parameter)
interviewQuestion5('Wambui');//Expected Hello Wambui, tell us more about yourself.

//Using the return statement
const interviewQuestion6 = yourname => {
    return yourname
}
console.log(interviewQuestion6('Wambui')); //Expected:Wambui

//Having two or more parameters
const interviewQuestion7 = (yourname, age) => [yourname, age] //enclose parameters in parenthsis and array respectively
console.log(interviewQuestion7('Wambui', '26')); //Expected:[Wambui, 26]



  



