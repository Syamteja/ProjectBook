import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http:HttpClient) { }

private _url="https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json"
getBooksData(){
  return this._http.get(this._url);
}
}
