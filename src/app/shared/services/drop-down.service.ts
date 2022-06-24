import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Dropdown } from '../model/dropdown';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  baseAPIurl: string;
  constructor(private httpClient:HttpClient) { 
    this.baseAPIurl=environment.apiUrl
  }

  GetDropdown(data:any): Observable<Dropdown[]> {
    return this.httpClient.get<Dropdown[]>(this.baseAPIurl + 'api/DropDown');
  }
}
