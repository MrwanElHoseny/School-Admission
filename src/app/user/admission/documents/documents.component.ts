import { submission } from './../../../services/submission.service';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {





  alertsHidden: boolean[] = [
    null,
    null,
    null,
    null,
    null
  ]

  valid = false;



  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission) {
  }

  ngOnInit(): void {
  }



  studentUpload(documents: FileList, docNum: number) {

    let Document = documents[0];
    this.alertsHidden[docNum] = true;

    if ((Document.size / 1000000) > 3) {
      this.alertsHidden[docNum] = false;
    }
    else {
      this.submission.formDocs.push(Document)
      this.submission.docIndexes.push(docNum)
      console.log(this.submission.formDocs, this.submission.docIndexes)
    }
    this.valid = this.alertsHidden.every((value) => value);
  }

  onSubmit() {

    this.router.navigate(['../', 'payment'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'medical'], { relativeTo: this.route })
  }
}
