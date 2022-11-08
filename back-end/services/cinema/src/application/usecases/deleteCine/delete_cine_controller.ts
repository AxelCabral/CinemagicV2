import { Request, Response } from "express";
import { deleteUser } from "./delete_cine";

export class deleteCineController { 
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const delete_user = new deleteUser();

        const result = await delete_user.execute({id});

        return res.status(201).json(result);

    }
}