import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  trendingWeeklyPeople: any[];
  imagePrefix: string = "https://image.tmdb.org/t/p/w500";
  constructor(_peopleService:PeopleService) { 
    _peopleService.getTrendingPeopleInWeek().subscribe((data) => {
      this.trendingWeeklyPeople = data.results;
    })
  }

  ngOnInit(): void {
  }

}
