import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    model: any = {};
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit(){
        this.authenticationService.logout();
        this.returnUrl = '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data=>{
                    this.router.navigate([this.returnUrl]);
                }, 
                error => {
                    alert("You messed up");
                });
    }
}
