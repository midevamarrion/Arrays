//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]

const arr1 = [3,7,34,90,12];
let lastItem = arr1[arr1.length-1];
console.log(lastItem)

const arr2 =[true,"green","where",12,56];
let finalItem = arr2[arr2.length-1];
console.log(finalItem)

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets = ["cow","bird","snake","dog"];
let pets = myPets.join();
console.log(pets);

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

const arr3 =[-5,9,5,3,2,-3,6,8,4,1];
let points =arr3.sort(function(a,b){
    return a-b
})
console.log(points)

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
            //"orange", "mango", "mango"];
            var arr = ["apple", "mango", "apple","orange","mango","mango"];
            let notDuplicate = arr.filter((orange,index)=>{
                return arr.indexOf(orange)===index;
            })
            console.log(notDuplicate)

            let duplicate = arr.filter((orange,index)=>{
                return arr.indexOf(orange)!==index;

            })
            console.log(duplicate)
    





//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];

let arr5 = ["the","way","x",4]
let hiyo = "way"
if(hiyo=="ways"){
    console.log(hiyo);
}
else{
    console.log("the search word was not found");

}






//Write a JS script to sort the following string
//let word = "sevink"

var string = "sevink"
console.log(string.split('').sort().join(''));









