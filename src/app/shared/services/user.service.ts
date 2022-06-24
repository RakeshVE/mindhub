import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseAPIurl: string;
  constructor(private httpClient:HttpClient) { 
    this.baseAPIurl=environment.apiUrl
  }

  GetUser(data:any): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseAPIurl + 'api/Users');
  }
}
