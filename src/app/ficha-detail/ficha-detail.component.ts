import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import {db, Ficha} from '../db/db';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-detail',
  templateUrl: './ficha-detail.component.html',
  styleUrls: ['./ficha-detail.component.scss']
})
export class FichaDetailComponent {
  constructor(
    private route: ActivatedRoute
  ){}

  ficha = liveQuery(()=>this.loadFicha())

  async loadFicha(){
    console.log(db.fichas.where({
      id: this.route.snapshot.paramMap.get("id")
    }).toArray());
    return db.fichas.where({
      id: this.route.snapshot.paramMap.get("id")
    }).toArray();
  }
}
