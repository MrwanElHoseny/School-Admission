import { submission } from './../../../services/submission.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private calendar: NgbCalendar,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['../', 'parents'], { relativeTo: this.route })
  }
}
