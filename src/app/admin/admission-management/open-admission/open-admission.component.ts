import { admin } from './../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-admission',
  templateUrl: './open-admission.component.html',
  styleUrls: ['./open-admission.component.css']
})
export class OpenAdmissionComponent implements OnInit {

  periodOpened = false;
  loading = false;

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  todayObj = {
    day: +this.dd,
    month: +this.mm,
    year: this.yyyy
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private admin: admin) {

    http.get<boolean>(admin.baseUrl + '/Admin/CheakAdmissionPeriod', { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          console.log('check admission succesfull');
          this.periodOpened = res.body;
        } else {
          console.log('check admission period failed')
        }
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
    let newCriteria = form.value;
    newCriteria.StartDate = this.admin.formatDate(newCriteria.StartDate);
    newCriteria.EndDate = this.admin.formatDate(newCriteria.EndDate);

    this.http.post(this.admin.baseUrl + '/Admin/AdmissionPeriod', newCriteria, { observe: 'response' }).subscribe(
      res => {
        this.loading = false;
        if (res.ok) {
          console.log("new criteria posted succesfully");
          this.router.navigate(['../'], { relativeTo: this.route });
        } else {
          console.log('error posting new criteria');
        }
      }, err => {
        this.loading = false;
        console.log("Can't reach end point")
      }
    )
  }

}
