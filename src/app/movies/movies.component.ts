import { Component, Input, OnInit } from '@angular/core';
import { DatastorageService } from '../service/datastorage.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  searchInput = '';
  public movies: any [] = [];
  constructor(private dataService:DatastorageService) {
   }

   ngOnInit(): void {
    this.dataService.fetchMovies().subscribe((data)=>{ 
      if(data || data.results){   
      this.movies = data.results; 
  }
  
});

  }


}
