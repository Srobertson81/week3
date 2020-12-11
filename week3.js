/*#1 subtract the value of the first element in the array from the value in 
the last element of the array (do not use numbers to reference the 
last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let ageEnd = ages[ages.length - 1];
let age1 = ages[0];

let subtraction = ageEnd - age1;
console.log(subtraction);

/*b.	Add a new age to your array and repeat the step above to 
ensure it is dynamic (works for arrays of different lengths).*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 7];
let ageEnd = ages[ages.length - 1];
let age1 = ages[0];
let subtraction = ageEnd - age1;
console.log(subtraction);

/*c.	Use a loop to iterate through the array and calculate 
the average age. Print the result to the console.
*/
var total = 0;
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;
console.log(avg)

/*#2 Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’,‘Sally’, ‘Buck’, ‘Bob’.
 a.  Use a loop to iterate through the array 
 and calculate the average number of letters per name. Print the result to the console
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var total = 0;
for (var i = 0; i < names.length; i++){
    total+=names[i].length; 
    var avg = total/names.length;   
}
console.log(avg);
// /*b.	Use a loop to iterate through the array again and concatenate all the names 
// together, separated by spaces, and print the result to the console.
// */
for (var i = 0; i < names.length; i++){
    var together = names.join(' ');
}
console.log(together);
// /*#5 Create a new array called nameLengths. Write a loop to iterate over the 
// previously created names array and add the length of each name to the nameLengths array.
// */
let namesLength = [ ];
for (var i = 0; i < names.length; i++){
    namesLength += names[i].length;        
}
namesLength = namesLength.split([]);

// /*#6	Write a loop to iterate over the nameLengths array and calculate the sum of all the 
// elements in the array. Print the result to the console.*/  
var total = 0;
for (var i = 0; i < namesLength.length; ++i){
    total += Number(namesLength[i]);
    var sum = total;
           
}
console.log(sum);
// /*#7  Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

function repeatWordNumTimes(word, n) {
        var repeatedWord = "";
        while (n > 0) {
          repeatedWord += word;
          n--;
        }
        return repeatedWord;        
      }
  console.log(repeatWordNumTimes("sun", 4));
// /*#8 Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space).*/
// function fullName(firstName, lastName) {
//     var name = firstName + " " + lastName;    
//     return name;        
//   }
// console.log(fullName("James", "Bond"));
// /*#9 Write a function that takes an array of numbers and returns true if the sum of all the 
// numbers in the array is greater than 100.*/
function arraySum(input) {    
    var total = 0;    
    for(var i=0; i < input.length; i++)    
    total += Number(input[i]);
    //return total;
    if (total > 100) {
        return true;
    } else {
        return false;
    }    
}
console.log(arraySum([125,5,5]));
// /*#10 Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
function arrayNum(input) {    
    var total = 0;        
    for(var i=0; i < input.length; i++)    
    total += Number(input[i]);
    var avg = (total / input.length)    
    return avg;    
}
console.log(arrayNum([12,5,5]));

/*#11 Write a function that takes two arrays of numbers and returns true if the average
of the elements in the first array is greater than the average of the elements in the second array*/
function topArrays(arr1, arr2) { 
    function r1(array) {
    var total = 0;
    for(var i=0; i < array.length; i++)        
    total += Number(array[i]);    
    var avg = (total / array.length);    
    return avg;
    }     
    var averageFirst = r1(arr1);
    var averageSecond = r1(arr2)
    return averageFirst > averageSecond;     
}
console.log(topArrays([1,2,29] , [1,9,1]));

// /*12 Write a function called willBuyDrink that takes a boolean isHotOutside, and 
// a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50    
}
console.log(willBuyDrink(true, 10));
/*13 Create a function of your own that solves a problem. In comments, write what the function
// does and why you created it. This function is a calculator function it tells me the sum of 3 numbers.*/

function calculator(a, b, c) {
    var sum = a + b + c;    
    return sum;    
}
console.log(calculator(10, 6, 3));
