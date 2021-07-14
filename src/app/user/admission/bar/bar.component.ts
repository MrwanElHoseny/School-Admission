import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css', '../../../../../node_modules/ng-wizard/themes/ng_wizard.min.css'
    , '../../../../../node_modules/ng-wizard/themes/ng_wizard_theme_arrows.min.css'
    , '../../../../../node_modules/ng-wizard/themes/ng_wizard_theme_circles.min.css'
    , '../../../../../node_modules/ng-wizard/themes/ng_wizard_theme_dots.min.css']
})


export class BarComponent implements OnInit {

  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
