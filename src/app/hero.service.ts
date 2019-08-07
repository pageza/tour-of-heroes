import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  private heroesUrl = 'api/heroes';

  // This function makes a GET call to the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send message after fetching the hero
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string){
    this.messageService.add('HeroService: ${message}')
  }
}
