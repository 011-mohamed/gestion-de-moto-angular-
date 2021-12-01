import { Injectable } from '@angular/core';
import { Motor } from '../model/Motor';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept-Language': 'application/json',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJleHAiOjE2MzgzODcyMTR9.DF78RG7TVZxNvXY-35vTEibNYe3blv9riiR8WluDBXs',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class MotorService {
  
  apiURL: string = 'http://localhost:8080/motos/api';
  constructor(private http: HttpClient) {
    
  }
  listeMoto(): Observable<Motor[]> {
    return this.http.get<Motor[]>(this.apiURL, httpOptions);
  }

  ajouterMoto(moto: Motor): Observable<Motor> {
    return this.http.post<Motor>(this.apiURL, moto, httpOptions);
  }

  supprimerMoto(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterMotor(id: number): Observable<Motor> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Motor>(url,httpOptions);
  }

  updateMoto(m: Motor): Observable<Motor> {
    return this.http.put<Motor>(this.apiURL, m, httpOptions);
  }

}





  /*
  ajouterMotor(motor : Motor): void{
    this.motors.push(motor);
  }
  supprimerMotor( moto: Motor){
    //supprimer le Motor moto du tableau Motors
    const index = this.motors.indexOf(moto, 0);
    if (index > -1) {
    this.motors.splice(index, 1);
    }
    //ou Bien
    /* this.Motors.forEach((cur, index) => {
    if(moto.idMotor === cur.idMotor) {
    this.Motors.splice(index, 1);
    }
    }); 
    }
    consulterMotor(id:number): Motor{
      this.moto= this.motors.find(p => p.idMotor == id) || this.moto;
      return this.moto;
      }
      trierMotor(){
        this.motors = this.motors.sort((n1,n2) => {
        if (n1.idMotor > n2.idMotor) {
        return 1;
        }
        if (n1.idMotor < n2.idMotor) {
        return -1;
        }
        return 0;
        } );
        }
    updateMotor(m:Motor): void
    {
      
      this.supprimerMotor(m);
      this.ajouterMotor(m);
      this.trierMotor();
      
    }*/
  /*
      this.supprimerMotor(m);
      this.ajouterMotor(m);
      this.trierMotor();*//*
    this.motors = [
      {idMotor : 1, nomMotor : "XTX 660", prixMotor : 3000.600, dateCreation : new Date("01/14/2011")},
      {idMotor : 2, nomMotor : "Z1000-SM", prixMotor : 450, dateCreation : new Date("12/17/2010")},
      {idMotor : 3, nomMotor :"SMF-550", prixMotor : 900.123, dateCreation : new Date("02/20/2020")}
    ];*//*motors: Motor[] = [];
  moto! : Motor*/