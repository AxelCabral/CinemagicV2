import { Request, Response } from "express";
import { updateCine } from "./update_cine";

export class updateCineController { 
    async handle(req: Request, res: Response) {
        const { id, name, local, country, movie_theater } = req.body;

        const update_cine = new updateCine();

        const result = await update_cine.execute({id, name, local, country, movie_theater});

        return res.status(result).json(result);


    }
}