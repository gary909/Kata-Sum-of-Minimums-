function sumOfMinimums(arr) {
    let arrCnt = 0; // keep count
    for(let i = 0; i < arr.length; i++){
        arr[i].sort((a,b) => a-b); // put array[i] in num order
        arrCnt = arrCnt + arr[i][0]; // count that number
    }
    return arrCnt;
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); // 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])); // 76