import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpEventType } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientMedicalRComponent } from './patient-medical-r/patient-medical-r.component';
import { PatientAuthenticationComponent } from './patient-authentication/patient-authentication.component';
import { FormsModule } from '@angular/forms';
import { PUpdateMedicalReportComponent } from './pupdate-medical-report/pupdate-medical-report.component';
import { PViewMedicalReportComponent } from './pview-medical-report/pview-medical-report.component';
import { PCreateMedicalReportComponent } from './pcreate-medical-report/pcreate-medical-report.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientHomePageComponent } from './patient-home-page/patient-home-page.component';
import { AddMedicineDetailsComponent } from './add-medicine-details/add-medicine-details.component';
import { UpdateMedicineRecordComponent } from './update-medicine-record/update-medicine-record.component';
import { ReqForAppointmentComponent } from './req-for-appointment/req-for-appointment.component';
import { PatientAuthenticationKeyComponent } from './patient-authentication-key/patient-authentication-key.component';
import { PatForgotPasswordComponent } from './pat-forgot-password/pat-forgot-password.component';
import { PatChangePasswordComponent } from './pat-change-password/pat-change-password.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterReceptionistComponent } from './register-receptionist/register-receptionist.component';
import { LoginReceptComponent } from './login-recept/login-recept.component';
import { AppoitmentDetailsComponent } from './appoitment-details/appoitment-details.component';
import { HomeReceptComponent } from './home-recept/home-recept.component';
import { RequestedAppointmentsComponent } from './requested-appointments/requested-appointments.component';
import { UpdateAppointmentdetailsComponent } from './update-appointmentdetails/update-appointmentdetails.component';
import { ReceptionistChangepassComponent } from './receptionist-changepass/receptionist-changepass.component';
import { ReceptForgotpassComponent } from './recept-forgotpass/recept-forgotpass.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarRecepComponent } from './nav-bar-recep/nav-bar-recep.component';
import { ReceptionistDetailsComponent } from './receptionist-details/receptionist-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientLoginComponent,
    PatientMedicalRComponent,
    PatientAuthenticationComponent,
    PUpdateMedicalReportComponent,
    PViewMedicalReportComponent,
    PCreateMedicalReportComponent,
    HomeComponent,
    PageNotFoundComponent,
    PatientHomePageComponent,
    AddMedicineDetailsComponent,
    UpdateMedicineRecordComponent,
    ReqForAppointmentComponent,
    PatientAuthenticationKeyComponent,
    PatForgotPasswordComponent,
    PatChangePasswordComponent,
    LoginAdminComponent,
    RegisterDoctorComponent,
    RegisterReceptionistComponent,
    LoginReceptComponent,
    AppoitmentDetailsComponent,
    HomeReceptComponent,
    RequestedAppointmentsComponent,
    UpdateAppointmentdetailsComponent,
    ReceptionistChangepassComponent,
    ReceptForgotpassComponent,
    AboutUsComponent,
    NavBarComponent,
    NavBarRecepComponent,
    ReceptionistDetailsComponent,
    DoctorDetailsComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
