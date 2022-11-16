import { Employeer } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class getEmployeer{
    async execute(): Promise<Employeer[]>{
        const Employeers = await prisma.employeer.findMany({});

        return Employeers;
    }
}