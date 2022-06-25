/**
 * Write a function that takes two strings (a and b) as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 */

//Using includes()
function chekingIncludes(a, b) {
    return a.includes(b)? b + a : a +b;
}
//Using indexof()
function usingIndexof(a, b) {
    return a.index(b) === -1? a+b: b+a;
}
// We can also use if/else instead
function checkingInc(a, b) {
    if (a.includes(b)) {
        return b + a;
    }
    else{
        return a + b;
    }
}