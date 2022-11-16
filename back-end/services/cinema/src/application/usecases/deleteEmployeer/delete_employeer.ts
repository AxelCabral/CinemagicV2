import { Employeer } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { deleteEmployeerDTO } from "../../../dtos/delete_employeer_dto";

export class deleteEmployeer{
    async execute({email}: deleteEmployeerDTO) {
      
      const employeerVerify = await prisma.employeer.findUnique({
        where: {
            email
        }
        });

        if(!employeerVerify){
            return 400;
        }

        await prisma.Employeer.delete({
            where: {
              email
            },
          })
        
        return 200;
    }
}