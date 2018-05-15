import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import { EmailPasswordCredentials } from '../models/emailPasswordCredentials';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CustomUser } from '../models/user';
import { Challenge } from '../models/challenge';
import { ChallengeDay } from '../models/challenge_day';

//User Interface
class User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  challenges_day? : Object[]
}


@Injectable()
export class AuthService{

  user: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { 
    this.user = this.afAuth.authState
      .switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`user/$user.uid`).valueChanges()
        } else {
          Observable.of(null)
        }
      })
  }

  getAuthState(){
    
  }

  private oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  emailSignUp(credentials: EmailPasswordCredentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((user) => {
        console.log("success create");
      })
  }

  loginWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.oAuthLogin(provider);
  }

  signOut(){
    this.afAuth.auth.signOut();
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);

    let c : Challenge = new Challenge;
    c.description = "hallo";
    c.name = "test";

    let ccc : ChallengeDay = {
      challenge : Object.assign({},c),
      day : 1
    }
    
    let cc : ChallengeDay[] = new Array<ChallengeDay>();
    cc.push(Object.assign({},ccc));

    const temp = cc.map((obj) => {return Object.assign({},obj)});

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName : user.displayName || 'nameless',
      photoURL : user.photoURL || 'test',
      challenges_day: temp || null
    }

    return userRef.set(Object.assign({},data));
  }

}
