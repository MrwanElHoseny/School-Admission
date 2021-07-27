import { documentObj } from './../interface/document';
import { admin } from './../services/admin.service';
import { NgForm } from '@angular/forms';
import { adminAuth } from './../services/admin-auth.service';
import { HttpClient } from '@angular/common/http';
import { submission, applicantData } from './../services/submission.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-applicant-report',
  templateUrl: './applicant-report.component.html',
  styleUrls: ['./applicant-report.component.css'],
})
export class ApplicantReportComponent implements OnInit {


  adminPage: boolean;

  documentList: documentObj[] = [
    {
      Name: 'photo',
      Size: '3',
      Description: 'ay 7aga'
    }, {
      Name: 'ID',
      Size: '3',
      Description: 'ay 7aga'
    },
    {
      Name: 'IR',
      Size: '3',
      Description: 'ay 7aga'
    },
    {
      Name: 'DR',
      Size: '3',
      Description: 'ay 7aga'
    }

  ]
  documentBlobs: {
    DocumentName: string,
    Copy: string
  }[] = [];


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
    /////

    this.http.get<documentObj[]>(this.adminService.baseUrl + '/Admin/DocumentCriteria', { observe: 'response' }).subscribe(
      res => {
        console.log("Required documents obtained successfully")
        this.documentList = res.body;

        //get blobs
        this.http.get<{ DocumentName: string, Copy: string }[]>(this.submission.baseUrl + '/Admin/' + this.submission.applicantID + '/Documents', { observe: 'response' }).subscribe(
          res => {
            if (res.ok) {
              this.documentBlobs = res.body;
            } else {
              console.log("Error retreiving document links")
            }
          }, err => {
            console.log("Can't reach end point")
          }
        )

      }, err => {
        console.log("Can't reach end point")
      }
    )

    this.http.get<{ DocumentName: string, Copy: string }[]>(this.submission.baseUrl + '/Admin/' + this.submission.applicantID + '/Documents', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log(res.body);

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

  openSP(blob: string) {
    var image = new Image();




  }

  docChoosen(event: Event) {
    let choosenName = (event.target as HTMLInputElement).value

    var image = new Image();

    image.src = this.documentBlobs[this.documentBlobs.findIndex(
      _blob => {
        return _blob.DocumentName == choosenName;
      }
    )].Copy;
    var w = window.open("")
    w.document.write(image.outerHTML)
  }

}
