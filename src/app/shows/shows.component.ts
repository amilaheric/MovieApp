import { Component, OnInit } from '@angular/core';
import { DatastorageService } from '../service/datastorage.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  searchInput = '';
  public shows: any [] = [];
  constructor(private dataService: DatastorageService) { }

  ngOnInit(): void {
    this.dataService.fetchShows().subscribe((data)=>{ 
      if(data || data.results){ 
      this.shows = data.results; 
  }
});
  }

}
