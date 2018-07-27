import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Challenge } from '../../../models/challenge';
import { NewChallengeComponent } from './newChallenge/newChallenge.component';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
    //@ViewChild

    constructor(
        private afs: AngularFirestore
    ){}

    private challengeCollection: AngularFirestoreCollection<Challenge>;
    challenges: Observable<Challenge[]>;

    ngOnInit(){
        this.challengeCollection = this.afs.collection<Challenge>('challenges');
        this.challenges = this.challengeCollection.valueChanges();
    }

    newChallenge(){

    }
}