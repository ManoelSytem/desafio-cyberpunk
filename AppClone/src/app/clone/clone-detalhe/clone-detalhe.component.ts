import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Clone } from '../clone';
import { CloneService } from './../clone.service';



@Component({
  selector: 'app-clone-detalhe',
  templateUrl: './clone-detalhe.component.html',
  styleUrls: ['./clone-detalhe.component.css']
})
export class CloneDetalheComponent implements OnInit {

  clone: Clone;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: CloneService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.clone = this.alunosService.getClone(id);
      }
    );
  }

  editarClone(){
    this.router.navigate(['/clone', this.clone.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
