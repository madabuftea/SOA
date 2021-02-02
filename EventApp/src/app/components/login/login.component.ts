import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { Router } from '@angular/router';
import { AuthDataStorage } from 'src/app/security/auth-data-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  error = '';
  email: string;
  password: string;

  constructor(private service: LoginService,
    private router: Router,
    private authDataStorage: AuthDataStorage
  ) { }


  ngOnInit() {
  }

  logIn(): void {
    this.service.login(this.email, this.password).subscribe(
      response => {
        let jwtToken = response.headers.get('Authorization');
        console.log("jwt", jwtToken);
        this.authDataStorage.setJwtToken(jwtToken);
        this.service.getLoggedUser().subscribe(
          data => {
            let loggedUser: any = data;
            //console.log(loggedUser);
            this.authDataStorage.setLoggedUser(loggedUser);
            //this.goToDashboard();
            const role = this.authDataStorage.getUserRole();
            // if(role === "ADMIN")
              this.router.navigate(['/allevents']);
            // else
            //   this.router.navigate(['/events'])
          },
          err => {
            this.error = err;
          }
        );
      },
      err => {
        this.error = err;
        console.log(err);
      });
  }

  @HostListener('document:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.logIn();
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }

}
