import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../interfaces/items';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: Items
  
  constructor() { }

  ngOnInit() {}

}
