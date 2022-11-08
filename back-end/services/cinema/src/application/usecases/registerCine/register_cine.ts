import { registerCineDTO } from "../../../dtos/register_cine_dto";
import { prisma } from "../../../prisma/client";
import { Cinema } from "@prisma/client";

export class registerCine {
    async execute({name, local, country, movie_theater}: registerCineDTO): Promise<Cinema> {
        // Verificar owner

        const cineVerify = await prisma.cinema.findUnique({
            where: {
                movie_theater
            }
        });

        if(cineVerify){
            // Erro
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

        return cinema;
    }
}