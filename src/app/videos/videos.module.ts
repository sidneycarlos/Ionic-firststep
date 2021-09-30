import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module';

import { VideosPage } from './videos.page';
import { MoviesModule } from '../movies/movies.module';
import { MovieslistComponent } from '../movies/movieslist/movieslist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesModule,
    VideosPageRoutingModule
  ],
  declarations: [VideosPage, MovieslistComponent]
})
export class VideosPageModule {}
