import { ModuleWithProviders } from '@angular/core';
import { CloneComponent } from './clone/clone.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
   { path:'clone', component: CloneComponent}
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(APP_ROUTES);