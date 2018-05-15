import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from './shared/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  challengesRef : AngularFirestoreCollection<any>;
  challenges$ : Observable<any[]>;

  constructor(
    private auth: AuthService,
    public db: AngularFirestore
  ){}

  ngOnInit(){
    this.challengesRef = this.db.collection('challenges');
    this.challenges$ = this.challengesRef.valueChanges();
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

}
