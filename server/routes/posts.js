import { Router } from 'express'
import { createPost, getAll } from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

//Create Post
// http://localhost:8080/api/posts
router.post('/', checkAuth, createPost)

//Get all Post
// http://localhost:8080/api/posts

router.get('/', getAll)




export default router