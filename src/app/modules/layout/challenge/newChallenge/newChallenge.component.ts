import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Challenge } from '../../../../models/challenge';

@Component({
    selector: 'app-newchallenge',
    templateUrl: './newChallenge.component.html',
    styleUrls: ['./newChallenge.component.css']
})
export class NewChallengeComponent implements OnInit{

    constructor(
        private afs: AngularFirestore
    )
    {}

    ngOnInit(){
        this.challengeCollection = this.afs.collection<Challenge>('challenges');
    }

    private challengeCollection: AngularFirestoreCollection<Challenge>;
    name: string;
    description: string;
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeyCodes: number[] = [ENTER, COMMA];
    tags: string[] = [
        "example",
        "test"
    ];

    add(event: MatChipInputEvent) {
        const input = event.input;
        const value = event.value;

        if((value || '').trim()) {
            this.tags.push(value);
        }

        if(input) {
            input.value = '';
        }
    }

    remove(t: string) {
        const index = this.tags.indexOf(t);

        if(index >= 0 ){
            this.tags.splice(index, 1);
        }
    }

    createChallenge(){
        if(this.name && this.description){
            const id = this.afs.createId();
            const newChallenge = new Challenge;
            newChallenge.name = this.name;
            newChallenge.description = this.description;
            newChallenge.tags = this.tags;
            this.challengeCollection.doc(id).set(Object.assign({}, newChallenge)).then(
                resolve => {
                    console.log("item added")
                },
                reject => {
                    console.log("something went wrong")
                }
            );
        }
    }


    
}