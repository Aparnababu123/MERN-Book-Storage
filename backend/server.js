import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js';
import BookRouter from './routes/BookRoute.js';
import cors from 'cors'

const app=express()
const port=process.env.PORT || 4000;
await connectDB()

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type']
}))

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome')
})


app.use('/api/books',BookRouter)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})