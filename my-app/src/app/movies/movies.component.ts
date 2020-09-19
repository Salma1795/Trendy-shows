import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  trendingWeeklyMovies: any[];
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(_MoviesService: MoviesService) {
    _MoviesService.getTrendingMoviesInWeek().subscribe((data) => {
      this.trendingWeeklyMovies = data.results;
    })

  }

  ngOnInit(): void {
  }

}
