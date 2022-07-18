import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
@Injectable({

  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http:HttpClient){}

  
  getPosts():Observable<Data[]>{
      return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
      
  }
  getPost():Observable<Data>{
    return this.http.get<Data>('https://jsonplaceholder.typicode.com/posts/1')
    
}
}
