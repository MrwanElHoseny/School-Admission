import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public router: Router) { }
  adminName = 'Marwan';

  ngOnInit(): void {
    console.log(this.router.url)
  }

  logout() {

  }

}
