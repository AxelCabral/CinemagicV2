import { Request, Response } from "express";
import { getCine } from "./get_cine";

export class getCineController { 
    async handle(req: Request, res: Response) {
        const get_cine = new getCine();

        const result = await get_cine.execute();

        return res.status(201).json(result);

    }
}