import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import sequelize from './db/sequelizeConfig'
import {
    createComment,
    deleteComment,
    getComment,
    getComments,
    updateComment,
} from './controllers/commentController'
import cors from 'cors'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// parse application/json
app.use(express.json())

app.use(cors())

app.get('/', async (req: Request, res: Response) => {
    console.log(await createComment('mail', 'comment'))
    res.send('Express + TypeScript Server with Perritos')
})

app.post('/comment', async (req: Request, res: Response) => {
    try {
        const newComment = await createComment(req.body.comment, req.body.email)
        res.status(201).send(newComment)
    } catch (error) {
        console.error(error)
        res.status(400).send('Theres been an error while creating a comment!')
    }
})

app.get('/comment/', async (_req: Request, res: Response) => {
    try {
        const comments = await getComments()
        res.status(200).send(comments)
    } catch (error) {
        console.error(error)
        res.status(400).send('Theres been an error while creating a comment!')
    }
})

app.get('/comment/:id', async (req: Request, res: Response) => {
    try {
        const comment = await getComment(req.params.id)
        res.status(200).send(comment)
    } catch (error) {
        console.error(error)
        res.status(400).send('Theres been an error while creating a comment!')
    }
})

app.put('/comment/:id', async (req: Request, res: Response) => {
    try {
        const updatedComment = await updateComment(
            req.params.id,
            req.body.comment,
            req.body.email
        )
        res.status(201).send(updatedComment)
    } catch (error) {
        console.error(error)
        res.status(400).send('Theres been an error while creating a comment!')
    }
})

app.delete('/comment/:id', async (req: Request, res: Response) => {
    try {
        const deletedComment = await deleteComment(req.params.id)
        res.status(201).send(deletedComment)
    } catch (error) {
        console.error(error)
        res.status(400).send('Theres been an error while creating a comment!')
    }
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

const trySequelizeConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

trySequelizeConnection()
