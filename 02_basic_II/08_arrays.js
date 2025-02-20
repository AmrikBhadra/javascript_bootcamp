// array
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

// js array can contain multiple type of data
const arr = [1, 2.45, true, 'amrik', null, undefined]
console.log(arr)

// js arrays are resizable

// array indexing start from 0
// access element using index
console.log(`Element at index 0: ${arr[0]}`)


// shallow copy vs deep copy
// shallow copy: both arrays have same reference point; changes made in one, affects in other aswell
// deep copy: both arrays doesnot have same refrence
// when we copy one array into other, shallow copies are made


// Object method of declaring array
const myHeros = new Array("Superman", "Batman", "Captain America", "Thor", "Spiderman", "Ironman", "Wonderwomen");
console.log(myHeros);


// Array methods:
console.log(`Length: ${myArr.length}`)  // length attribute
console.log(`Push 6 in myArr: ${myArr.push(6)}`)  // changes made in orginal array; returns new length
console.log(myArr)
console.log(`Pop element: ${myArr.pop()}`)  // changes made in orginal array; returns new length
console.log(myArr)

// insert element at beginning
console.log(`Unshift: ${myArr.unshift(9)}`)
console.log(myArr);

// remove element from beginning
console.log(`Shift: ${myArr.shift()}`)
console.log(myArr)

// check 10 present in array or not
console.log(`Is 10 present: ${myArr.includes(10)}`)

// get index of element
console.log(`Index of element 3: ${myArr.indexOf(3)}`)
console.log(`Index of element 20: ${myArr.indexOf(20)}`)
console.log("")


// convert array elements to a single string
// join(separator)
const greeting = new Array('Hello', 'Everyone,', 'My', 'Name', 'Is', 'Amrik')
console.log(greeting, typeof greeting)
const greetStr = greeting.join(' ');
console.log(greetStr + "   -   " +  typeof greetStr)


// slice(start, end) vs splice(start, end)
/*
    Slice:                                        Splice:
    1. Excludes end index                         1. Includes the end index
    2. doesnot affect original array              2. Remove the spliced elements from original array
*/
console.log(`Original Arr: ${myArr}`)
const sliceArr = myArr.slice(1, 3);
console.log(`\nSlice arr: ${sliceArr}`)
console.log(`Original Arr: ${myArr}`)

const spliceArr = myArr.splice(1, 3);
console.log(`\nSplice arr: ${spliceArr}`)
console.log(`Original Arr: ${myArr}`)
