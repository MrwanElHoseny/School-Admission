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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private filter: ApplicantViewPipe) { }

  applicants: applicant[] = []
  applicantsCopy: applicant[] = [];

  searchTerm = '';

  pageIndex = 1;
  numOfPages = NaN;
  ngOnInit(): void {
    // getApplicant'sData

    this.applicants = [
      {
        ApplicantName: 'marwan',
        ApplicantNumber: '234235',
        AdmissionDate: '19/7/2020',
        Status: 'Interviewed'
      },
      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'ahmed',
        ApplicantNumber: '234115',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'hossam',
        ApplicantNumber: '234265',
        AdmissionDate: '19/7/2020',
        Status: 'Halted'
      },
      {
        ApplicantName: 'mohamed',
        ApplicantNumber: '2342122',
        AdmissionDate: '19/7/2020',
        Status: 'Paid'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: '234225',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: '2102335',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },

      {
        ApplicantName: 'mostafa',
        ApplicantNumber: '234125',
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      }
    ];
    this.applicantsCopy = this.applicants.slice(0);

    this.numOfPages = Math.ceil(this.applicants.length / 14);

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
