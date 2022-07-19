import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/Tasks'
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class TaskService {

private url="http://localhost:5000/task"

  constructor(private http:HttpClient){}

  getTasks():Observable<Task[]>{

      return this.http.get<Task[]>(this.url)
      

  }
}

