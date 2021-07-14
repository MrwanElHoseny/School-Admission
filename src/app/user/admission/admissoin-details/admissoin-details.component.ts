import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admissoin-details',
  templateUrl: './admissoin-details.component.html',
  styleUrls: ['./admissoin-details.component.css']
})
export class AdmissoinDetailsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) { }

  ngOnInit(): void {
  }

  ngOnsubmit(form: NgForm) {
    this.http.post('https://admission-b38fe-default-rtdb.firebaseio.com/admissoinDetails.json', form.value).subscribe(
      response => {
        console.log(response)
      }
    )
    this.router.navigate(['../', 'emergency'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'parents'], { relativeTo: this.route })
  }

  gradeDefault = 1;
  stageDefault = 'KG';

}
