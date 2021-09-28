import { Component, OnInit } from '@angular/core';
import { Items } from '../interfaces/items';
import { Movie } from '../interfaces/movie';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.scss'],
})
export class MovieslistComponent implements OnInit {
  
  movies: Items[]

constructor(private service: ImdbService) { }

  ngOnInit() {
    this.service.getMovies()
    .then((data: Movie) => this.movies = data.items)
    .then(data => console.log(data))
  }
}
  // {
  //   id: 'string',
  //   title: 'string',
  //   year: 'number',
  //   image: 'string',
  //   description: 'string',
  //   actors: []
  // }


  

