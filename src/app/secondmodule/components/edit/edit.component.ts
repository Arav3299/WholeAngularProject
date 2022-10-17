import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hii='aravindh'

  

  user:any;
  editform:FormGroup;
  submitted=false;
  ngOnInit(): void {
  
   
    
  
  }

  constructor(private formBuilder : FormBuilder,private navi :Router) {
    this.user=history.state.data; 
    console.log(this.user);
    this.editform= this.formBuilder.group({
      id:[this.user?this.user.id:'',[Validators.required]],
      name: new FormControl(this.user?this.user.firstName:'',[Validators.required]),
      age:[this.user?this.user.age:'',[Validators.required]],
      gender:[this.user?this.user.gender:'',[Validators.required]],
      phone:[this.user?this.user.phone:'',[Validators.required]],
      email:[this.user?this.user.email:'',[Validators.required,Validators.email]],
    })
  }

  get id(){
    return this.editform.get('id')
  }

  get name(){
    return this.editform.get('name')
  }

  get age(){
    return this.editform.get('age')
  }
  get gender(){
    return this.editform.get('gender')
  }
  get phone(){
    return this.editform.get('phone')
  }
  get email(){
    return this.editform.get('email')
  }

  submit(){
    this.submitted=true;
    if(this.editform.valid){
      alert("Form is submitted...")
      this.navi.navigate(['gotoadmin'])
    }
  }




}
