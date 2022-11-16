import { Request, Response } from "express";
import { registerUser } from "./register_user";

export class registerUserController { 
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const register_user = new registerUser();

        const result = await register_user.execute({name, email, password});

        return res.status(result).json(result);

    }
}