import { submitPatch } from './../../../../services/submit-patch.service';
import { submission } from './../../../../services/submission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbe',
  templateUrl: './nbe.component.html',
  styleUrls: ['./nbe.component.css']
})
export class NbeComponent implements OnInit {

  accNum = 20019024782001;
  constructor(public submission: submission, public patch: submitPatch) { }

  ngOnInit(): void {
  }

}
