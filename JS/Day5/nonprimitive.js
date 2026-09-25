const arr = [1,2,3,4,5,"React",100]

console.log(arr[0]);

arr[3] = "React New"

console.log(arr[3] = "React New");


console.log(arr);


const arrnew = arr.push(75657)

console.log(arrnew);



console.log(arr);


const newdatas = arr.unshift(6968)

console.log('newdatas',newdatas);


console.log('ruytruyr',arr.unshift(6968));

console.log('arr',arr);




arr.pop()
console.log(arr);



const arrdelete = arr.splice(2,3)
console.log(arrdelete);

console.log('splice arr',arr);



const count = arr.length-1
console.log(arr[count]);

console.log(arr);


const looping = [1,2,3,4,5,6,7]


// let  newArr = ""
let str_elem = "" 
for( let i = 0 ; i < looping.length  ; i++ ){
    str_elem += looping[i] ;
}
console.log('str_elem' , str_elem) ;


// for(let l=looping.length-1;l>=0;l--){
    

//     newArr += looping[l] + " "
    
// }
// console.log(newArr);

let nums =[1,2,3,4]
let result = []

for(let i =0; i<nums.length; i++){
  
    for(let j=0; j<i; j++){
       
        console.log(j,i);
        
       
    }
   
}