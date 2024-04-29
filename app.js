import express from 'express'
import cors from 'cors'
// import User from './Models/userModel.js'
import userRouter from './Routers/userRouter.js'
import employeeRouter from './Routers/employeeRouter.js'
import postRouter from './Routers/postRouter.js'
import path from 'path';
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()

async function main() {
    
    await mongoose.connect(process.env.MONGODB_URL);

}

main().then(console.log("connected to DB")).catch(err => console.log(err));

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)
app.use('/employees', employeeRouter)
app.use('/posts', postRouter)

const dirname = path.resolve()
app.use(express.static(path.join(dirname,'uploads')))

const port = process.env.MONGODB_URL || 3000
app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})


