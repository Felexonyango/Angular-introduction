import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  myform: FormGroup; 

  ngOnInit(): void {
    this.myform =new FormGroup({
      'name':new FormControl( null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null, Validators.required),
      'message':new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.myform.value)
     this.myform.reset()

  }
}
