import { Component, OnInit } from '@angular/core';
import { CloneService } from './clone.service';

@Component({
  selector: 'app-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['./clone.component.css']
})
export class CloneComponent implements OnInit {

  private clones: any[] = [];

  constructor(private alunosService: CloneService) { }

  ngOnInit() {
    this.clones = this.alunosService.getClones();
  }
 
}
