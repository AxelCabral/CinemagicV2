import { Request, Response } from "express";
import { updateEmployeer } from "./update_employeer";

export class updateEmployeerController { 
    async handle(req: Request, res: Response) {
        const { name, email, phone_number, movie_theater } = req.body;

        const update_employeer = new updateEmployeer();

        const result = await update_employeer.execute({name, email, phone_number, movie_theater});

        return res.status(result).json(result);


    }
}