import express, {Request, Response} from 'express'
import {container} from "./inversify.config";
import {CreateUserUseCase} from "./Module/User/Application/CreateUserUseCase";
const port = 8888
const app = express()

app.get('/', (req:Request, res:Response) => {
    res.send('Node TypeScript DDD example <br><br> <a href="/api/users">Create a new user</a>')
})

app.get('/api/users', async (req:Request, res:Response) => {
    // todo get it from payload
    const email = 'user@test.com';
    const crateUserUseCase = container.get(CreateUserUseCase)


    const user = await crateUserUseCase.createUser(email)

    res.send(`User with email "${user.email}" was created.`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
