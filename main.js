import express from 'express'

import connection from './db/DataBaseConnection.js';
import userRouter from './Modules/User/user.routes.js';
import postRouter from './Modules/Post/post.routes.js';
import commentRouter from './Modules/Comment/comment.routes.js';

const app = express()

connection()


app.use(express.json())
app.use("/user" , userRouter)
app.use("/post" , postRouter)
app.use("/comment" , commentRouter)
app.listen(3000, () => console.log(`Example app listening on port`))