import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.scss'],
})
export class MovieslistComponent implements OnInit, OnDestroy{
  
  private sub$: Subscription
  protected movies: Movie[]

constructor(private service: ImdbService) { }

  ngOnInit() : void
  {
    this.service.getMovies()
    this.sub$ = this.service.getObservable()
    .subscribe((data: Movie[])=> this.movies = data)
    
  }

  ngOnDestroy() : void
  {
    this.sub$.unsubscribe()
  }

}

  

