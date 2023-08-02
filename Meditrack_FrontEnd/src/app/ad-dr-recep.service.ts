import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { PPrescription } from './pprescription';
import { MedicalReport } from './medical-report';
import { AppointmentRecord } from './appointment-record';
import { Doctor } from './doctor';
import { Receptionist } from './receptionist';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdDrRecepService {
  private baseURL="http://localhost:8080/MediTrackProject1";
  constructor(private httpClient: HttpClient) { }

  createDoctor(doctor: Doctor):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${"registerdoctor"}`,doctor);
  }

  createReceptionist(receptionist: Receptionist):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${"receptionist"}`,receptionist);
  }

  adminLogin(admin: Admin): Observable<Object>{
    console.log("===============");
    var status= this.httpClient.post(`${this.baseURL}/${"LoginAdminPage"}`, admin);
  
    console.log(status);
  
  return status;
  
  }
}
