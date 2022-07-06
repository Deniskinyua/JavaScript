/**
 *  Charlemagne, the King of Frankia, is considering building some
 *  castles on the border with Servia, The border is divided into
 *  N segments. The King knows the height of the terrain 
 * ment on the border. The height of each segment of terrain is stored
 *  in array A, with A[P] denoting the height of the P-th
 *  segment of the border. The King has decided to build a castle on 
 * top of every hill and in the bottom of every valley Let [P.Qdenote 
 * a group of consecutive segments from P to Q inclusive such that 
 * (O SPSS N-1). Segments [PO] form a hill or a valley if all the 
 * following conditions are satisfied: • The terrain height of each 
 * segment from P to Q is the same
 *  (ACP] = A[P+1] = ... = A[QI): • IfP >0 then A[P-1] <A[P] (for a hill)
 *  or A[P-1] > A[P] (for a valley); 
 * • If Q<N-1 then A[(+1] < All (for a hill) or A[Q+1) > All (for a valley);
 *  That is, a hill is higher than its surroundings and a valley is
 *  lower than its surroundings. Note that if the surroundings on 
 * either side of the hill or valley don't exist 
 * (l.e. at the edges of the area under consideration, 
 * where P = 0 or Q = N-1), then the condition is considered satisfied 
 * for that side of the hilt/valley The king is wondering how many 
 * castles is he going to build. Can you help him? For example, consider 
 * the following array A - 12,2,3,4,3,3,2,2,1,1,2,5), |
 *  Task 2 JavaScript English The king is wondering how many castles 
 * is he going to build. Can you help him? For example, 
 * consider the following array A = [2,2,3,4,3,3,2, 2, 1, 1, 2,5]. 
 * There are two hills: [3.3] and [11.11). 
 * There are also two valleys: (0.1) and (8.9).
 *  There are no other suitable places for castles, 
 * Write a function: function solution(); that given an array
 *  A consisting of Nintegers, as explained above, returns the total 
 * number of hills and valleys For example, given array A as described 
 * above, the function should retum 4. Given array A-1-3-3)
 *  describing segments with a terrain height below 0, 
 * segment [o 1 forms both a hill and a valley, 
 * and only one castle can be built so the function should return 1.
 *  Write an efficient algorithm for the following assumptions:
 *  N is an integer within the range (1.100,000): 
 * • each element of array A is an integer within the range (-1,000,000,000 1,000,000,000) 
 * 
 * Copyright 2009-2022 by Codity Limited. All Rights Reserved.
 */


 let A = [2,2,3,4,3,3,2, 2, 1, 1, 2,5];
 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');
 
 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
     let arrayALength = A.length;
     //First lest us check the segements
     if (arrayALength === 0){
         return 0;
     }
     //let us define our initials
     let num = 0;
     let initialNum = 0;
     //
     for (let seg = 1; seg < arrayALength-1; seg++){
         if (((A[seg]-initialNum)*(A[seg+1] -A[seg])) < 0){
             num++;
             initialNum = A[seg];
         }
 
     }
 
     if (num === 0){
         if (A[0] === A[arrayALength-1]){
             return 1;
             return 2;
         }
        
     }
 
     return num +2;
 }
 
 
 //
 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');
 
 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
 
     //Constraints that we will be using:
     let arrayALength = A.length;
     let initialNum = 0;
     let num = 0;
     
     //Let us loop through the array
     for (let seg = 1; seg < arrayALength-1; seg++){
         if (((A[seg]-initialNum)*(A[seg+1] -A[seg])) < 0){
             num++;
             initialNum = A[seg];
         }
 
     }
 
     if (num === 0){
         if (A[0] === A[arrayALength-1]){
             return 1;
             return 2;
         }
      
     }
 
    return num +2;
 }
 console.log (solution(A));
 