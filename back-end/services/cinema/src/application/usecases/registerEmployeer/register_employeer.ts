import { registerEmployeerDTO } from "../../../dtos/register_employeer_dto";
import { prisma } from "../../../prisma/client";
import { Employeer } from "@prisma/client";

export class registerEmployeer {
    async execute({name, email, phone_number, movie_theater}: registerEmployeerDTO) {
        // Verificar owner

        const employeerVerify = await prisma.employeer.findUnique({
            where: {
                email
            }
        });

        if(employeerVerify){
            return 400;
        }
        
        // Registrar Empregado
        await prisma.employeer.create({
            data: {
                name,
                email,
                phone_number,
                movie_theater
            }
        });

        return 201;
    }
}