import { Component, OnInit } from '@angular/core';
import { TokenizerService } from '../authentication/service/tokenizer.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  constructor(private service:TokenizerService) { }

  ngOnInit() {
     this.service.getToken()
  }

}
