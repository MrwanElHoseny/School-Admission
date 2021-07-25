import { Router } from '@angular/router';
import { submission } from './../../services/submission.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public submission: submission,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.submission.username = '';
    localStorage.removeItem('user_Token')
    localStorage.removeItem('user_Exp')
    this.router.navigate(['']);
  }

}
