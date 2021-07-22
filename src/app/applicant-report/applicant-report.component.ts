import { submission } from './../services/submission.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-applicant-report',
  templateUrl: './applicant-report.component.html',
  styleUrls: ['./applicant-report.component.css'],
  providers: [
    submission
  ]
})
export class ApplicantReportComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public submission: submission
  ) {

  }

  ngOnInit(): void {

  }

}
