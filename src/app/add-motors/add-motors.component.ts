import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motard } from '../model/Motard';
import { Motor } from '../model/Motor';
import { MotorService } from '../services/motor.service';

@Component({
  selector: 'app-add-motors',
  templateUrl: './add-motors.component.html',
  
})
export class AddMotorsComponent implements OnInit {

  newMotor = new Motor();
  newMotard = new Motard();
  message!: string;

  constructor(private motorService : MotorService, private router :Router) { }

  ngOnInit(): void {
  }
  
  addMotor(){
    this.motorService.ajouterMoto(this.newMotor)
    .subscribe(moto => {
    console.log(moto);
    });
    this.router.navigate(['motors']);
    }
}
/*
  addMotor(): void {
    //console.log(this.newMotor);
    this.motorService.ajouterMotor(this.newMotor);
    this.message = "Motor "+ this.newMotor.nomMotor + " ajouté avec succés";
    }
*/