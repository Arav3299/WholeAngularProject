import { LoaderService } from './../../../loader/loader.service';
import { CommonserviceService } from './../../../service/commonservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service :CommonserviceService,private navi : Router,private loader : LoaderService) { }

  ngOnInit(): void {
    
    this.getAll();
  }

  name ="home";

  log=true;
  object:any;
  prod:any;

  getAll(){
    this.service.getAllProducts().subscribe({
      next: (data) => {
        console.log(data)
        this.prod=data;
      },
      error: (e) => {
        console.error(e)
      },
      complete: () => 
      {
        console.info('subscription completed') 
      }
    });
  }

  route(product:any){
    
      this.service.data=product;
      this.navi.navigateByUrl('gotofirstedit');
     
   
  }

  toadminpage(){
    this.navi.navigate(['gotoadmin']);
  }

}
