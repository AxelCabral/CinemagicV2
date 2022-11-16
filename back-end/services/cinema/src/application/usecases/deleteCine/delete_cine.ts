import { Cinema } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { deleteCineDTO } from "../../../dtos/delete_cine_dto";

export class deleteCine{
    async execute({id}: deleteCineDTO){
      const cineVerify = await prisma.cinema.findUnique({
        where: {
            id
        }
     });
      if(!cineVerify){
        return 400;
        }
        await prisma.cinema.delete({
            where: {
              id
            },
          })
        return 200;
    }
}