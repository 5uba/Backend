import fs from 'fs'

fs.writeFile('test.txt', 'Hello World', ()=>{
    console.log('successfully created')
})
fs.readFile('test.txt', 'utf-8', (error, data)=>{
    console.log(data)
})
fs.appendFile('test.txt', 'Hello World', ()=>{
    console.log('successfully appended')
})

export default fs