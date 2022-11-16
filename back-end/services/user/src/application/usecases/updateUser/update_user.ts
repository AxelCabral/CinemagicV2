import { prisma } from "../../../prisma/client";
import { updateUserDTO } from "../../../dtos/update_user_dto";

export class updateUser{
    async execute({name, email, password}: updateUserDTO) {
        // Verificar email

        const userEmailVerify = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(!userEmailVerify){
            return 400;
        }

        await prisma.user.update({
            where: {
                email,
            },
            data: {
                name,
                email,
                password,
            },
        });

        return 200;
    }
}