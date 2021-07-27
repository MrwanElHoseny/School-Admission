
import { admin } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { ApplicantViewPipe } from './../../pipes/applicant-view.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Pipe, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { applicant } from '../../interface/applicant';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css'],

})



export class ViewApplicantsComponent implements OnInit {

  loading = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private filter: ApplicantViewPipe,
    private http: HttpClient,
    private admin: admin) {

    // getApplicant'sData
    this.loading = true;
    this.http.get<applicant[]>(this.admin.baseUrl + '/Admin/AdmissionApplicants', { observe: 'response' }).subscribe(
      res => {
        this.loading = false;
        if (res.ok) {
          console.log('Applicants retrieved successfully');
          this.applicants = res.body;
          this.applicantsCopy = this.applicants.slice(0);
          this.numOfPages = Math.ceil(this.applicants.length / 14);

          this.applicants.forEach(
            applicant => {
              applicant.ApplicantName = applicant.FirstName + ' ' + applicant.SecondName + ' ' + applicant.LastName
            }
          )
        } else {
          console.log("error retrieving applicants");
        }
      },
      err => {
        this.loading = false;
        console.log("Can't reach end point")
      }
    )

  }

  applicants: applicant[];
  applicantsCopy: applicant[] = [];

  searchTerm = '';

  pageIndex = 1;
  numOfPages = NaN;
  activeRows = 0;
  ngOnInit(): void {

  }

  statusFilter: string;
  dateFilter: string;

  onFilter() {
    this.applicantsCopy = this.filter.transform(this.applicantsCopy, this.statusFilter, this.dateFilter);

  }

  onReset() {
    this.applicantsCopy = this.applicants.slice(0);
    this.statusFilter = null;
    this.dateFilter = null;
  }

  onNextPage() {
    this.pageIndex++;
    document.documentElement.scrollTop = 0;
  }

  onBackPage() {
    this.pageIndex--;
    document.documentElement.scrollTop = 0;
  }

}
