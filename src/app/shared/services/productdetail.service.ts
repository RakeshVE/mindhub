import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Bookdetail } from '../model/bookdetail';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailService {

  baseAPIurl: string;
  constructor(private httpClient:HttpClient) { 
    this.baseAPIurl=environment.apiUrl
  }

  // GetBookdetail(data:any): Observable<Bookdetail[]> {
  //   debugger
  //   return this.httpClient.get<Bookdetail[]>(this.baseAPIurl + 'api/Books/GetBookById?id='+data);
  //   debugger
  // }
  GetBookdetail(object:any) {
    debugger
    return this.httpClient.get(this.baseAPIurl + "api/Books/GetBookById?id="+object);
  }
  GetBookImage(object:any) {
    debugger
    return this.httpClient.get(this.baseAPIurl + "api/Books/GetBookImage?bookId="+object);
  }
}
