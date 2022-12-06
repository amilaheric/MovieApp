import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shows } from '../models/shows';
import { DatastorageService } from '../service/datastorage.service';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {

  public show : any;
  public shows: Shows [] = [];
  private pramMapSub: Subscription | undefined;
   constructor(private route: ActivatedRoute,
     private service: DatastorageService,
     private router: Router) {
       this.service.fetchShows().subscribe((data)=>{ 
         if(data || data.results){   
         this.shows = data.results;
         this.pramMapSub = this.route.paramMap.subscribe(params=>{
           const pId: number = Number(params.get('id'));        
           this.show = this.shows.filter(p=>p.id === pId)[0];
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
    this.router.navigateByUrl('/shows')
  }
}
