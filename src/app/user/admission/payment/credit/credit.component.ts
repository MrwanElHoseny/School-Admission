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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submission.submit();
    this.router.navigate(['../', 'applicationReport'], { relativeTo: this.route })
  }

}
