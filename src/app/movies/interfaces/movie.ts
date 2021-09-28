import { Actor } from "./actor";

export interface Movie {
    id: string
    title: string
    year: number
    image: string
    description: string
    actors: Actor[]
}


