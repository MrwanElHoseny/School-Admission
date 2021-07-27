import { Router } from '@angular/router';
import { admin } from './../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { documentObj } from './../../../interface/document';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-documents',
  templateUrl: './set-documents.component.html',
  styleUrls: ['./set-documents.component.css']
})
export class SetDocumentsComponent implements OnInit {

  documentList: documentObj[] = []

  loading = false;

  submitLoading = false;

  constructor(private http: HttpClient, private admin: admin,
    private router: Router) {

    this.loading = true;
    this.http.get<documentObj[]>(this.admin.baseUrl + '/Admin/DocumentCriteria', { observe: 'response' }).subscribe(
      res => {
        this.loading = false;
        console.log('Document Criteria obtained successfully')

        this.documentList = res.body;

      }, err => {
        this.loading = false;
        console.log("Can't reach end point")
      }
    )
  }

  ngOnInit(): void {
  }



  onSubmit() {
    this.submitLoading = true;
    this.http.post(this.admin.baseUrl + '/Admin/DocumentCriteriaEditing', this.documentList, { observe: 'response' }).subscribe(
      res => {
        this.submitLoading = false;
        window.alert("Document criteria has been set.")
        this.router.navigate(['admin', 'admissionManagement'])

      }, err => {
        this.submitLoading = false;
        console.log("Can't reach end point")
      }
    )
  }



  addDoc() {
    this.documentList.push({
      Name: '',
      Description: '',
      Size: ''
    })
  }

  deleteDoc(docNum: number) {
    console.log(this.documentList)
    this.documentList.splice(docNum, 1);
  }

  onBack() {
    this.router.navigate(['admin', 'admissionManagement'])
  }

}
