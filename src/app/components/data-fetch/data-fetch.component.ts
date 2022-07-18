import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/service/data-fetch.service';

@Component({
  selector: 'app-data-fetch',
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.css']
})
export class DataFetchComponent implements OnInit {

  posts:any[]=[]

  constructor(private datafetch: DataFetchService) {

  }
  
  ngOnInit(){
    this.get()

  }

  get(){
    this.datafetch.getPosts().subscribe((response)=>{
        
          this.posts=response;
          console.log(this.posts)
          
        }) 
    
  }
  

}
