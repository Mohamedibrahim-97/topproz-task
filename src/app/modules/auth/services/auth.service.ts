import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  login (body : any) {
    return this.http.post('https://dummyjson.com/auth/login', body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json' )
    })
  }
}
