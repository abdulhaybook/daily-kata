function solution(arr) {
    var total = 0;
for(var i = 0; i < arr.length; i++){
    if (arr[i] <= arr[i-1]){
        total++;
        if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]){
            return false;
        }
    }
}
return total<=1;
}
