import { Request, Response } from "express";
import { getEmployeer } from "./get_employeer";

export class getEmployeerController { 
    async handle(req: Request, res: Response) {
        const get_Employeer = new getEmployeer();

        const result = await get_Employeer.execute();
        
        return res.status(201).json(result);

    }
}