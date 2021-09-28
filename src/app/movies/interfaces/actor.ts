import { Movie } from "./movie";

export interface Actor {
    id: string
    firstname: string
    lastname: string
    image: string
    movies: Movie[]
}
