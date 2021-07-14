import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {


  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.http.post('https://admission-b38fe-default-rtdb.firebaseio.com/parents.json', form.value).subscribe(
      response => {
        console.log(response)
      }
    )
    this.router.navigate(['../', 'admissionDetails'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'student'], { relativeTo: this.route })
  }
}
