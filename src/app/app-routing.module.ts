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
      }
    ]
  },

  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
