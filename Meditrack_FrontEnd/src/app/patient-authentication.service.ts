import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientAuthentication } from './patient-authentication';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientAuthenticationService {
  private baseURL="http://localhost:8080/MediTrackProject/authentication";
  constructor(private httpClient: HttpClient) { }

  checkMail(patient:Patient):Observable<PatientAuthentication>{
    console.log("service mail");
    return this.httpClient.post<PatientAuthentication>(`${this.baseURL}/${"checkMail"}`, patient);
  }

  patientAuth(patientauthentication: PatientAuthentication): Observable<PatientAuthentication>{
    console.log("====9999999999999999999===");
  var statusR1= this.httpClient.post<PatientAuthentication>(`${this.baseURL}/${"pauthentication"}`, patientauthentication);
   console.log(statusR1);
  return statusR1;
  }

  patientAuthKey(patientAuthentication: PatientAuthentication):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/${"pauthkey"}`,patientAuthentication);
  }

   sendKeyByMail(patientauthentication:PatientAuthentication): Observable<PatientAuthentication> {
    return this.httpClient.post<PatientAuthentication>(`${this.baseURL}/${"sendKeyByEmail"}/`, patientauthentication);
  }

  receivePasswordByMail(patient:Patient): Observable<PatientAuthentication> {
    return this.httpClient.post<PatientAuthentication>(`${this.baseURL}/${"sendPasswordByEmail"}/`, patient);
  }

  checkPatientEmailId(patient:Patient):Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseURL}/${"checkPatientEmail"}`, patient);

  }

  checkPEmailPass(patient:Patient):Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseURL}/${"checkPEmailPass"}`, patient);

  }

  changePPass(patient:Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseURL}/${"changePPass"}`, patient);
  }
   
}
