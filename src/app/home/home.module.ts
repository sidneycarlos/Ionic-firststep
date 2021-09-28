import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { MovieslistComponent } from '../movies/movieslist/movieslist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MovieslistComponent]
})
export class HomePageModule {}
