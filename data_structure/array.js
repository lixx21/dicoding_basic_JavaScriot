let myArray = ['Felix', 'Pratamasan', 21]

console.log(myArray);

//length of array
console.log(`length of array: ${myArray.length}`);

//add new value in array using push
myArray.push('JavaScript');
console.log(`new array after add JavaScript at the end of array there are `, myArray);

//remove the last element value in array using pop
myArray.pop(21);
console.log(`new array after remove latest value there are`, myArray);

//shift() for removing first value in array 
myArray.shift();
console.log(`new array after remove first value there are`, myArray);

//unshift() for add value in the first element of array
myArray.unshift('JavaScript');
console.log(`new array after add first value there are`, myArray);

//delete() for remove specific data in element of array
delete myArray[1];
console.log(`new array after remove 2 index in array`, myArray);

//splice() for remove specific value in element of array
myArray.splice(1,1); // (1,1) first is element in index 1 and another 1 means that just 1 element is removed
console.log(`array after removing 1 element and just 1 element is removed`, myArray)

let newArray = ['Felix', 'Pratamasan', 21]
newArray.splice(1,2); //(1,1) first is element in index 1 and another 1 means that just 2 element is removed
console.log(`array after removing element in index 1 and 2 elemnt is removed`, newArray);

// loop array without index
let loopArray = ['Felix', 'Pratamasan', 21]
for (const value of loopArray) {
    console.log(value)
}

// loop array with index using entries()
for (const [index, value] of loopArray.entries()) {
    console.log(index, value)
}

