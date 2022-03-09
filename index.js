// assignment --1 /////////////////////////////////////


// const userGuess = 10;
// const user = prompt('whats your guess');
// for (i=0; i<=userGuess; i++);{
//     if (userGuess===user){
//      alert('good work') ;

//     }else{
//        alert('not matcheed');
//     }
// }





// assignment - 2////////////////////////////////////////////////////////////////

// task-1////////////////////////////

// let csv = "1,2,3,4,5,6; 7,8,1,2,3; 4,5,6,7,8,9;";

// let newCSV = csv.split(";");

// let arrayConverted =[];

// for(let x of newCSV){
//     x= x.replaceAll("," ," ");
//     arrayConverted.push(Object.assign({},x));

// }
// console.log(arrayConverted);


// task 2/////////////////////////////////////////////////////////////////////////////////////


// let n = 5;
// let str ="";

// for (i=0;i<=n; i++){
//     for (j=0; j<=i; j++){
//       str += "*"
//     }
//     str +="\n"
// }
// console.log(str);

// task-3////////////////////////////////////////////////////
 
function rev_number (n){
    n = n +"";
    return n.split("").reverse().join("");
};

console.log(rev_number("32243"));


// task 4//////////////////////////////////////////////////////


// const string = "shubham"
// function checkPalindrome(str){
//  const arrayValues = string.split("");
//  const reverseValue = arrayValues.reverse();
//  const joinArray = reverseValue.join("");

//  if (string===joinArray){
//      console.log("it is a palindrome");
//  }else{
//      console.log("it is not a palindrome")
//  };
// };
// console.log(checkPalindrome(string));




// assignment day -3///////////////////////////////////////////////////////////




// task-1

// const string = "webmaster";

// function ascOrder(str){
//     return str.split("").sort().join("");
// }
// console.log(ascOrder(string));


// task 2/////////////////////////////////////////////////////////

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


// task 4///////////////////////////////////////////////////////////////////////////////////

// const arr = ["Web","Development","Method"];
// console.log(arr)

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   console.log(array1)
// }
// console.log(find_longest_word('Web Development Tutorial'));