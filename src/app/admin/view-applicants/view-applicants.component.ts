import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  applicants: {
    ApplicantNumber: number,
    ApplicantName: string,
    AdmissionDate: string,
    Status: string
  }[] = []

  searchTerm = '';

  ngOnInit(): void {
    // getApplicant'sData

    this.applicants = [
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      }, {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'marwan',
        ApplicantNumber: 234235,
        AdmissionDate: '19/7/2020',
        Status: 'Waiting'
      },
      {
        ApplicantName: 'mostafa',
        ApplicantNumber: 2342334,
        AdmissionDate: '23/7/2020',
        Status: 'Interviewed'
      }
    ];
  }

}
