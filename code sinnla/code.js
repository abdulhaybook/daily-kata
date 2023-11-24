let ss = [0, 3]
let  s=ss.sort((b,a )=>b-a)

console.log(s);
s=  s.map(element=>{
 return element +1
})
  let j = 0

console.log(s);
for(let i = 0 ; i<s.length -1 ; i++){
      let n = i +1
     
      console.log(i);
     
       
        console.log("oeror");
        j = s[n]-s[i]
        console.log(j);
         
     
    }
      console.log(j);
console.log(s);
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
