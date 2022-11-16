import { Request, Response } from "express";
import { updateUser } from "../updateUser/update_user";

export class updateUserController { 
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const update_user = new updateUser();

        const result = await update_user.execute({name, email, password});

        return res.status(result).json(result);

    }
}