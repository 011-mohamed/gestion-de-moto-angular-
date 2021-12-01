import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMotorsComponent } from './add-motors/add-motors.component';
import { MotorsComponent } from './motors/motors.component';
import { UpdateMotorComponent } from './update-motor/update-motor.component';

const routes: Routes = [
  {path : "motors" , component : MotorsComponent},
  {path : "add-motor" , component : AddMotorsComponent},
  {path : "" ,redirectTo : "motors", pathMatch : "full"},
  {path : "updateMotor/:id" , component : UpdateMotorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
