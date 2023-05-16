// 8. find the sum of all odd elements in an array

let arr = [1, 46, 6, 3, 21, 9];
let sum = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 != 0) {
    sum = sum + arr[i];
  }
}

console.log(sum);