const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const obj = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const del = "web development";

// 1. foreach and push
array.forEach((element, index, array) => {
  obj.push({
    index: index,
    element: element,
    array: array,
  });
});

// 2. map
const newArray = array.map((element, index, array) => {
  return {
    index: index,
    element: element,
    array: array,
  };
});

// 3. filter
const newArray2 = array.filter((element, index, array) => {
  return element > 5;
});

// 4. concat
const newArray3 = array.concat(array2);

// 5. find (return only one)
const newArray4 = array.find((element, index, obj) => {
  return element > 4;
});

// 6. findIndex (gives the index) (for non-primitive types)
const newArray5 = array.findIndex((element, index, obj) => {
  return element === 11;
});

// 7. indexOf (for primitive types) (start from the starting of the array)
const newIndex = letters.indexOf('z', 0);

// 8. lastIndexOf (start from the end of an array)
const newIndex1 = letters.lastIndexOf('z', 0);

// 9. some (return boolean value) (check only once)
const boll = letters.some((element, index, array) => {
  return element === 'tt';
});

// 10. every (return boolean value) (check all the elements)
const boll2 = letters.every((element, index, array) => {
  return typeof element === 'string';
});

// 11. includes (same as some)
const boll3 = letters.includes('e', 0);

// 12. push (add in the end)
const maxLength = array.push(99);

// 13. unshift (add in the start)
const maxLength2 = array.unshift(0);

// 14. pop (remove from the end)
const poppedElement = array.pop();

// 15. shift (remove from the start)
const shiftedElement = array.shift();

// 16. toString (array to string)
const tooString = letters.toString();

// 17. join (join the array and convert that into a string)
const joinn = letters.join();

// 18. fill
const fillArray = letters.fill(66, 4, 13);

// 19. copyWithin(targetIndex, startIndex, endIndex)
array.copyWithin(2, 4, 7);

// 20. slice (to take out a slice from the array)
const letterSlice = letters.slice(15, 22);
const letterSliceStart = letters.slice(15); // 15 to all
const letterSlicee = letters.slice(); // return all the array

// 21. splice (start,deleteCount,item1,item2,item3,.....)
letters.splice(4, (13 - 4), 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm');

// 22. sort (convert the elements into a string then compare them) (also take a callback)
months.sort(); // sorts the strings
// > 0 sort a after b
// < 0 sort a before b
// === 0 keep the original string
array.sort((a, b) => a - b); // for ascending order
array.sort((a, b) => b - a); // for descending order

// 23. reverse (reverse the array and takes no parameters)
array.reverse();

// 24. from (string to array and a map function)
var i = 0;
const arrayFrom = Array.from(del, (element) => element + i++); // uses the Array Object

// 25. isArray (checks if the given is array or not) (returns boolean)
const isarray = Array.isArray(del);

// 26. valueOf (copy of array)
const lettersCopy = letters.valueOf(letters);

// 27. entries (return Iterator object)
const arrayEntries = months.entries();
// console.log([...arrayEntries]);

// 28. keys (return Iterator object)
const arrayKeys = months.keys();
// console.log([...arrayKeys]);

// 29. values (return iterable object)
const arrayValues = months.values();
// console.log([...arrayValues]);

// 30. reduce (use to reduce to a single value from array) (start from the left to right)
const reducer = array.reduce((pre, next) => pre + next, 0); // (callback , initial value) callback =  (pre, next) => {}

// 31. reduceRight
const reducerRight = array.reduceRight((pre, next) => pre + next, 0); // (callback, initial value) callback = (pre, next ) => {}

// 32. flat (get rid of array dimensions)
const threeDimension = [[4, 5, 6, [7, 8, 9]]];
const flatArray = threeDimension.flat(5);

// 33. flatMap
const result = array.flatMap((array) => {
  return [array[0] + array[1]];
});

// Displaying results
console.log("obj:", obj);
console.log("newArray:", newArray);
console.log("newArray2:", newArray2);
console.log("newArray3:", newArray3);
console.log("newArray4:", newArray4);
console.log("newArray5:", newArray5);
console.log("newIndex:", newIndex);
console.log("newIndex1:", newIndex1);
console.log("boll:", boll);
console.log("boll2:", boll2);
console.log("boll3:", boll3);
console.log("maxLength:", maxLength);
console.log("maxLength2:", maxLength2);
console.log("poppedElement:", poppedElement);
console.log("shiftedElement:", shiftedElement);
console.log("tooString:", tooString);
console.log("joinn:", joinn);
console.log("fillArray:", fillArray);
console.log("arrayFrom:", arrayFrom);
console.log("isarray:", isarray);
console.log("lettersCopy:", lettersCopy);
console.log("arrayEntries:", [...arrayEntries]);
console.log("arrayKeys:", [...arrayKeys]);
console.log("arrayValues:", [...arrayValues]);
console.log("reducer:", reducer);
console.log("reducerRight:", reducerRight);
console.log("flatArray:", flatArray);
console.log("result:", result);
