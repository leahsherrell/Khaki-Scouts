import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ScoutsComponent } from './scouts/scouts.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    AboutComponent,
    ScoutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
