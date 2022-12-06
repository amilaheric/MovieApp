import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowsComponent,
    MoviedetailComponent,
    ShowdetailComponent,
    SearchPipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
