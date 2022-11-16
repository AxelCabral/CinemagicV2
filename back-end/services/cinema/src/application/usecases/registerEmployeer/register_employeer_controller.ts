import { Request, Response } from "express";
import { registerEmployeer } from "./register_employeer";

export class registerEmployeerController { 
    async handle(req: Request, res: Response) {
        const { name, email, phone_number, movie_theater } = req.body;

        const register_employeer = new registerEmployeer();

        const result = await register_employeer.execute({name, email, phone_number, movie_theater});

        return res.status(result).json(result);

    }
}