import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  { path:'',component: ShowsComponent},
  { path:'movies',component: MoviesComponent},
  { path:'shows',component: ShowsComponent},
  { path:'movies/:id',component:MoviedetailComponent},
  { path:'shows/:id',component: ShowdetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
