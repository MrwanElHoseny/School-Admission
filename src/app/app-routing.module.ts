import { adminAuth } from './services/admin-auth.service';
import { adminGuard } from './services/admin-guard.service';
import { UserSigninComponent } from './user/user-signin/user-signin.component';
import { ScoreComponent } from './admin/score/score.component';
import { ApplicantReportComponent } from './applicant-report/applicant-report.component';
import { SetDocumentsComponent } from './admin/admission-management/set-documents/set-documents.component';
import { EditAdmissionComponent } from './admin/admission-management/edit-admission/edit-admission.component';
import { OpenAdmissionComponent } from './admin/admission-management/open-admission/open-admission.component';
import { ApplicantsInterviewComponent } from './admin/applicants-interview/applicants-interview.component';
import { InterviewCriteriaComponent } from './admin/interview-criteria/interview-criteria.component';
import { ViewApplicantsComponent } from './admin/view-applicants/view-applicants.component';
import { AdmissionManagementComponent } from './admin/admission-management/admission-management.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { NbeComponent } from './user/admission/payment/nbe/nbe.component';
import { FawryComponent } from './user/admission/payment/fawry/fawry.component';
import { CreditComponent } from './user/admission/payment/credit/credit.component';
import { PaymentComponent } from './user/admission/payment/payment.component';
import { DocumentsComponent } from './user/admission/documents/documents.component';
import { MedicalComponent } from './user/admission/medical/medical.component';
import { SiblingsComponent } from './user/admission/siblings/siblings.component';
import { EmergencyComponent } from './user/admission/emergency/emergency.component';
import { ParentsComponent } from './user/admission/parents/parents.component';
import { StudentComponent } from './user/admission/student/student.component';
import { AdmissionComponent } from './user/admission/admission.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdmissoinDetailsComponent } from './user/admission/admissoin-details/admissoin-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/applicant/home", pathMatch: "full" },
  {
    path: "applicant", component: UserComponent, children: [
      { path: 'home', component: WelcomeComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'admission/student', component: StudentComponent },
      { path: 'admission/parents', component: ParentsComponent },
      { path: 'admission/admissionDetails', component: AdmissoinDetailsComponent },
      { path: 'admission/emergency', component: EmergencyComponent },
      { path: 'admission/siblings', component: SiblingsComponent },
      { path: 'admission/medical', component: MedicalComponent },
      { path: 'admission/documents', component: DocumentsComponent },
      {
        path: 'admission/payment', component: PaymentComponent, children: [
          { path: 'credit', component: CreditComponent },
          { path: 'fawry', component: FawryComponent },
          { path: 'nbe', component: NbeComponent }
        ]
      },
      { path: 'signIn', component: UserSigninComponent },
      { path: 'admission/applicationReport', component: ApplicantReportComponent }
    ]
  },
  {
    path: "admin", canActivateChild: [], component: AdminComponent, children: [
      { path: '', redirectTo: 'admissionManagement', pathMatch: 'full' },
      { path: 'admissionManagement', component: AdmissionManagementComponent },
      { path: 'admissionManagement/openAdmission', component: OpenAdmissionComponent },
      { path: 'admissionManagement/editAdmission', component: EditAdmissionComponent },
      { path: 'admissionManagement/setDocuments', component: SetDocumentsComponent },
      { path: 'viewApplicants', component: ViewApplicantsComponent },
      { path: 'interviewCriteria', component: InterviewCriteriaComponent },
      { path: 'applicantsInterview', component: ApplicantsInterviewComponent },
      { path: 'viewApplicants/applicant/:id', component: ApplicantReportComponent },
      { path: 'applicantsInterview/score/:id', component: ScoreComponent }
    ]
  },
  {
    path: "admin/signin", component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
