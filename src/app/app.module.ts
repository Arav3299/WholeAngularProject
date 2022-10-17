import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoaderComponent } from '../app/loader/loader.component';
import { Interceptor } from '../app/Interceptor/httpinterceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FirstmoduleModule,
    SecondmoduleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:Interceptor,
      multi:true
    }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
