import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

    isLoggedIn: Subject<any> = new Subject();

    constructor(private http: HttpClient) { }

    login(data){
        const url = `${environment.api_url}login`;

        return this.http.post(url, data)
            .pipe(
                map((res) => {
                    return res;
                }))

    }

}