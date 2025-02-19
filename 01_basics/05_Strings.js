// String denoted by single and double quotes
// by the following way, (typeof => string) 
const firstName = 'Amrik';
const lastName = "Bhadra";


// concatenate  (join strings)
console.log(firstName + " " + lastName);

// using comma(,) as concatenating operator, automatecally adds whitespace in between
console.log(firstName, lastName);

// modern style: String interpollation
console.log(`Hello my name is ${firstName} ${lastName}`);


// string declaration using string constructor 
// following will create string as object
const gameName = new String('GTA-V');

// (key, value) => (index, value)
console.log(gameName[0]);



// String methods (present in prototype)
console.log(`\nLength: ${gameName.length}`);
console.log(`Uppercase: ${gameName.toUpperCase()}`);
console.log(`LowerCase: ${gameName.toLowerCase()}`);
console.log(`Character at position 2: ${gameName.charAt(2)}`);
console.log(`Index of 'T' ${gameName.indexOf('T')}`);

console.log(`Substring: ${gameName.substring(0, 4)}`)
console.log(`Slice: ${gameName.slice(0, 4)}`);

// slice vs substring
// slice -> we can give negative index also
console.log(`Slice with negative index: ${gameName.slice(-5, -2)}`);

// trim(): remove space from front and end of the string
const str = "    New String    ";
console.log(`Original String: ${str}.`);
console.log(`Trimmed string: ${str.trim()}.`);
console.log(`Trim start: ${str.trimStart()}.`);
console.log(`Trim end: ${str.trimEnd()}.`);

// replace(old, new): 
const url = "https://amrik.com/amrik%20bhadra";
const updatedUrl = url.replace('%20', '-');
console.log(`Original URL: ${url}`);
console.log(`New URL: ${updatedUrl}`);

// check if any substring present in string or not
// includes(string)
console.log(`Is amrik present?: ${url.includes('amrik')}`);


// string to array
// split(separator): 
const ip = '192.34.245.10'
const ipOctets = ip.split('.');
console.log(ipOctets);

// valueOf():
console.log(`Value of: ${ip.valueOf()}`)


