import { submission } from './../../services/submission.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, submission: submission) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    //on success set submission = response
    this.router.navigate(['../admission/student'], { relativeTo: this.route })

  }
}
