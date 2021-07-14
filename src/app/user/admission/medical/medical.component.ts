import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['../', 'documents'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'siblings'], { relativeTo: this.route })
  }
}
