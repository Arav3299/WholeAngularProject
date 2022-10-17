import { LoaderService } from './loader.service';
 

import { Component } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.css' ],
})
export class LoaderComponent {
 
  isLoading: Subject<boolean> = this.loader.isLoading;
  
  constructor( private loader : LoaderService) {
  }

  

  
}

