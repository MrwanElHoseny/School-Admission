import { submission } from './services/submission.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { AdmissionComponent } from './user/admission/admission.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './user/admission/student/student.component';
import { BarComponent } from './user/admission/bar/bar.component';
import { FormsModule } from '@angular/forms';
import { ParentsComponent } from './user/admission/parents/parents.component';
import { EmergencyComponent } from './user/admission/emergency/emergency.component';
import { SiblingsComponent } from './user/admission/siblings/siblings.component';
import { MedicalComponent } from './user/admission/medical/medical.component';
import { DocumentsComponent } from './user/admission/documents/documents.component';
import { PaymentComponent } from './user/admission/payment/payment.component';
import { AdmissoinDetailsComponent } from './user/admission/admissoin-details/admissoin-details.component';
import { CreditComponent } from './user/admission/payment/credit/credit.component';
import { FawryComponent } from './user/admission/payment/fawry/fawry.component';
import { NbeComponent } from './user/admission/payment/nbe/nbe.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { HomeComponent } from './admin/home/home.component';
import { AdmissionManagementComponent } from './admin/admission-management/admission-management.component';
import { ViewApplicantsComponent } from './admin/view-applicants/view-applicants.component';
import { InterviewCriteriaComponent } from './admin/interview-criteria/interview-criteria.component';
import { ApplicantsInterviewComponent } from './admin/applicants-interview/applicants-interview.component';
import { OpenAdmissionComponent } from './admin/admission-management/open-admission/open-admission.component';
import { EditAdmissionComponent } from './admin/admission-management/edit-admission/edit-admission.component';
import { SetDocumentsComponent } from './admin/admission-management/set-documents/set-documents.component'




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    UserComponent,
    AdminComponent,
    WelcomeComponent,
    AdmissionComponent,
    StudentComponent,
    BarComponent,
    ParentsComponent,
    EmergencyComponent,
    SiblingsComponent,
    MedicalComponent,
    DocumentsComponent,
    PaymentComponent,
    AdmissoinDetailsComponent,
    CreditComponent,
    FawryComponent,
    NbeComponent,
    SignInComponent,
    HomeComponent,
    AdmissionManagementComponent,
    ViewApplicantsComponent,
    InterviewCriteriaComponent,
    ApplicantsInterviewComponent,
    OpenAdmissionComponent,
    EditAdmissionComponent,
    SetDocumentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    submission
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
