import { Cinema } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { deleteCineDTO } from "../../../dtos/delete_cine_dto";

export class deleteUser{
    async execute({id}: deleteCineDTO): Promise<Cinema> {
        const deleteCine = await prisma.cinema.delete({
            where: {
              id
            },
          })
        return deleteCine;
    }
}