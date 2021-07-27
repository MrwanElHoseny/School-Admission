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
})
export class ApplicantReportComponent implements OnInit {

  studentPhoto;
  birthCertificate;
  parentID;
  IR;
  healthReport;
  applicantID;

  adminPage: boolean;

  constructor(public router: Router,
    public route: ActivatedRoute,
    public submission: submission,
    private http: HttpClient,
    public admin: adminAuth,
    private adminService: admin,
    private changeDetector: ChangeDetectorRef
  ) {
    this.adminPage = (this.router.url.slice(0, 6) == '/admin')

    if (this.adminPage) {
      this.submission.applicantID = this.route.snapshot.params['id'];
      this.submission.getApplicantData(this.submission.applicantID);
    }

    this.http.get<{ DocumentName: string, Copy: string }[]>(this.submission.baseUrl + '/Admin/' + this.submission.applicantID + '/Documents', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log(res.body);

          this.studentPhoto = res.body[res.body.findIndex(
            obj => {
              return obj.DocumentName == 'StudentPhoto'
            }
          )].Copy;

          this.birthCertificate = res.body[res.body.findIndex(
            obj => {
              return obj.DocumentName == 'BC'
            }
          )].Copy;

          this.parentID = res.body[res.body.findIndex(
            obj => {
              return obj.DocumentName == 'ParentsID'
            }
          )].Copy;

          this.IR = res.body[res.body.findIndex(
            obj => {
              return obj.DocumentName == 'IR'
            }
          )].Copy;

          this.healthReport = res.body[res.body.findIndex(
            obj => {
              return obj.DocumentName == 'DR'
            }
          )].Copy;
        } else {
          console.log("Error retreiving document links")
        }
      }
    )
  }

  ngOnInit(): void {
  }

  accept(id: string) {
    this.http.get(this.adminService.baseUrl + '/Admin/' + this.submission.applicantID + '/ApplicantAcception', { observe: 'response' }).subscribe(
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
    let obj = {
      Reason: form.value.reason
    }

    this.http.post(this.adminService.baseUrl + '/Admin/' + this.submission.applicantID + '/ApplicantDeclination', obj, { observe: 'response', }).subscribe(
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
    this.http.get(this.adminService.baseUrl + '/Admin/' + this.submission.applicantID + '/ApplicantInterviewSetting', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          window.alert('Applicant interview set')
          this.router.navigate(['admin', 'admissionManagement'])
        }
      }
    )
  }

  openSP() {
    var image = new Image();
    image.src = this.studentPhoto;
    var w = window.open("")

    w.document.write(image.outerHTML)
  }

}
