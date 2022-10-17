import { CommonserviceService } from './../../../service/commonservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   

   
  admin='admin';  
  currentRow:any;
  users:any;

  color : boolean = false;

  constructor(private service : CommonserviceService,private route : Router){}

  ngOnInit(){
    
    this.getAllUser();
    

  }
  
 

  getAllUser(){

    this.service.getAllUsers().subscribe((data: any)=>{
       this.users = data;
      //  this.users.users.map((r: any) =>{
      //   r.isActive = true;
      //   console.log(r);
      //  });
       
      console.log(data)
    },(err)=>{
      
      console.log(err)
    },()=>{
      console.log();
    })
  }
   
  gotosecondedit(user:any){

    this.route.navigate(['goto-second-edit'],{state:{data:user}})


  }

}
