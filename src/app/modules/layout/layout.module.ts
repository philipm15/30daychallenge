import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MaterialModule } from '../../material.module';
import { ChallengeComponent } from './challenge/challenge.component';
import { NewChallengeComponent } from './challenge/newChallenge/newChallenge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent, 
    UserProfileComponent,
    ChallengeComponent,
    NewChallengeComponent
  ]
})
export class LayoutModule { }
