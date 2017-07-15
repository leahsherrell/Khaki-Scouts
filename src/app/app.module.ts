import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ScoutsComponent } from './scouts/scouts.component';
import { ScoutDetailComponent } from './scout-detail/scout-detail.component';
import { MasterComponent } from './master/master.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditScoutComponent } from './edit-scout/edit-scout.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    AboutComponent,
    ScoutsComponent,
    ScoutDetailComponent,
    MasterComponent,
    EditScoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
