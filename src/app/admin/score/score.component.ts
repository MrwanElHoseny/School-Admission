import { admin } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { submission } from './../../services/submission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [
    submission
  ]
})
export class ScoreComponent implements OnInit {

  constructor(public submission: submission,
    public route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private admin: admin) {
    this.submission.applicantID = route.snapshot.params['id'];
    this.submission.getApplicantData(this.submission.applicantID);
  }


  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    let studentScore = form.value;
    this.http.post(this.admin.baseUrl + '/Admin/' + this.submission.applicantID + '/AddInterviewScore', studentScore, { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          window.alert("Student Scored Successfully")
          this.router.navigate(['admin', 'admissionManagement'])
        } else {
          window.alert("Error scoring student")
        }
      }
    )
  }
  onBack() {
    this.router.navigate(['../../', 'applicantsInterview'], { relativeTo: this.route })
  }

}
