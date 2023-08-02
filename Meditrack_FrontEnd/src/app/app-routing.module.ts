import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientAuthenticationComponent } from './patient-authentication/patient-authentication.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientMedicalRComponent } from './patient-medical-r/patient-medical-r.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PViewMedicalReportComponent } from './pview-medical-report/pview-medical-report.component';
import { PCreateMedicalReportComponent } from './pcreate-medical-report/pcreate-medical-report.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientHomePageComponent } from './patient-home-page/patient-home-page.component';
import { AddMedicineDetailsComponent } from './add-medicine-details/add-medicine-details.component';
import { UpdateMedicineRecordComponent } from './update-medicine-record/update-medicine-record.component';
import { ReqForAppointmentComponent } from './req-for-appointment/req-for-appointment.component';
import { PUpdateMedicalReportComponent } from './pupdate-medical-report/pupdate-medical-report.component';
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
import { ReceptionistDetailsComponent } from './receptionist-details/receptionist-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
const routes: Routes = [
  {path: 'PAuthentication', component:PatientAuthenticationComponent},
  {path: 'PMedicalReport', component: PatientMedicalRComponent},
  {path: 'updateMedicalR/:reportId', component: PUpdateMedicalReportComponent},
  {path: '', redirectTo: 'HomePage', pathMatch: 'full'},
  {path: 'PLogin', component: PatientLoginComponent },
  {path: 'PRegistration', component: PatientRegistrationComponent},
  {path: 'PViewMedicalReport/:pid2', component: PViewMedicalReportComponent},
  {path: 'PCreateMedicalReport/:pid2', component: PCreateMedicalReportComponent},
  {path: 'HomePage', component: HomeComponent},
  {path: 'PatientHomePage/:pid2', component:PatientHomePageComponent},
  {path: 'addMedicine/:pid2', component:AddMedicineDetailsComponent},
  {path: 'updateSmedicineR/:medicineId', component:UpdateMedicineRecordComponent},
  {path: 'reqAppointment/:pid2', component:ReqForAppointmentComponent},
  {path: 'PAuthenticaticationKey', component:PatientAuthenticationKeyComponent},
  {path: 'PForgotPass', component:PatForgotPasswordComponent},
  {path: 'PChangePass', component:PatChangePasswordComponent},
  {path:'register-receptionist',component: RegisterReceptionistComponent},
  {path:'register-doctor',component: RegisterDoctorComponent},
  {path:'admin-login',component: LoginAdminComponent},
  { path: 'HomeRecept', component: HomeReceptComponent },
  { path: 'ForgotRecept', component: ReceptForgotpassComponent },
  { path: 'ChangeReceptPass', component: ReceptionistChangepassComponent },
  { path: 'AppointmentDetails/:receptionistId', component: AppoitmentDetailsComponent },
  { path: 'RequestedAppointmentDetails/:receptionistId', component: RequestedAppointmentsComponent },
  { path: 'updateAppointmentRecord/:recordId', component: UpdateAppointmentdetailsComponent },
  { path: 'LoginRecept', component: LoginReceptComponent },
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'NavBar', component: NavBarComponent },
  { path: 'doctors', component: DoctorDetailsComponent },
  { path: 'receptionist', component: ReceptionistDetailsComponent },
  { path: 'admin-home', component:AdminHomeComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
