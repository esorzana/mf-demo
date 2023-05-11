import { Component, OnDestroy } from '@angular/core';
import { CoreService, MESSAGE_EVENT } from 'core';
import { PokeRepositoryService } from 'projects/core/src/lib/poke.repository.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'mfe1';
  pokemons: any[] = [];
  subscriptions: Subscription[] = [];
  getUser(){
    return this.bus.user;
  }
  constructor(private readonly bus: CoreService, private pokeDB: PokeRepositoryService) {
    if (!bus)
      this.bus = new CoreService();
   

    this.subscriptions.push(this.pokeDB.getPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons.results
      console.log(this.pokemons);
    }));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

  changeView(url:string): void {
    this.bus.emit(MESSAGE_EVENT.CHANGE, { data: url });
  }


}
