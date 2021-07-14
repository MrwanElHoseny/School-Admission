import { submission } from './../../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) { }

  ngOnInit(): void {
  }

  addSibling() {
    if (this.submission.numOfSiblingsRows > 0) {
      this.submission.SiblingsRows.push(Math.max.apply(Math, this.submission.SiblingsRows) + 1);
    }
    else {
      this.submission.SiblingsRows.push(1);
    }
    this.submission.numOfSiblingsRows++;

    this.submission.siblings.push({
      FullName: '',
      SchoolBranch: '',
      Age: NaN,
      Relationship: ''
    })
  }

  deleteSibling(row: number) {
    if (this.submission.numOfSiblingsRows > 0) {
      let index = (this.submission.SiblingsRows.indexOf(row));
      this.submission.SiblingsRows.splice(index, 1);
      this.submission.siblings.splice(index, 1)
      this.submission.numOfSiblingsRows--;
    }
  }

  onSubmit(form: NgForm) {

    this.http.post('https://admission-b38fe-default-rtdb.firebaseio.com/siblings.json', this.submission.siblings).subscribe(
      response => {
        console.log(response)
      }
    )
    this.router.navigate(['../', 'medical'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'Siblings'], { relativeTo: this.route })
  }

}
