import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-newchallenge',
    templateUrl: './newChallenge.component.html',
    styleUrls: ['./newChallenge.component.css']
})
export class NewChallengeComponent {

    constructor(
        public dialog: MatDialog
    )
    {}

    openDialog() {
        const dialogRef = this.dialog.open(NewChallengeComponent, {
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(
            result => {
                console.log("dialog closed");
            }
        )
    }

    
}