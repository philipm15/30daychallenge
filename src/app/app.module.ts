import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

//environment
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthGuard } from './shared/auth.guard';
import { ChallengeService } from './shared/challenge.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    LoginModule,
    LayoutModule,
    AppRoutingModule,
    
  ],
  providers: [AuthService, AuthGuard, ChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
