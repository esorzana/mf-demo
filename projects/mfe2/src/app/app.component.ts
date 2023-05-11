import { Component } from '@angular/core';
import { CoreService, MESSAGE_EVENT } from 'core';
import { PokeRepositoryService } from 'projects/core/src/lib/poke.repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe2';

  pokemon:any;

  constructor(private readonly bus:CoreService, private pokeDB: PokeRepositoryService){
    if (!bus) {
      this.bus= new CoreService();
    }
    this.bus.register(MESSAGE_EVENT.CHANGE, this.handleChangeEvent, this); //check .bind for call function with this reference
  }

  public loadPokemon(url:string){
    this.pokeDB.genericGet(url).subscribe((pokemon:any)=>{
      console.log(pokemon);
      this.pokemon = pokemon;
    })
  }
  

 
  
  handleChangeEvent(event:CustomEvent, context:any){
    context.loadPokemon(event.detail.data);
  }
}
