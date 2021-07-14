import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) {
  }

  ngOnInit(): void {
  }



  addContact() {
    this.submission.emergencyRows.push(Math.max.apply(Math, this.submission.emergencyRows) + 1);
    this.submission.numOfEmergencyRows++;

    this.submission.emergency.push({
      FullName: '',
      HomeNumber: NaN,
      Mobile: NaN,
      Relationship: ''
    })
  }

  deleteContact(row: number) {
    if (this.submission.numOfEmergencyRows > 1) {

      let index = (this.submission.emergencyRows.indexOf(row));
      this.submission.emergencyRows.splice(index, 1);
      this.submission.emergency.splice(index, 1)
      this.submission.numOfEmergencyRows--;
    }
  }

  onSubmit(form: NgForm) {
    this.http.post('https://admission-b38fe-default-rtdb.firebaseio.com/emergency.json', this.submission.emergency).subscribe(
      response => {
        console.log(response)
      }
    )
    this.router.navigate(['../', 'siblings'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'admissionDetails'], { relativeTo: this.route })
  }
}