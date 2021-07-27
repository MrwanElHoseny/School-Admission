import { documentObj } from './../../../interface/document';
import { UploadService } from './../../../services/uploadFile.service';
import { submission } from './../../../services/submission.service';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
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


  documentList: documentObj[] = [];

  alertsHidden: boolean[] = []
  docIndexes: number[] = []

  submitDisabled: boolean;
  docCount = 0;
  loading = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public submission: submission,
    private upload: UploadService) {

    if (this.submission.patch) {
      this.submitDisabled = false;
    } else {
      this.submitDisabled = true;
    }

    this.loading = true;
    this.http.get<documentObj[]>(this.submission.baseUrl + '/Admin/DocumentCriteria', { observe: 'response' }).subscribe(
      res => {
        this.loading = false;
        console.log('Document Criteria obtained successfully')

        this.documentList = res.body;
        this.documentList.forEach(
          doc => {
            this.alertsHidden.push(null);
          }
        )
      }, err => {
        this.loading = false;
        console.log("Can't reach end point")
      }
    )

  }

  ngOnInit(): void {
  }



  studentUpload(documents: FileList, docNum: number) {

    let Document = documents[0];
    this.alertsHidden[docNum] = true;

    if ((Document.size / 1000000) > +this.documentList[docNum].Size) {
      this.alertsHidden[docNum] = false;
    }
    else {
      this.docCount++;
      if (this.docCount == this.documentList.length) {
        this.submitDisabled = false;
      }

      if (!this.docIndexes.includes(docNum)) {
        this.submission.formDocs.push({ file: Document, name: this.documentList[docNum].Name })
        this.docIndexes.push(docNum);
      }
      else {
        this.submission.formDocs[this.docIndexes.indexOf(docNum)] = { file: Document, name: this.documentList[docNum].Name };
      }
    }
  }

  onSubmit() {
    this.router.navigate(['../', 'payment'], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'medical'], { relativeTo: this.route })
  }
}
