import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CloneComponent } from './clone/clone.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CloneComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
