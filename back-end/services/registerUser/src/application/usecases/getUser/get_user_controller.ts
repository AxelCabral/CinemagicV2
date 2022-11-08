import { Request, Response } from "express";
import { getUser } from "./get_user";

export class getUserController { 
    async handle(req: Request, res: Response) {
        const get_user = new getUser();

        const result = await get_user.execute();

        return res.status(201).json(result);

    }
}