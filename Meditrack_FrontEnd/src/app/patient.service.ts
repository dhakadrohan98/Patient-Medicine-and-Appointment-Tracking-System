import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { PPrescription } from './pprescription';
import { MedicalReport } from './medical-report';
import { AppointmentRecord } from './appointment-record';
import { Doctor } from './doctor';
import { Receptionist } from './receptionist';
 
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL="http://localhost:8080/MediTrackProject";
  private baseURL1="http://localhost:8080/MediTrack/MedicalReport";
  constructor(private httpClient: HttpClient) { }

  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${"PatientDetails"}`, patient);
  }

  //createMedicalReport(pid1:number,patient: Patient): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}/${"report1"}/${pid1}`, patient);
  //}
  getDoctorList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/${"doctorDetails"}`);
  }

  getReceptionistList(): Observable<Receptionist[]>{
    return this.httpClient.get<Receptionist[]>(`${this.baseURL}/${"receptionistDetails"}`);
  }
  
  getPatientById(pid2:number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${"getPatientById"}/${pid2}`);
  }

  createMedicalReport(ppid:number, medicalreport: MedicalReport): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${"createMedicalR"}/${ppid}`,medicalreport);
  }
   patientLogin(patient: Patient): Observable<Patient>{
    //console.log("====9999999999999999999===");
  var statusR= this.httpClient.post<Patient>(`${this.baseURL}/${"login"}`, patient);
   console.log(statusR);
  return statusR;
  
  }
  getMedicineDetails(pid1:number): Observable<PPrescription[]>{
    return this.httpClient.get<PPrescription[]>(`${this.baseURL1}/${"report"}/${pid1}`);
  }

  getMedicineDetails2(pid1:number): Observable<PPrescription[]>{
    return this.httpClient.get<PPrescription[]>(`${this.baseURL1}/${"report2"}/${pid1}`);
  }

  getMedicalReport(pid:number): Observable<MedicalReport>{
    return this.httpClient.get<MedicalReport>(`${this.baseURL1}/${"report1"}/${pid}`);
  }

  getMedicalReportByRepId(reportId:number): Observable<MedicalReport>{
    return this.httpClient.get<MedicalReport>(`${this.baseURL1}/${"report4"}/${reportId}`);
  }

  addMedicineDetails(ppid:number, pprescription: PPrescription): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${"addMedicine"}/${ppid}`,pprescription);
  }

  addMedicineDetails1(ppid:number, pprescription: PPrescription): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${"addMedicine1"}/${ppid}`,pprescription);
  }

  getSmedicineRecord(medicineId:number): Observable<PPrescription>{
    return this,this.httpClient.get<PPrescription>(`${this.baseURL1}/${"getSMedicineD"}/${medicineId}`);
  }

  updateSmedicineRecord(medicineId:number,pprescription: PPrescription): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${"updateMedicineR"}/${medicineId}`,pprescription);
  }

  DMedicineRecord(recordId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL1}/${"DMedicineRecord"}/${recordId}`);
  }

  DMedicineRecord1(medicineId: number,pid2:number,pprescription:PPrescription): Observable<Object> {
    console.log("222222222");
    return this.httpClient.put(`${this.baseURL1}/${"DMedicineRecord1"}/${medicineId}/${pid2}`,pprescription);
  }

  reqForAppointment(patientId:number, appointmentrecord: AppointmentRecord): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${"reqForAppointment"}/${patientId}`,appointmentrecord);
  }

  updateMedicalReport(reportId:number,medicalreport: MedicalReport): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${"updateMedicalReport"}/${reportId}`,medicalreport);
  }

  
}


