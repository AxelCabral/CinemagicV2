import { Request, Response } from "express";
import { registerCine } from "./register_cine";

export class registerCineController { 
    async handle(req: Request, res: Response) {
        const { name, local, country, movie_theater } = req.body;

        const register_cine = new registerCine();

        const result = await register_cine.execute({name, local, country, movie_theater});

        return res.status(201).json(result);

    }
}