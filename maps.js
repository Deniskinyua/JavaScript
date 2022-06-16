//USING MAP METHOD

/**
 * The map() method creates a new array populated with the results of 
 * calling a provided function on every element in the calling array.
 */


//Assuming we have an array of numbers:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //Declraing the array as a function

//Performing a mapping on array numbers:
const numbersMapped = numbers.map(x => (x * x) ); // Arrow function 

//Displaying the mapped array
console.log(numbersMapped); // Expected [1,   4,   9,  16,  25,  36,49,  64,  81, 100, 121, 144,169, 196, 225]

//We want to square root the new mapped array:
const squareRoot = numbersMapped.map(x => Math.sqrt(x));

//Displaying the square root array
console.log(squareRoot); // Expected [1,  2,  3,  4,  5,  6,7,  8,  9, 10, 11, 12, 13, 14, 15]

//EMPLOYEE DATABASE 
let employees = [
{
    name: 'john',
    id: 100,
    department: 'procurement',
    projectsHandled: 2
},
{
    name: 'rose',
    id: 101,
    department: 'marketing',
    projectsHandled: 3
},
{
    name: 'kilman',
    id: 102,
    department: 'operations',
    projectsHandled: 8
},
{
    name: 'james',
    id: 103,
    department: 'engineering',
    projectsHandled: 10
},
{
    name: 'lilian',
    id: 104,
    department: 'corporate affairs',
    projectsHandled: 2

}
]

//function loopsUpdates (array) { //function looping through the array and updates
 //   const newArray = []; //pushing the updates and stores them
 //   for (let item of array) { // for loop iteration
 //       newArray.push(item.name);  //Defining what to push
 //   }
 //   return newArray; //Returning the new array
//}
//console.log (loopsUpdates(employees)); // Expected [ 'john', 'rose', 'kilman', 'james', 'lilian' ]

/**
 * Making the function more dynamic to return different values as provided in the array
 * We add a new parameter to the function loopsUpdates=> updaterFunc
 * push the new item when  called => updaterFunc(item)
 * The updated function should now take in value i pass and give me the result
*/
function loopsUpdates (array, updaterFunc) { //Picks a function and returns a value fas defined by the function
   const newArray = []; //pushing the updates and stores them
   for (let item of array) { // for loop iteration
        newArray.push(updaterFunc(item));  //Defining what to push i.e. the item 
    }
    return newArray; //Returning the new array
}

console.log (loopsUpdates(employees, name)); // Expected [ 'john', 'rose', 'kilman', 'james', 'lilian' ]
console.log (loopsUpdates(employees, id)); // Expected [ 100, 101, 102, 103, 104 ]
console.log (loopsUpdates(employees, department)); // ['procurement','marketing','operations','engineering', 'corporate affairs']
console.log (loopsUpdates(employees, projectsHandled)); //Expected [ 2, 3, 8, 10, 2 ]

// Returnin employee name
function name (item){
    return item.name;
}
//Returning the employee ID
function id (item){
    return item.id;
}
//Returning the departements
function department (item){
    return item.department;
}
//Returning the projects handled
function projectsHandled (item){
    return item.projectsHandled;
}
