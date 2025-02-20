# javascript_bootcamp
This Repository contains Learning codes of all topics of javascript

-------------------------------------------------------------------------------------------------------

# Javascript Array:

1. Method of decalaration:
    --> const arr[] = [1, 2, 3, 4, 5, 6]
    --> const arr = new Array(1, 2, 3, 4, 5, 6)

2. Type: object

3. Access Array elements
    --> using indexes ( starting from 0 )
    --> access elemnt at 3rd index: arr[3]

4. Shallow copy vs Deep copy
    --> Shallow copy: both arrays have same reference point; changes made in one, affects in other aswell

    --> Deep copy: both arrays doesnot have same refrence

    --> Note: when we copy one array into other, shallow copies are made

5. Array properties:
    a. arr.length

6. Array Methods:
    a. arr.push(element): insert elemenet at end;  returns length of updated array
    b. arr.pop(): removes element from end;  returns length of updated array
    c. arr.unshift(element): insert elemenet at beginning;  returns length of updated arr
    d. arr.shift(): removes elemenet from beginning;  returns length of updated arr
    e. arr.includes(element): check if element present or not; true/false
    f. arr.indexOf(element): if element present, returns its index; otherwise -1
    g. arr.join(separator): converts array elements to string using separator
    h. arr.slice(startInex, endIndex): 
    i: arr.splice(startIndex, endIndex): 

7. Slice vs Splice:
    Slice:                                        Splice:
    1. Excludes end index                         1. Includes the end index
    2. doesnot affect original array              2. Remove the spliced elements from original array
