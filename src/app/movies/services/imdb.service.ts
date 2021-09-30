import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private subject$: BehaviorSubject<Movie[]>
  private key = 'k_5u3a6r9b'
  private movies: Movie[]

  constructor(private http: HttpClient) {
    this.subject$ = new BehaviorSubject(([])) //instanciation de BehaviorSubject
  }
  //STEP 1
  getMovies() //: Promise<Movie[]>
  {
    return this.http.get<Movie[]>(`https://imdb-api.com/en/API/Top250Movies/${this.key}`).toPromise()
      .then((data: any) => {
        this.subject$.next(data.items)//data = sont les data récupérées de type movie list disponible dans le subject cf structure
        this.movies = data.items
      })
  }

  getMovieByName(name: string) {
    return this.http.get(`https://imdb-api.com/en/API/SearchMovie/${this.key}/${name}`).toPromise()
  }

  getObservable() {
    return this.subject$.asObservable() //récupère la propriété subject qui est privée et de l'utiliser sans la modifier
  }

  deleteMovie(title: string) {
    console.log(this.movies)
    this.movies.map((m, i) => {
      if (m.title === title) {
        this.movies.splice(i, 1)
      }
      this.subject$.next(this.movies)
    })
  }

}
