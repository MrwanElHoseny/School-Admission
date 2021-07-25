import { adminAuth } from './../../services/admin-auth.service';

import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private router: Router,
    private auth: adminAuth) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.auth.logIn(form.value)
  }
}
