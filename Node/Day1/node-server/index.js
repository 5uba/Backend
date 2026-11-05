import http from 'http'
import dotenv from 'dotenv'
// console.log(http)

dotenv.config()
const app = http.createServer()

// const PORT = 5000
const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
     console.log('Server Running on http://localhost:'+PORT)
})

