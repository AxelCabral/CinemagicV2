import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { deleteUserDTO } from "../../../dtos/delete_user_dto";

export class deleteUser{
    async execute({email}: deleteUserDTO): Promise<User> {
        const deleteUser = await prisma.user.delete({
            where: {
              email
            },
          })

        return deleteUser;
    }
}