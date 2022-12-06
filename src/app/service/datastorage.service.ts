import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  private movies: Movie[] =[];
  constructor(private http: HttpClient) { }

  fetchMovies(){
   return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=5a382a3ddfa31fa99e60ffd1d229506d&language=en-US&page=1');
  }

  fetchShows(){
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=5a382a3ddfa31fa99e60ffd1d229506d&language=en-US&page=1');
   
  }

}