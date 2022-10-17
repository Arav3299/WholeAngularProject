import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  
data:any;
 
constructor(private http : HttpClient) { }
  url='https://dummyjson.com/products';

  getAllProducts(){
       return this.http.get(this.url);
  }
  
  getAllUsers(){
    return this.http.get('https://dummyjson.com/users');
  }
}
