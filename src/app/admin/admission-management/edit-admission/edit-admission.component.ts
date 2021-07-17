import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admission',
  templateUrl: './edit-admission.component.html',
  styleUrls: ['./edit-admission.component.css']
})
export class EditAdmissionComponent implements OnInit {
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
