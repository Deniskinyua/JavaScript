/**
 * Slice method
 * 
 * Returns a section of the array defined from the startIndex and endIndex
 *  but does not change teh original array
 * A negative index can be used, indicating an offset from the end of the sequence
 * 
 * Syntax: (i).slice(), (ii).slice(start), (iii) .slice(startIndex, endIndex)
 */

//let arr;
//syntax .slice()
//function halfArray(arr) {
   // return arr.slice(); //Expected: arr
//}
//syntax .slice(start)
//function halfArray(arr) {
 //   return arr.slice(start);//Expected elements from position 'start' to end
//}
//syntax .slice(start, end) //Expected defined section
//function halfArray(arr) {
  //  return arr.slice(start, end);
//}

let array = ['apples', 'bananas', 'Oranges', 'mangoes'];

//syntax .slice()
function slicingArr(array){
    return array.slice(); 
}
console.log(slicingArr(array));//Expected ['apples', 'bananas', 'Oranges', 'mangoes]

//syntax .slice(start)
function slicingArr(array){
    return array.slice(2); 
}
console.log(slicingArr(array));//Expected ['Oranges', 'mangoes]

///syntax .slice(start)
function slicingArr(array){
    return array.slice(0, 3); 
}
console.log(slicingArr(array));//Expected ['apples', 'bananas', 'Oranges']

/**
 * Let us do some examples
 */
//A functin that halves a string passed as an arguement
let str = 'Goodmorning';
//The function
function halvingString(str){
    return str.slice(0, str.length/2);
}
console.log(halvingString(str)); //Expected 'Goodm'(Note that it 'rounds down' the string)
