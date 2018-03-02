import { Injectable } from '@angular/core';
import { Clone } from './clone';

@Injectable()
export class CloneService {
  
  private clones: Clone[] = [
    {id: 1, nome: 'Clone 01', idade: '23', dataCriacao:'16/03/1994', adicionais:'braço mecânico, esqueleto reforçado,'},
    {id: 1, nome: 'Clone 01', idade: '23', dataCriacao:'16/03/1994', adicionais:'braço mecânico, esqueleto reforçado,'},
    {id: 1, nome: 'Clone 01', idade: '23', dataCriacao:'16/03/1994', adicionais:'braço mecânico, esqueleto reforçado,'}
  ];

  getClones(){
    return this.clones;
  }

  getClone(id: number){
    for (let i=0; i<this.clones.length; i++){
      let clone = this.clones[i];
      if (clone.id == id){
        return clone;
      }
    }
    return null;
  }

  constructor() { }

}
