import { Request, Response } from "express";
import { deleteEmployeer } from "./delete_employeer";

export class deleteEmployeerController { 
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const delete_employeer = new deleteEmployeer();

        const result = await delete_employeer.execute({email});

        return res.status(result).json(result);

    }
}