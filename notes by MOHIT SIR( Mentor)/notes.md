//Array

// 21,23,5562,5

// let a = 234;
// let b = 5;

// let arr = [21, 23, 5562, 5];

// size of arr
// console.log(arr.length);

// console.log(arr[4]);

// print the array

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// question 1. searching an element in an array

// let arr = [2, 4, 6, 9, 3, 8];
// let key = 9;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == key) {
//     console.log("Element found at index " + i);
//     break;
//   }
// }

// console.log(arr.indexOf(key));
// console.log(arr.includes(key));

// question 2. reverse an array

// following two pointer approach
// function reveresArray(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// function printArray(arr, size) {
//   for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6];

// let n = arr.length;

// // To print original array
// printArray(arr, n);

// // Function calling
// reveresArray(arr, 0, n - 1);

// console.log("Reversed array is");

// // To print the Reversed array
// printArray(arr, n);

// question 3. sort an array

// let arr = [2, 4, 6, 9, 3, 8];

// sorting type
// 1. ascending order [1,2,3,4,5,6]
// 2. descending order [6,5,4,3,2,1]

// take two loops and compare each element with each other

// starting form 0th index to last index
// for (let i = 0; i < arr.length; i++) {
//   // starting from i+1 index to last index
//   for (let j = i + 1; j < arr.length; j++) {
//     // compare the elements
//     if (arr[i] > arr[j]) {
//       // swap the elements
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// 0 - 1-> arr.length
// 1 - 2-> arr.length
// 2 - 3-> arr.length
// 3 - 4-> arr.length
// 4 - 5-> arr.length
// 5 - 6-> arr.length

// time complexity O(n*n)

// console.log(arr);

// convert time - o(n) - o(n*log(n))

// 2D array looping

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// console.log(arr[0][0]);
// console.log(arr[0][2]);

// Home assignment
// 1. find the maximum element in an array
// 2. find the minimum element in an array
// 3. find the second largest element in an array
// 4. find the second smallest element in an array
// 5. find the sum of all elements in an array
// 6. find the average of all elements in an array
// 7. find the sum of all even elements in an array
// 8. find the sum of all odd elements in an array
// 9. find the number of even elements in an array
// 10. find the number of odd elements in an array