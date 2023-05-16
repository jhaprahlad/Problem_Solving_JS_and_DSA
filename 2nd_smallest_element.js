// 4. find the second smallest element in an array

let arr=[2,5,3,7,1,0]
for(let i=arr.length-1;i>=0;){
    if(arr[i]<arr[i-1]){
        temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
        i=arr.length-1;
    }else{i--}
}
console.log(arr[1])