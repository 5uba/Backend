// function add (a){

//   console.log(a);
  

// }


// let x = add;

// x(10)


// const election = (dmk,admk,tvk)=>{

//   console.log(`First ${dmk+admk}`);

//   let resultnew = dmk+" "+admk

//   tvk(resultnew)
  




// }

// const result = (res)=>{

//  console.log('Result',res);
 

// }

// election("MKS","EPS",result)


// const calculate = (a,b,cb)=>{

//   let result_1 = a+b
//   cb(result_1)

// }


// calculate(10,20, (result)=>{

//   console.log("result",result);
  

// })



// const evennumber = (number,cb)=>{

//   if(number%2===0){

//     cb("even")

//   }else{
//     cb("Odd")
//   }
      
// }

// const send = (result)=>{

//   console.log(result);
  



// }

// evennumber(11,send)



// console.log('Start');

//  setInterval(()=>{

// console.log('process i am going to out of the browser');


//  },3000)

// console.log('Stop');





// const newres = ()=>{

//   console.log('ruuning');

//   return ()=>{
//     console.log('Running');
    
//   }

// }


//  newres()()




// const add = ()=>{

//   let a = 10

//   return ()=>{


//     a++

//     console.log(a);
    



//   }
  

// }


// const result = add()

// result()
// result()

const newadd = ()=>{
  
  let a = 10
  return ()=>{



  a++


  console.log('a',a);

  }
  
   

}



const result = newadd()

result()


a += 10000

console.log(a);

