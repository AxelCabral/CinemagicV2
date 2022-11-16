import { registerUserDTO } from "../../../dtos/register_user_dto";
import { prisma } from "../../../prisma/client";
import { User } from "@prisma/client";

export class registerUser {
    async execute({name, email, password}: registerUserDTO) {
        // Verificar email

        const userEmailVerify = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(userEmailVerify){
            return 400;
        }
        
        // Registrar Usuário
        await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return 201;
    }
}