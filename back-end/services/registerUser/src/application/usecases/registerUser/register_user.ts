import { registerUserDTO } from "../../../dtos/register_user_dto";
import { prisma } from "../../../prisma/client";
import { User } from "@prisma/client";

export class registerUser {
    async execute({name, email, password}: registerUserDTO): Promise<User> {
        // Verificar email

        const userEmailVerify = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(userEmailVerify){
            // Erro
        }
        
        // Registrar Usuário
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return user;
    }

    async list(){
        const users = await prisma.user.findMany();

        return { users }
    }
}