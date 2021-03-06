import { admin } from './../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admission',
  templateUrl: './edit-admission.component.html',
  styleUrls: ['./edit-admission.component.css']
})
export class EditAdmissionComponent implements OnInit {

  timeLeft = '';
  loading = false;
  periodOpened = true;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private admin: admin) {
    http.get<boolean>(admin.baseUrl + '/Admin/CheakAdmissionPeriod', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log('check admission succesfull');
          this.periodOpened = res.body;
          http.get(this.admin.baseUrl + '/Admin/PeriodLeft', { observe: 'response', responseType: 'text' }).subscribe(
            res => {
              if (res.ok) {
                console.log('period left obtained succesfully')
                this.timeLeft = res.body;
              }
              else {
                console.log('error obtaining time left')
              }
            }
          )
        } else {
          console.log('check admission period failed')
        }
      }, err => {
        console.log("Can't reach end point")
      }
    )

  }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    let requestString = {
      Hours: String(form.value.Hours),
      Days: String(form.value.Days)
    }

    this.http.post(this.admin.baseUrl + '/Admin/AdmissionPeriodExtension', requestString, { observe: 'response', }).subscribe(
      res => {
        this.loading = false;
        if (res.ok) {
          console.log('period extended successfully')
          window.alert("Admission period extended.")
          this.router.navigate(['../'], { relativeTo: this.route })
        } else {
          console.log('error extending period')
        }
      }, err => {
        this.loading = false;
        console.log("Can't reach end point")
      }
    )

  }

}
