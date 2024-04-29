import express from 'express'
import {login, getUsers, getUserbyUserName, addUser, updateUserbyId, deleteUser } from '../Controller/userController.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.get('/usersname/:username',getUserbyUserName)
userRouter.post('/', addUser)
userRouter.post('/login', login)
userRouter.patch('/:id',updateUserbyId)
userRouter.delete('/:id', deleteUser)

export default userRouter