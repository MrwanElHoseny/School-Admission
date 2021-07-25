import { Router } from '@angular/router';
import { admin } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-interview-criteria',
  templateUrl: './interview-criteria.component.html',
  styleUrls: ['./interview-criteria.component.css']
})
export class InterviewCriteriaComponent implements OnInit {

  numOfApplicants = 0; //To be Get
  criteriaExists = false;

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  todayObj = {
    day: +this.dd,
    month: +this.mm,
    year: this.yyyy
  }

  constructor(private http: HttpClient,
    private admin: admin,
    private router: Router) {
    this.http.get<number>(this.admin.baseUrl + '/Admin/ApplicantsCount', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log('number of applicants retrieved successfully')
          this.numOfApplicants = res.body;
        }
        else {
          console.log('error obtaining number of applicants')
        }
      }
    )

    this.http.get<boolean>(this.admin.baseUrl + '/Admin/CheakInterviewCriteria', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log('Criteria exists checked successfully')
          this.criteriaExists = res.body;
        } else {
          console.log('Error checking for existing criteria')
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    let newCriteria = form.value;
    newCriteria.StartDate = this.admin.formatDate(newCriteria.StartDate);
    newCriteria.EndDate = this.admin.formatDate(newCriteria.EndDate);

    this.http.post(this.admin.baseUrl + '/Admin/InterviewCriteria', newCriteria, { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log("criteria posted successfully");
          this.router.navigate(['admin', 'admissionManagement'])
        }
        else {
          console.log('error adding criteria')
        }
      }
    )
  }



}
