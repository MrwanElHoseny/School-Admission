import { submitPatch } from './../../../../services/submit-patch.service';
import { submission } from './../../../../services/submission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fawry',
  templateUrl: './fawry.component.html',
  styleUrls: ['./fawry.component.css']
})
export class FawryComponent implements OnInit {

  orderNum = 915;
  constructor(public submission: submission, public patch: submitPatch) { }

  ngOnInit(): void {
  }

}
