import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../services/imdb.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {

  constructor(private service: ImdbService) { }

  ngOnInit() {
  
    
  }

}
