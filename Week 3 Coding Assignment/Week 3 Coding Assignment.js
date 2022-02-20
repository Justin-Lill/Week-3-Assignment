//1//
let ages= [ 3, 9, 23, 64, 2, 8, 28, 93]
for (let i=0; i< ages.length; i++){
    ages[7] - ages[0];
}


ages.push(53);
console.log(ages);

let total = 0;
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
let avg = total / ages.length;
console.log(avg);



//2//

let names= ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
let lengths= names.map(function(element) {
    return element.lengths;                         
});                    

let average = names.join('').length / names.length     
console.log(average)                                    //Average number of letters code//


let sums= names.reduce(function(accumulator, currentValue){         //names with spaces//
    return accumulator + " " + currentValue
}); console.log(sums);

//5/-6//

let nameLenghts= [3, 5, 3, 5, 4, 3]                                         //nameLengths array created//
let x = nameLenghts.reduce((partialSum, a) => partialSum + a, 0);
console.log(x);

//7//

let words= (a, b) => {
let result = '';
for(i=0; i < 3; i++) {
    result +=  a;
}
return result;
};
console.log(words("word", 3))

//8//

function createFullName(firstName, lastName){
    return firstName + " " + lastName; 
}
let fullName= createFullName("Justin", "Lill");
console.log(fullName);                                  //Returns full name with spaces//


//9//

let numbers= [20, 30, 5, 10, 50, 11]
let amount = numbers.reduce((partialSum, a) => partialSum + a, 0);
if(amount> 100){
    console.log(true);
}
else{
    console.log(false);
}

//10//

let number= [20, 50, 40, 56, 3, 45]
let sumOfNumbers= number.reduce((partialSum, a) => partialSum + a, 0);
console.log(sumOfNumbers);                                                      //Adds all of the elements in the array together//


//11//

//12//

let willBuyDrink= 12
if(willBuyDrink> 10.50){
    console.log(true);
}
else{
    console.log(false);
}

//13//    //Number of people coming to event//


let array= ["Tommy", "Becky", "Randy", "Stacey", "Brett", "Owen", "Tiffany", "Bob", "Tom"]
let len= array.length; 
console.log(len);


