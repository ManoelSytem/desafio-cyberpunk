import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


const appRoutes: Routes = [
   { path:'', component: InicioComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
   })
   

export class AppRoutingModule {}