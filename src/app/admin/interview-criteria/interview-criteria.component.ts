import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-criteria',
  templateUrl: './interview-criteria.component.html',
  styleUrls: ['./interview-criteria.component.css']
})
export class InterviewCriteriaComponent implements OnInit {

  numOfApplicants = 30; //To be Get
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  todayObj = {
    day: +this.dd,
    month: +this.mm,
    year: this.yyyy
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

  onBack() {

  }

}
