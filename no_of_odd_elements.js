// 10. find the number of odd elements in an array

let arr = [1, 46, 6, 3, 21, 9];
let count = 0; 
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 != 0) {
    count++
  }
}
console.log(count);