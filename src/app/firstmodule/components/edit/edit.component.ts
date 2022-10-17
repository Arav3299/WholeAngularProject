import { CommonserviceService } from './../../../service/commonservice.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/validators/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product:any;
  
  submitted=false;
   editform:FormGroup;
   private el!: ElementRef
   
  ngOnInit(){

    
    
    
  }

  constructor(private service:CommonserviceService,private formBuilder : FormBuilder,private navi: Router) { 

    this.product=this.service.data;
    console.log(this.product)
    this.editform = this.formBuilder.group({

      id:[this.product?this.product.id:'',[Validators.required]],
      title: new FormControl(this.product?this.product.title:'',[Validators.required,forbiddenNameValidator(/binladen/i)]),
      brand:[this.product?this.product.brand:'',[Validators.required]],
      rating:[this.product?this.product.rating:'',[Validators.required]],
      category:[this.product?this.product.category:'',[Validators.required]],
      price:[this.product?this.product.price:'',[Validators.required]],
      discount:[this.product?this.product.discountPercentage  :'',[Validators.required]]
    
    });

  }

  get registerFormControl(){
    return this.editform.controls;
  }

  get id(){
    return this.editform.get('id');
  }

  get discount(){
    return this.editform.get('discount');
  }

  get title(){
    return this.editform.get('title');
  }

  get brand(){
    return this.editform.get('brand');
  }

  get rating(){
    return this.editform.get('rating');
  }

  get category(){
    return this.editform.get('category');
  }

  get price(){
    return this.editform.get('price');
  }




  submit(){
this.submitted=true;



if(this.editform.valid){
  alert("Your form is submitted ...")
  this.navi.navigate(['']);
}
 }



 




}
