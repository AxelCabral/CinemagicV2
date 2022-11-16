import { Cinema } from "@prisma/client";
import { updateEmployeerDTO } from "../../../dtos/update_employeer_dto";
import { prisma } from "../../../prisma/client";

export class updateEmployeer{
    async execute({name, email, phone_number, movie_theater}: updateEmployeerDTO){

        const employeerVerify = await prisma.employeer.findUnique({
            where: {
                email
            }
        });

        if(!employeerVerify){
            return 400;
        }

        await prisma.employeer.update({
            where: {
                email,
            },
            data: {
                name,
                email,
                phone_number,
                movie_theater
            },
        });

        return 200;
    }
}