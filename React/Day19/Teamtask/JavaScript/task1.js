let str = "banana"
let count = {}
for( let i = 0 ; i<str.length ; i++ ){

  let curr_char = str[i] ;

  if( count[curr_char] ){
    count[curr_char]++ ;
  }
  else{
    count[curr_char] = 1 ;
  }
}
console.log( count )