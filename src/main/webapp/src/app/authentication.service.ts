import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


export class AuthenticationService {
    allow:Observable<boolean>;
    constructor(private http: HttpClient) { }
    
    login(username: string, password: string) {
        if(username=="admin" && password=="password"){ //TODO query a database api or something (and, return the observable FROM the database instead of this)
            this.allow = new Observable(observer => {
                observer.next(true);
                observer.complete()
            });
        }
        else{
            this.allow = new Observable(observer => {
                observer.next(false);
                observer.complete()
            });
        }
        return this.allow;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}