import { token } from './../../interface/token';
import { HttpClient } from '@angular/common/http';
import { submission } from './../../services/submission.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private submission: submission,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.http.post<{ Token: string }>(this.submission.baseUrl + '/Applicant/authenticate', form.value, { observe: 'response' }).subscribe(
      res => {
        if (res.ok) {
          localStorage.setItem('user_Token', res.body.Token);
          this.submission.username = form.value.UserName;

          //parsing token 
          let obj = { Token: localStorage.getItem('user_Token') }
          this.http.post<token[]>(this.submission.baseUrl + '/Applicant/DecodeJwt', obj, { observe: 'response' }).subscribe(
            res => {
              if (res.ok) {
                localStorage.setItem('user_Exp', res.body[res.body.findIndex(
                  token => {
                    return token.Type == 'exp'
                  }
                )].Value)

                this.submission.applicantID = res.body[res.body.findIndex(
                  token => {
                    return token.Type == 'id'
                  }
                )].Value

                this.submission.patch = true;
                this.submission.getApplicantData(this.submission.applicantID);


                this.router.navigate(['../admission/student'], { relativeTo: this.route })
              } else {
                console.log("Error parsing user token")
              }
            }
          )
        }
      }
    )

    //on success set submission = response

  }
}
