import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImdbService {


  constructor( private http: HttpClient) { }
//STEP 1
  getMovies() //: Promise<Movie[]>
  {
   //return this.http.get(this.configUrl).toPromise()
   return this.http.get<Movie>(`https://imdb-api.com/en/API/Top250Movies/k_5u3a6r9b`).toPromise()
  }
}
