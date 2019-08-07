import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //Here is where I import the Hero class from hero.ts
  // hero: Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // } 

  //This is where I am importing the HEROS array
  heroes: Hero[];

  //This is the function to take the click event for the hero that was clicked on and change the display
  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  //Injecting the HeroService as a private parameter of the type HeroService
  constructor(private heroService: HeroService) { }

  //Function to populate the heroes array from the hero.service
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    //runs the getHeroes function on the initialization of the component.
    this.getHeroes();
  }

}
