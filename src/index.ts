import express, {Request, Response} from 'express'
import {provideCrateUserUseCase} from "./Module/User";
const port = 8888
const app = express()

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World! <br> <a href="/api/users">Create a new user</a>')
})

app.get('/api/users', async (req:Request, res:Response) => {
    // todo get it from payload
    const email = 'user@test.com';
    const crateUserUseCase = provideCrateUserUseCase()

    const user = await crateUserUseCase.createUser(email)

    res.send(`User with email "${user.email}" was created.`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})