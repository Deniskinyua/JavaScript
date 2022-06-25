/**
 * method indexof():
 * 
 * Behaviour: returns the first 'index' at which a given element can be found in the array/string, or -1 if not present
 * 
 * syntax: (i) .indexof(searchEelement), (ii) .indexof(searchEelement, fromIndex)
 */

//Give a certain array a
function findingIndexOfElement(a){
    return a.indexOf(searchEelement, fromIndex);
}

//Assume  we have an array of search elements
let stock = ['bananas', 'apples', 'oranges', 'pineapoles', 'watermelon'];
let messageToNeighbours = 'Goodmorning my neighbours. How are you?';

//function to find elemement existence in thestock array:

    //Using syntax: (i) .indexof(searchEelement)
    function findElement(stock, element){
        return stock.indexOf(element);
    }
   console.log(findElement(stock, 'bananas')); //Expected output: 0
   console.log(findElement(stock, 'apples')); //Expected output: 1
   console.log(findElement(stock, 'watermelon')); //Expected output: 4

    //Using syntax (ii) .indexof(searchelement, fromIndex)
    function findElementInStock(stock) {
        return stock.indexOf('bananas', 1)
    }
    console.log(findElementInStock(stock)); //Expected -1

//Let us consider the case of the string: messageToNeighbours

//Function to find the element in messageToNeighbours(Note that this is a string and not an array)

    //(i) syntax: (i) .indexof(searchEelement)
    function findElem (messageToNeighbours) {
        return messageToNeighbours.indexOf('Hooray!');
    }
    console.log(findElement(messageToNeighbours)); //Expected -1

    //(ii) Syntax (ii).indexof(searchEelement, fromIndex)
    function findingElem(messageToNeighbours) {
        return messageToNeighbours.indexOf('you');
    }
    console.log(findingElem(messageToNeighbours)); //Expecting 35

