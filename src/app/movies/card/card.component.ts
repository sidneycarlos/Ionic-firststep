import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: Movie
  
  constructor(private service: ImdbService) { }

  ngOnInit() {}

  deleteMovie(title: string){
    return this.service.deleteMovie(title)
  }

}
