
const accountCreate = ()=>{

    let balance = 1000
    
    return {
        balanceCheck:()=>{
            return balance
        },
        
            deposite:(amount)=>{
                return balance += amount
            }
        ,
            withdraw:(amount)=>{

                if(amount <= balance){

                    return balance -= amount

                }else{
                    return balance
                }
                
            }
        
    }
    
}



// balance += 200000
// console.log(balance);

const obj = {depost:2635,coount:5767,}


// console.log(accountCreate());

const result = accountCreate()

console.log(result.balanceCheck()); 

 console.log(result.deposite(20000));
console.log(result.balanceCheck()); 

  console.log(result.withdraw(10000));

console.log(result.balanceCheck()); 