import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorsComponent } from './motors/motors.component';
import { AddMotorsComponent } from './add-motors/add-motors.component';
import { FormsModule } from '@angular/forms';
import { UpdateMotorComponent } from './update-motor/update-motor.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MotorsComponent,
    AddMotorsComponent,
    UpdateMotorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
