import { CloneFormsComponent } from './clone-forms/clone-forms.component';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloneComponent } from './clone.component';
import { CloneDetalheComponent } from './clone-detalhe/clone-detalhe.component';


const cloneRoutes: Routes = [
   { path:'clone', component:CloneComponent, children:[
   { path:'novo', component:CloneFormsComponent},
   { path:':id', component:CloneDetalheComponent},
   { path:':id/editar', component:CloneDetalheComponent}
]}
];

@NgModule({
    imports: [RouterModule.forChild(cloneRoutes)],
    exports: [RouterModule]
   })
   

export class CloneRoutingModule {}