import { registerCineDTO } from "../../../dtos/register_cine_dto";
import { prisma } from "../../../prisma/client";
import { Cinema } from "@prisma/client";

export class registerCine {
    async execute({name, local, country, movie_theater}: registerCineDTO) {
        // Verificar owner

        const cineVerify = await prisma.cinema.findUnique({
            where: {
                movie_theater
            }
        });

        if(cineVerify){
            return 400;
        }
        
        // Registrar Cinema
        const cinema = await prisma.cinema.create({
            data: {
                name,
                local,
                country,
                movie_theater
            }
        });

        return 201;
    }
}