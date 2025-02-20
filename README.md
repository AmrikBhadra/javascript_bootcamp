# JavaScript Bootcamp

This repository contains learning codes for all topics of JavaScript.

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

### 7. Slice vs Splice
| **Slice**                                      | **Splice**                                        |
|----------------------------------------------|------------------------------------------------|
| 1. Excludes the end index                    | 1. Includes the end index                       |
| 2. Does not affect the original array        | 2. Removes or modifies elements in the original array |

