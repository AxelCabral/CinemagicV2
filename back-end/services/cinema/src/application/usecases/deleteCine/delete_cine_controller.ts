import { Request, Response } from "express";
import { deleteCine } from "./delete_cine";

export class deleteCineController { 
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const delete_cine = new deleteCine();

        const result = await delete_cine.execute({id});

        return res.status(result).json(result);

    }
}