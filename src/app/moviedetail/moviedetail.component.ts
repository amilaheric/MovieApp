import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie';
import { DatastorageService } from '../service/datastorage.service';


@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
 public movie : any;
 public movies: Movie [] = [];
 private pramMapSub: Subscription | undefined;
  constructor(private route: ActivatedRoute,
    private service: DatastorageService,
    private router: Router) {

      this.service.fetchMovies().subscribe((data)=>{ 
        if(data || data.results){   
        this.movies = data.results;
        this.pramMapSub = this.route.paramMap.subscribe(params=>{
          const pId: number = Number(params.get('id'));        
          this.movie = this.movies.filter(p=>p.id === pId)[0];
        })
    }
  });
  
     }

  ngOnInit(): void {
   
  }
  ngOnDestroy() {
    if(this.pramMapSub != null){
      this.pramMapSub.unsubscribe();
    }
  }
  goBack(){
    this.router.navigateByUrl('/movies')
  }

}
