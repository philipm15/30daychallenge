import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router : Router
  ) {
   }

  ngOnInit() {
  }

  googleLogin(){
    this.authService.loginWithGoogle().then(
      (success) => {
        this.router.navigateByUrl('app');
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
