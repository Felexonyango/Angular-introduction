import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Task } from '../model/Tasks'
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class TaskService {

private url="http://localhost:5000/task";



  constructor(private http:HttpClient){}



  getTasks():Observable<Task[]>{

      return this.http.get<Task[]>(this.url)
      

  }
  
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.url,task, {headers: new HttpHeaders({
      'content-type':'application/json'
    })})
  }

}

