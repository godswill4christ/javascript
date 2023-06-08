let btn = document.querySelector(".test_btn");
        btn.onclick = function(){
            alert("Hello I am the second test button on the page");
        }

 // Variables
 var test;                       // Variable declaration
 test = 34;                     // Variable initialization
 var ay = "Ayo Ayodeji";       // both declaration and initialization
 
 let myBro = "Mozillar 2022";
 const age = 13;
 let dob = "19/12/2009";

 // DATA TYPES AND STRUCTURES

 // Strings

 let name1 = "Mr. Christian";
 let name2 = 'Mr. Peter';
 let name3 = `Hello I am ${name1} - ${230 + 450}`; // template string 
 console.log(name3);

 let accounBalance = 4568900;
 let account = "98678";

 let totalBalance = accounBalance + account; //concatenation
 let totalBalance2 =accounBalance + account;

 console.log(typeof accounBalance);
 console.log(typeof account);

 console.log( totalBalance);
 console.log( totalBalance2);

 console.log( name1.toUpperCase() );
 console.log( name1.toLowerCase() );

 let myStory = "        My name is Chinemeze, I am a Fullstack engineer and the author of how stuff Works in Javascript     ";

 console.log( myStory[0] );   // access the position of a character in myStory
 console.log( myStory.length ); // tell us the number of characters in myStory
 

let numOfWords = myStory.split(" ");   // split the mystory into substrins or words and return them as array

console.log( numOfWords.length );      // find the number of words in the mystory

console.log(myStory);

console.log(myStory.trim());  // trim end , trim start..

let conString = myStory.concat("PHP","Java","Python");
console.log(conString);

let testStr = "HP|LENOVO|HOST|DELL|MAC";

let numOfwords = testStr.split("|");

console.log(numOfwords.length);

let myNaija ="Nigeria, located in West Africa, is a diverse and vibrant nation with a rich cultural heritage. With a population of over 200 million people, it is the most populous country in Africa. Nigeria is known for its vast natural resources, including oil, which plays a significant role in its economy. The country has a diverse ethnic makeup, with over 250 different ethnic groups, each contributing to its cultural tapestry. Despite facing challenges such as poverty, corruption, and security issues, Nigeria is home to a resilient and entrepreneurial population that thrives in sectors such as technology, entertainment, and agriculture. With its energetic spirit and potential for growth, Nigeria continues to make its mark on the global stage.";

let nomOfWords = myNaija.split("");

console.log(nomOfWords.length);

console.log(myNaija);

console.log(nomOfWords.reverse().join(""));

let str ="madam"

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome);("madam");









// NUMBERS
let myNum = 45;
let xNum = "123.78654";

let xConverted = Number(xNum);       // both decimal and integer
let xConverted2 = parseInt(xNum);   // for integer
let xConverted3 = parseFloat(xNum); // for Decimal 

console.log(xNum, xConverted, xConverted); 

let aprox = Number (xConverted3.toFixed(2)); // convert to 2 decimal places and convert to number

console.log(aprox);

let xdiv = 23/0;

console.log(xdiv);

// Undefined

let xtextme;
let nxObj = null;
console.log(typeof xtextme);

console.log( nxObj );

console.log(typeof nxObj);

//DATA STRUCTURES
// 1. Array
// 2. object
// 3. map
// 4. set

// Array:
let myArray = [
    "Mr. Christian",
    true,
    764,
    [1,4,5,8,9,0,1]

];
// reading from the array
console.log(myArray[0]);
console.log(myArray[3][1]);

// writing to the array
myArray[0] = 1998;

myArray[4] = "Mr. Godswill";
myArray[14] = "You Know";
// push, unshift, shift, pop,
// slice, splice, length, indexOf,

console.log(myArray);

let newPush = myArray.push(45);
myArray.push("Huwaei", "Honkong", "Togo", "Abidjan");
// adding items to the beginning of the array

myArray.unshift(900,"Hungary","Ohio","Missisippi","Aminu Kano");
// Remove elements from array
let removedItem = myArray.pop();    //remove item from the end of an array.
let shiftedItem = myArray.shift(); //remove item from the beginning if an array .

// Using the slice and splice
let firstcopy = myArray.slice(3,9);
console.log(firstcopy);

let removedItems = myArray.splice(5,3);
let removedItems2 = myArray.splice(3,3,"Abuja","Ondo",2023);

console.log(removedItems2);

console.log(removedItems);

console.log(removedItem, shiftedItem);

console.log(newPush);

let ohioIndex = myArray.indexOf("Ohio");

console.log(ohioIndex);

let filteredNumbers = myArray.filter( (item)=> typeof item === "number"); // to filter out number
let filteredNumbers2 = myArray.filter(function(item){
    return typeof item === "number";
}); // to filter out number

console.log(filteredNumbers);
console.log(filteredNumbers2);

// foEach and the map
myArray.forEach( (item,index) => console.log(index,item));

myArray.map( (item,index) => console.log(index,item));

let mProductPrices = [23000,90000,65000,125000,165000];

let sellingPriceList = mProductPrices.map((price)=> 0.2*price +price);

console.log(sellingPriceList.sort((a,b) => a-b));
