import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/Pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons : Pokemon[];

  constructor(private pokedexService: PokedexService) {
    this.pokemons = new Array();
   }
  // Permet de récupérer les données du json et de les envoyer dans la varibale pokemons
  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((pokemon) => {this.pokemons = pokemon})
  }

  // Sert à afficher les détails du pokémon
  showPokemon(pokemon: Pokemon):void {
    pokemon.isShown = !pokemon.isShown
  }

}
