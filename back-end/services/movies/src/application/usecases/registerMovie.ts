import { PrismaClient } from "@prisma/client";
import { registerMovieDTO } from "../../dtos/registerMovieDTO";

export class registerMovie{
    async execute({title, releaseDate, length, gender}: registerMovieDTO){
        const movie = await PrismaClient.movie.create({
            data: {title, releaseDate, length, gender} 
        });

        return movie;
    }
}