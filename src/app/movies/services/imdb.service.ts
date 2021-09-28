import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  movies: Movie[]
  actors: Actor[]
  configUrl = 'assets/moviestest.json';

  constructor( private http: HttpClient) { }

  getMovies() //: Promise<Movie[]>
  {
   //return this.http.get(this.configUrl).toPromise()
   return this.http.get(`https://imdb-api.com/en/API/Top250Movies/k_9mss3837`).toPromise()
  }
}
