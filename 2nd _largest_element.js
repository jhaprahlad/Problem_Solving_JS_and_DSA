// 3. find the second largest element in an array


let arr=[3,6,1,5,8]
for(let i=0;i<arr.length;){
    if(arr[i]<arr[i+1]){
        let temp =arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        i=0;
        
    }else{i++}
}
console.log(arr[1])