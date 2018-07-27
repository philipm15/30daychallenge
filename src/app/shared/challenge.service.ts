import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class ChallengeService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllChallenges(){
    
  }

}
