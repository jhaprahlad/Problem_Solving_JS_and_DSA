// 2. find the minimum element in an array

/*----------1st method -----------------*/
// let arr=[3,6,1,5,8]
// for(let i=arr.length-1;i>=0;){
//     if(arr[i]>arr[i-1]){
//         let temp =arr[i];
//         arr[i]=arr[i-1];
//         arr[i-1]=temp;
//         i=arr.length-1;
        
//     }else{i--}
// }
// console.log(arr)

/*----------2nd method -----------------*/

let arr=[3,6,1,5,8]
for(let i=0;i<arr.length;){
    if(arr[i]<arr[i+1]){
        let temp =arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        i=0;
        
    }else{i++}
}
console.log(arr[arr.length-1])

