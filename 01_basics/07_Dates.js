// start with momets: jan 1, 1970
// date stored in milliseconds

let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate))  // object

console.log(`toDatestring: ${myDate.toDateString()}`)
console.log(`toISOString: ${myDate.toISOString()}`)
console.log(`toLocaleString:  ${myDate.toLocaleString()}`)
console.log(`toLocaleDateString:  ${myDate.toLocaleDateString()}`)
console.log();

// print Date
console.log(`Date: ${myDate.getDate()}`)

// print month
console.log(`Date: ${myDate.getMonth()}`)  // month is 0th based ( january - 0 )

// print year
console.log(`Year: ${myDate.getFullYear()}`)

// print time
console.log(`Time: ${myDate.getTime()}`) // returns time in milliseconds

// print hours
console.log(`Hours: ${myDate.getHours()}`)

// print minutes
console.log(`Minutes: ${myDate.getMinutes()}`)

// print seconds
console.log(`Seconds: ${myDate.getSeconds()}`)



let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleDateString())

let myCreatedDate2 = new Date("2024-03-23");  // yyyy-mm-dd
console.log(myCreatedDate2.toDateString())

let myCreatedDate3 = new Date("04-12-2022");  //mm-dd-yyyy
console.log(myCreatedDate3.toDateString())



let myTimestamp = Date.now();
console.log(myTimestamp) // time in miliseconds

// comvert to seconds
console.log(Math.floor(myTimestamp / 1000));


const todaysDate = new Date();
const modified = todaysDate.toLocaleString('default', {
    weekday: 'long',
});

console.log(modified)
