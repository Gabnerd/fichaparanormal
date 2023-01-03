import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import {db, Ficha} from '../db/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fichas = liveQuery(()=> db.fichas.toArray());

  nome: string = '';

  addFichaMode = false;

  async addNewList(){
    await db.fichas.add({
      nome: this.nome
    });
    this.addFichaMode = false;
    this.nome = '';
  }
  
}
