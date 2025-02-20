# JavaScript Bootcamp

This repository contains learning codes for all topics of JavaScript.

---
# JavaScript Bootcamp

This repository contains learning codes for all topics of JavaScript.

---

## JavaScript Strings

- Strings are denoted by single or double quotes.
- Declared using literals or `String` constructor.

### 1. String Declaration
- `const firstName = 'Amrik';`
- `const lastName = "Bhadra";`
- Using constructor: `const gameName = new String('GTA-V');` (creates a string object)

### 2. String Concatenation
- Using `+`: `firstName + " " + lastName`
- Using `,` (automatically adds space): `console.log(firstName, lastName)`
- Using template literals: ``Hello my name is ${firstName} ${lastName}``

### 3. String Methods
- `.length` — Returns the length of the string.
- `.toUpperCase()` — Converts string to uppercase.
- `.toLowerCase()` — Converts string to lowercase.
- `.charAt(index)` — Returns character at the specified index.
- `.indexOf(char)` — Returns the index of the character.
- `.substring(start, end)` — Extracts a substring (no negative index allowed).
- `.slice(start, end)` — Extracts a substring (supports negative indices).
- `.trim()` — Removes whitespace from both ends.
- `.trimStart()` — Removes whitespace from the start.
- `.trimEnd()` — Removes whitespace from the end.
- `.replace(old, new)` — Replaces substring.
- `.includes(substring)` — Checks if substring is present.
- `.split(separator)` — Splits string into an array.
- `.valueOf()` — Returns the primitive value.

---

## JavaScript Numbers and Math

### 1. Numbers
- Numbers are created using literals or the `Number` constructor.
- Methods:
  - `toString()` — Converts the number to a string.
  - `toFixed(n)` — Formats the number with `n` decimal places.
  - `toPrecision(n)` — Formats the number to a specified precision.
  - `toLocaleString()` — Formats the number according to the locale.

### 2. Number Properties
- `Number.MAX_VALUE` — Maximum representable number.
- `Number.MIN_VALUE` — Minimum representable number.

### 3. Math Library
- Constants:
  - `Math.PI` — Value of π.
  - `Math.SQRT2` — Square root of 2.

- Methods:
  - `Math.abs()` — Returns the absolute value.
  - `Math.min(a, b, ...)` — Returns the smallest number.
  - `Math.max(a, b, ...)` — Returns the largest number.
  - `Math.round()` — Rounds to the nearest integer.
  - `Math.floor()` — Rounds down.
  - `Math.ceil()` — Rounds up.
  - `Math.sqrt()` — Returns the square root.
  - `Math.pow(x, y)` — Returns `x` raised to the power of `y`.
  - `Math.log2()` — Returns the base-2 logarithm.
  - `Math.random()` — Generates a random number between 0 and 1.
  - Random number within range: `Math.floor(Math.random() * (max - min + 1)) + min`

---

## JavaScript Dates

- JavaScript stores dates as milliseconds since January 1, 1970 (Unix epoch).

### 1. Date Properties and Methods
- `typeof date` — Returns `'object'`.
- Methods:
  - `date.toDateString()` — Human-readable date.
  - `date.toISOString()` — ISO 8601 format.
  - `date.toLocaleString()` — Localized date and time.
  - `date.toUTCString()` — UTC date and time.
  - `Date.now()` — Current timestamp in milliseconds.

### 2. Getting Date Components
- `date.getDate()` — Day of the month.
- `date.getMonth()` — Month (0-indexed).
- `date.getFullYear()` — Year.
- `date.getDay()` — Day of the week.
- `date.getHours()`, `.getMinutes()`, `.getSeconds()`, `.getMilliseconds()` — Time components.

### 3. Creating Dates
- `new Date(year, month, day)` — Year, month, day.
- `new Date(0)` — Unix epoch.
- `new Date("yyyy-mm-dd")` — ISO format.

### 4. Formatting Dates
- `date.toLocaleString('default', { weekday: 'long' })` — Weekday name.
- `date.toLocaleString('default', { month: 'long' })` — Month name.

---

## JavaScript Array

### 1. Methods of Declaration
- `const arr = [1, 2, 3, 4, 5, 6]`
- `const arr = new Array(1, 2, 3, 4, 5, 6)`

### 2. Type
- Object

### 3. Access Array Elements
- Using indexes (starting from 0)
- Access element at 3rd index: `arr[3]`

### 4. Shallow Copy vs Deep Copy
- **Shallow Copy:** Both arrays share the same reference point; changes made in one affect the other.
- **Deep Copy:** Both arrays have different references.
- **Note:** When one array is copied into another, a shallow copy is created.

### 5. Array Properties
- `arr.length` — Returns the number of elements in the array.

### 6. Array Methods
- `arr.push(element)` — Inserts an element at the end; returns the updated array length.
- `arr.pop()` — Removes the last element; returns the removed element.
- `arr.unshift(element)` — Inserts an element at the beginning; returns the updated array length.
- `arr.shift()` — Removes the first element; returns the removed element.
- `arr.includes(element)` — Checks if the element is present; returns `true` or `false`.
- `arr.indexOf(element)` — Returns the index of the element if present; otherwise `-1`.
- `arr.join(separator)` — Converts array elements into a string using the specified separator.
- `arr.slice(startIndex, endIndex)` — Returns a shallow copy of a portion of the array (excluding the end index).
- `arr.splice(startIndex, deleteCount, ...items)` — Changes the array by removing, replacing, or adding elements.
- `arr.concat(array)` — Merges two or more arrays and returns a new array.
- Spread operator: `[...array1, ...array2]` — An alternative to `concat` for merging arrays.
- `arr.flat(depth)` — Flattens nested arrays into a single array up to the specified depth (use `Infinity` if depth is unknown).
- `Array.isArray(value)` — Checks if the given value is an array.
- `Array.from(value)` — Converts an iterable or array-like object into an array.
- `Array.of(element1, element2, ...)` — Creates a new array from a variable number of elements.

### 7. Additional Concepts
- Using `push()` with arrays inserts the entire array as a single element instead of appending individual elements.
- `concat()` and the spread operator can merge more than two arrays.
- `Array.from()` creates arrays from strings or array-like objects.

### 8. Slice vs Splice
| **Slice**                                      | **Splice**                                        |
|----------------------------------------------|------------------------------------------------|
| 1. Excludes the end index                    | 1. Includes the end index                       |
| 2. Does not affect the original array        | 2. Removes or modifies elements in the original array |

