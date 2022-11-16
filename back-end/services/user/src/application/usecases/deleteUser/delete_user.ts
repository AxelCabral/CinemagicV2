import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { deleteUserDTO } from "../../../dtos/delete_user_dto";

export class deleteUser{
    async execute({email}: deleteUserDTO){
      
      const userEmailVerify = await prisma.user.findUnique({
        where: {
            email
        }
        });

        if(userEmailVerify){
            return 400;
        }

        await prisma.user.delete({
            where: {
              email
            },
          })
        return 200;
    }
}