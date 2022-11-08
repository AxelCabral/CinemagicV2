import { Request, Response } from "express";
import { deleteUser } from "./delete_user";

export class deleteUserController { 
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const delete_user = new deleteUser();

        const result = await delete_user.execute({email});

        return res.status(201).json(result);

    }
}