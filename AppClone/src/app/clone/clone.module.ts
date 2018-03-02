import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloneComponent } from './clone.component';
import { CloneRoutingModule } from './clone.routing.module';
import { CloneFormsComponent } from './clone-forms/clone-forms.component';
import { CloneDetalheComponent } from './clone-detalhe/clone-detalhe.component';
import { CloneService } from './clone.service';


@NgModule({
  declarations: [
    CloneComponent,
    CloneFormsComponent,
    CloneDetalheComponent,
   
  ],
  imports: [CommonModule,
    CloneRoutingModule
  ],
  providers: [CloneService],
})

export class CloneModule { }
