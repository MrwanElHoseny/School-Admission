import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admission',
  templateUrl: './edit-admission.component.html',
  styleUrls: ['./edit-admission.component.css']
})
export class EditAdmissionComponent implements OnInit {

  requestString = '';
  constructor(private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onSubmit(form: NgForm) {
    this.requestString = form.value.ExtendedEndDate + '/' + form.value.ExtendedEndTime;
    console.log(this.requestString)
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
