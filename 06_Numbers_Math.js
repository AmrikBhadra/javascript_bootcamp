const score = 400;

const balance = new Number(20000);
console.log(balance);
console.log(`Type of: ${typeof(balance)}`);

// Number methods
console.log(`To string: ${balance.toString()}; type: ${typeof(balance.toString())}`)
console.log(`To fixed: ${balance.toFixed(2)}`)


const otherNum = 1223.8966;
console.log(`Precision: ${otherNum.toPrecision(4)}`)  // returns a string, 
                                                     // precise 4 digits only from start

const price = 1000000;
console.log(`Price: ${price}`)
const localPrice = price.toLocaleString('en-IN')
console.log(`Local Price: ${localPrice}`)

// max value of integer
console.log(Number.MAX_VALUE);

// min value
console.log(Number.MIN_VALUE);



// ------------------ Maths Library ------------------------------------------------
console.log(`\nValue of PI: ${Math.PI}`);
console.log(`Square Root of 2: ${Math.SQRT2}`);

// Math methods
// 1. abs(): converts negative number to positive
console.log(`Abs(-56): ${Math.abs(-56)}`)
console.log(`Type of Abs(-56): ${typeof(Math.abs(-56))}`)

const a = new Number(5);
const b = new Number(8);
// 2. min(a, b)
console.log(`Minimum of a=${a}, b=${b}: ${Math.min(a, b)}`)

// 3. max(a, b)
console.log(`Maximum of a=${a}, b=${b}: ${Math.max(a, b)}`)

// 4. round()
console.log(`Rounded value of 4.67: ${Math.round(4.34)}`)  

// 5. floor()
console.log(`Floor of 4.56: ${Math.floor(4.56)}`);

// 6. ceil()
console.log(`Ciel of 4.56: ${Math.ceil(4.56)}`);

// 7. sqrt()
console.log(`Square root of 64: ${Math.sqrt(64)}`)

// 8. pow()
console.log(`Value of 2^3: ${Math.pow(2, 3)}`)

// 9. log10()
console.log(`Log2(4): ${Math.log2(4)}`)

// 10. random(): mostly used math function
// values alwys between (0 and 1)
console.log(Math.random())

// make it to range 
console.log(Math.floor((Math.random()*10)) + 1)


// trick: remember
const min = 10;
const max = 20;

const value = Math.floor((Math.random() * (max - min + 1))  + min)
console.log(value)
