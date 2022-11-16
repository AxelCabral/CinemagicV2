import { Cinema } from "@prisma/client";
import { updateCineDTO } from "../../../dtos/update_cine_dto";
import { prisma } from "../../../prisma/client";

export class updateCine{
    async execute({id, name, local, country, movie_theater}: updateCineDTO){

        const cineVerify = await prisma.cinema.findUnique({
            where: {
                id
            }
        });

        if(!cineVerify){
            return 400;
        }

        await prisma.cinema.update({
            where: {
                id,
            },
            data: {
                name,
                local,
                country,
                movie_theater
            },
        });
        return 200;
    }
}