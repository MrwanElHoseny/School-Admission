import { admin } from './../../services/admin.service';
import { adminAuth } from './../../services/admin-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public router: Router,
    private admin: adminAuth,
    public adminService: admin) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.admin.logOut();
  }

}
