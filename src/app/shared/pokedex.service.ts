import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  public getPokemons() {
    return this.http.get<Pokemon[]>('assets/pokemons-mock.json');
  }
}
