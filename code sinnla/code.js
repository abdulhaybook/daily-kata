let s1 = "aabcc"
let s2 = "adcaa"
let s3 = new Set(s1)
let s4 = new Set(s2)
console.log(s3);
let total = 0
for(let i = 0 ;i < s3.length; i++){
    for(let j = 0 ; j<s4.length;j++){
        if(s3[i] == s4[j]){
            total += 1
        }
    }
}
console.log(total);
// let inputArray = ["aba", "aa", "ad", "vcd", "aba"]
                                // let arr_1 = []
                                // for(let item of inputArray){
                                //     arr_1.push(item.length)
                                // }
                                // console.log(arr_1);

                                // let max = Math.max(...arr_1)

                                // let arr_2 = []
                                // console.log(max);
                                // for(let item of inputArray){
                                //     if(item.length == max){
                                //         arr_2.push(item)
                                //     }
                                // }
                                // console.log(arr_2);
// for(let item of )
// console.log(inputArray.length);
// let one = inputArray[0].length

// let max = 0
// for(let item of inputArray){
// if(one < item.length){
// max = item.length
// console.log(item);
// }
// }
// if(one == inputArray[0].length){
//     max = one
// }
// console.log(max);
// let arr = []
// for(let item of inputArray){
//     if(item.length == max){
//         arr.push(item)
//     }
// }
// console.log(arr);
// let  s=ss.sort((b,a )=>b-a)

// console.log(s);
// s=  s.map(element=>{
//  return element +1

// })
//   let j = 0

// console.log(s);
// for(let i = 0 ; i<s.length -1 ; i++){
//       let n = i +1
     
//       console.log(i);
     
       
//         console.log("oeror");
//         j = s[n]-s[i]\//         console.log(j);
         
     
//     }
//       console.log(j);
// console.log(s);
//   let j = 0
//   for(let i = 1 ; i<s.length -1; i++){
//     let n = 0
//     console.log(i);
//     if((s[i] - s[++n+i]) == 1){
//         console.log('nice');
//     }
//     if((s[++n+i]-s[i]) > 1){
//       console.log("oeror");
//         j++
//     } 
//   }
//   console.log(j);
// console.log(s);

