import { admin } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApplicantViewPipe } from './../../pipes/applicant-view.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { applicant } from '../../interface/applicant';
@Component({
  selector: 'app-applicants-interview',
  templateUrl: './applicants-interview.component.html',
  styleUrls: ['./applicants-interview.component.css']
})
export class ApplicantsInterviewComponent implements OnInit {

  applicants: applicant[] = []
  applicantsCopy: applicant[] = [];

  searchTerm = '';

  pageIndex = 1;
  numOfPages = NaN;

  loading = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private filter: ApplicantViewPipe,
    private http: HttpClient,
    private admin: admin) {

    this.loading = true;
    // getApplicant'sData
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
