/*import { registerMovie } from "./registerMovie";

export class registerMovieController{
    async handle(request, reply){
        const {title, releaseDate, length, gender} = request.body;

        const register_Movie = new registerMovie();
        const result = await register_Movie.execute({title, releaseDate, length, gender});

        return reply.status(201).json(result);
    }
}*/