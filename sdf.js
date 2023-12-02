<<<<<<< HEAD
// // function solution(arr) {
// //     var total = 0;
// // for(var i = 0; i < arr.length; i++){
// //     if (arr[i] <= arr[i-1]){
// //         total++;
// //         if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]){
// //             return false;
// //         }
// //     }
// // }
// // return total<=1;
// // }
//         let matrix = [[0,1,1,2], 
//         [0,5,0,0], 
//         [2,0,3,3]]
//         let total = 0
//         let arr = []
//         let arr2 = []
//         let arr3 = []
//         let arr4 = []
        
            
//             // if(matrix.length == 1){
//             //     for(let item3 of item){
//             //         // console.log(total)
                    
//             //     if(item != 0){
//             //     total += item3
//             //         // console.log(total)
                
//             //     }
//             // }
//             //     }
//             //     if(matrix.length > 1){
//                     for(let i = 0 ;matrix[0].length;i++){
//                         if(matrix[0] != undefined){

//                     var vars = i
//                         if(matrix[0][i] != 0 ){
//                             total+ matrix[0][i]
//                             arr.push(i)
//                         }
//                     }

//                     }
//                     for(let itema of arr){
//                         if(matrix[1 != undefined]){

//                         for(let i = 0 ;matrix[1].length;i++){
//                             var vars = itema
//                             if(matrix[0][itema] != 0 ){
//                                 total+ matrix[0][itema]
//                                 arr2.push(itema)
//                             }
            
//                         }
//                     }
//                     }
//                     for(let itema of arr2){
//                         if(matrix[2] != undefined){

//                         for(let i = 0 ;matrix[2].length;i++){
//                             var vars = itema
//                             if(matrix[0][itema] != 0 ){
//                                 total+ matrix[0][itema]
//                                 arr3.push(itema)
//                             }
//                         }
            
//                         }
//                     }
//                     for(let itema of arr3){
//                 if(matrix[4 != undefined]){

//                         for(let i = 0 ;matrix[4].length;i++){
//                             var vars = itema
//                             if(matrix[0][itema] != 0 ){
//                                 total+ matrix[0][itema]
//                                 arr4.push(itema)
//                             }
            
//                         }
//                     }
//                 }
 
                    
//                 // }
        
//         console.log(total);
=======
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
>>>>>>> 3b78338624e7aa0fa8797885aa50e0e672dd1b61
