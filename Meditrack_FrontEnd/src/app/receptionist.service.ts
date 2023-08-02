/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  constructor() { }
}
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receptionist } from './receptionist';
import { AppointmentRecord } from './appointment-record';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  
  private baseURL1 = "http://localhost:8080/MediTrackProject1";
  
  constructor(private httpClient: HttpClient) { }

  ReceptionistLogin(receptionist2: Receptionist): Observable<Object> {
    var ReceptionistSR = this.httpClient.post(`${this.baseURL1}/${"Receptionistlogin"}`, receptionist2);
    console.log(ReceptionistSR);
    return ReceptionistSR;
  }
 
  getAppointmentDetails(receptionistId: number): Observable<AppointmentRecord[]> {
    return this.httpClient.get<AppointmentRecord[]>(`${this.baseURL1}/${"AppoinmentDetails"}/${receptionistId}`);
  }
  //Get Entire Requested Status Rows from Appointment Record table
  getRequestedAppointmentDetails(receptionistId: number): Observable<AppointmentRecord[]> {
    return this.httpClient.get<AppointmentRecord[]>(`${this.baseURL1}/${"RequestedAppoinmentDetails"}/${receptionistId}`);
  }

  getReceptionistDetails(receptionistId: number): Observable<Receptionist> {
    return this.httpClient.get<Receptionist>(`${this.baseURL1}/${"ReceptionistDetails"}/${receptionistId}`)
  }

  getDoctorDetails(receptionistId: number): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL1}/${"DoctorDetails"}/${receptionistId}`);

  }

  deleteRecord(recordId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL1}/${"DeleteRecord"}/${recordId}`);
  }

  //Get Particular single Row from Appointment Record Table 
  getAppointmentSDetails(recordId: number): Observable<AppointmentRecord> {
    return this.httpClient.get<AppointmentRecord>(`${this.baseURL1}/${"getAppointmentRecords"}/${recordId}`);
  }

  updateAppointmentSDetails(recordId: number, appointmentrecord: AppointmentRecord): Observable<Object> {
    return this.httpClient.put(`${this.baseURL1}/${"updateAppointmentRecord"}/${recordId}`, appointmentrecord);
  }

  getDoctorSDetails(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL1}/${"getDoctorDetails"}/${doctorId}`);
  }

  AppointmentConfirmationEmail(recordId: number, appointmentrecord: AppointmentRecord): Observable<AppointmentRecord> {
    return this.httpClient.post<AppointmentRecord>(`${this.baseURL1}/${"sendEmail"}/${recordId}`, appointmentrecord);
  }

  receptionistCheckEmail(recepts: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${this.baseURL1}/${"/checkReceptionistEmail"}`, recepts);
  }

  receptionistForgotPassword(recepts: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${this.baseURL1}/${"sendReceptPasswordByEmail"}`, recepts);
  }

  checkReceptEmailPass(receptionist: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${this.baseURL1}/${"checkReceptEmailPass"}`, receptionist);
  }

  changeReceptPass(receptionist: Receptionist): Observable<Receptionist> {
    return this.httpClient.post<Receptionist>(`${this.baseURL1}/${"changeReceptPass"}`, receptionist);
  }


}