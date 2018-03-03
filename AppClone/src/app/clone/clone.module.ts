import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
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
    FormsModule,
    CloneRoutingModule
    
  ],
  providers: [CloneService],
})

export class CloneModule { }
