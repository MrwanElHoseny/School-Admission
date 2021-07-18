import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { submission } from './../../services/submission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers: [
    submission
  ]
})
export class ScoreComponent implements OnInit {

  constructor(public submission: submission,
    public route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.submission.studentData.DateOfBirth = '';
    this.submission.studentData.FirstName = 'First';
    this.submission.studentData.SecondName = 'Second';
    this.submission.studentData.LastName = 'Last';

  }

  onSubmit(form: NgForm) {

  }
  onBack() {
    this.router.navigate(['../../', 'applicantsInterview'], { relativeTo: this.route })
  }

}
