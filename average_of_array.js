// 6. find the average of all elements in an array
let arr=[1,46,6,3,21,9]
let sum=0
for(let i=arr.length-1;i>=0;i--){
    sum=sum+arr[i]
}
let avg = sum/arr.length

console.log(avg);