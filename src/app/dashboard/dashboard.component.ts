import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Initializing the array of type Hero[] as an empty array
  heroes: Hero[] = [];

  //Injecting the HeroService
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //Making the app populate with heroes from the service we subscribe to below in the getHeroes() function
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    //This is pulling the heroes array and slicing of the top 4 indexes for the "Top Heroes"
        .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
