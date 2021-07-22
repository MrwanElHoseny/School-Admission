import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-admission',
  templateUrl: './open-admission.component.html',
  styleUrls: ['./open-admission.component.css']
})
export class OpenAdmissionComponent implements OnInit {

  periodOpened: boolean;

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
    private route: ActivatedRoute) {
    //send request to period opened api
    //if opened then true else false
    this.periodOpened = true;

  }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
