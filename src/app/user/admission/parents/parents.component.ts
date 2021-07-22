import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {


  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission,
    public scroller: ViewportScroller) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {

    this.router.navigate(['../', 'admissionDetails'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'student'], { relativeTo: this.route })
  }
}
