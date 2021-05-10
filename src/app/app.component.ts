import { Component } from '@angular/core';
import { Lutador } from 'src/models/lutador';
import { TorneioService } from 'src/services/torneio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lutadores: Lutador[] = [];

  constructor (private torneioService: TorneioService){}

  ngOnInit() {
    this.getLutadores();
    this.iniciarTorneio();
  }

  getLutadores() {
    return this.torneioService.getLutadores()
         .subscribe(data => this.lutadores = JSON.parse(JSON.stringify(data)));
  }

  iniciarTorneio() {
    return this.torneioService.getLutadores()
         .subscribe(data => this.lutadores = JSON.parse(JSON.stringify(data)));
  }
}
