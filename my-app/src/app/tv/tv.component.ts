import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  trendingWeeklySeries: any[];
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(_tvService:TvService) { 
    _tvService.getTrendingSeriesInWeek().subscribe((data) => {
    this.trendingWeeklySeries = data.results;
  })
}

  ngOnInit(): void {
  }

}
