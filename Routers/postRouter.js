import express from 'express'
import { upload } from '../upload.js'
import { addPost, getPost, updatePost, deletePost, getImageByID } from '../Controller/postController.js'
import passport from '../passport.js'

const postRouter = express.Router()


postRouter.post('/',passport.authenticate('jwt', {session:false}),
               upload.single('image'), addPost)

postRouter.get('/', getPost)

postRouter.patch('/:id', updatePost) 

postRouter.delete('/:id', deletePost) 

postRouter.get('/images/:id', getImageByID)

export default postRouter