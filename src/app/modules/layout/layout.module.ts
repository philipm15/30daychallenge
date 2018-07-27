import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MaterialModule } from '../../material.module';
import { ChallengeComponent } from './challenge/challenge.component';
import { NewChallengeComponent } from './challenge/newChallenge/newChallenge.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent, 
    UserProfileComponent,
    ChallengeComponent,
    NewChallengeComponent
  ]
})
export class LayoutModule { }
