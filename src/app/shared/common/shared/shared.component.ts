import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent  {


  @Input() name:any;

  constructor() { }
 

}
