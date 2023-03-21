import {PrismaClient} from '@prisma/client'
import { FastifyInstance } from 'fastify'
import {z} from 'zod'

export async function appRoutes(app:FastifyInstance){
    const prisma = new PrismaClient()


    app.post('/signIn',async (request) => {
        const createUserBody = z.object({
            name: z.string(),
            password: z.string(),
        })
    
        const {name,password} = createUserBody.parse(request.body)

        await prisma.user.create({
            data: {
                name,
                password
            }
        })
        })
    app.get('/users',async () => {
        const users = await prisma.$queryRaw`
        SELECT * from user
        `
        return users
    })
    app.delete('/userDelete/:id', async (request) => {

        const removeUser = z.object({
            id: z.string().uuid()
        })
        const { id } = removeUser.parse(request.params)
        await prisma.user.delete({
            where: {
                id
            }
        })
    })
    
    app.patch('/editUser', async (request, reply) => {
        const edit = z.object({
            id: z.string().uuid(),
            name: z.string()
        })
        const {id,name} = edit.parse(request.body)
        await prisma.$queryRaw`
            UPDATE user SET name = ${name} WHERE id = ${id}
        `
    })
      
}





