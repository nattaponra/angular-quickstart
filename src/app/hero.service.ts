import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /** Original 
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  /** Observable */
  getHeroes(): Observable<Hero[]> {
    console.log(of(HEROES));
    return of(HEROES);
  }
}
