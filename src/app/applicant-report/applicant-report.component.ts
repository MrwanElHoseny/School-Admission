import { admin } from './../services/admin.service';
import { NgForm } from '@angular/forms';
import { adminAuth } from './../services/admin-auth.service';
import { HttpClient } from '@angular/common/http';
import { submission, applicantData } from './../services/submission.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-applicant-report',
  templateUrl: './applicant-report.component.html',
  styleUrls: ['./applicant-report.component.css'],
  providers: [
    submission
  ]
})
export class ApplicantReportComponent implements OnInit {

  studentPhoto;
  birthCertificate;
  parentID;
  IR;
  healthReport;
  applicantID;

  constructor(public router: Router,
    public route: ActivatedRoute,
    public submission: submission,
    private http: HttpClient,
    public admin: adminAuth,
    private adminService: admin,
    private changeDetector: ChangeDetectorRef
  ) {
    this.submission.applicantID = this.route.snapshot.params['id'];
    this.submission.getApplicantData(this.submission.applicantID);
  }

  ngOnInit(): void {
  }

  accept(id: string) {
    this.http.get(this.adminService.baseUrl + '/Admin/' + this.applicantID + '/ApplicantAcception', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          window.alert("Applicant Accepted")
          this.router.navigate(['admin', 'admissionManagement'])
        } else {
          console.log("Error accepting applicant")
        }
      }
    )
  }
  Decline(form: NgForm) {
    console.log(form.value.reason)
    this.http.post(this.adminService.baseUrl + '/Admin/' + this.applicantID + '/ApplicantDeclination', form.value.reason, { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log('applicant declined successfully');
          window.alert('applicant declined');
          this.router.navigate(['admin', 'admissionManagement'])
        } else {
          console.log('error declining applicant')
        }
      }
    )
  }

  setInterview() {
    this.http.get(this.adminService.baseUrl + '/Admin/' + this.applicantID + '/ApplicantInterviewSetting', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          window.alert('Applicant interview set')
          this.router.navigate(['Admin', 'admissionManagement'])
        }
      }
    )
  }

}
