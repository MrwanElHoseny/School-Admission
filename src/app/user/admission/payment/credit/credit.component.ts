import { admin } from './../../../../services/admin.service';
import { submitPatch } from './../../../../services/submit-patch.service';
import { submission } from './../../../../services/submission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  error = false;
  redirectLink = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission,
    private patch: submitPatch) {

  }

  ngOnInit(): void {
  }

  redirect() {
    if (this.submission.patch) {
      this.patch.submitAll();
    } else {
      this.submission.submit();
    }
  }

}
