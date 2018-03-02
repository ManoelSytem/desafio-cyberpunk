import { InicioComponent } from './inicio/inicio.component';
import { ModuleWithProviders } from '@angular/core';
import { CloneComponent } from './clone/clone.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
   { path:'clone', component: CloneComponent},
   { path:'', component: InicioComponent},
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(APP_ROUTES);