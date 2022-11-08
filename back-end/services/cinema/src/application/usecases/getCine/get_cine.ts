import { Cinema } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class getCine{
    async execute(): Promise<Cinema[]>{
        const cinemas = await prisma.cinema.findMany({});

        return cinemas;
    }
}