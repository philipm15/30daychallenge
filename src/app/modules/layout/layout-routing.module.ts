import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { NewChallengeComponent } from './challenge/newChallenge/newChallenge.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ChallengeComponent
      },
      {
        path: 'user',
        component: UserProfileComponent
      },
      {
        path: 'newchallenge',
        component: NewChallengeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
