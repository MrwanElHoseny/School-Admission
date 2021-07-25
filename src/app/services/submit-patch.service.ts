import { Router } from '@angular/router';
import { submission } from './submission.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class submitPatch {
    patchSubmission = false;

    patches: {
        url: string,
        patch: {
            op: string,
            path: string,
            value: any
        }
    }[] = [];

    constructor(private http: HttpClient,
        private submission: submission,
        private router: Router) {


    }

    urls = {
        '/applicant/admission/student': '/applicant/' + this.submission.applicantID,
        '/applicant/admission/parents': '/applicant/' + this.submission.applicantID + '/ParentInfo/',
        '/applicant/admission/admissionDetails': '/applicant/' + this.submission.applicantID + '/AdmissionDetails',
        '/applicant/admission/emergency': '/applicant/' + this.submission.applicantID + '/EmergencyContact/',
        '/applicant/admission/siblings': '/applicant/' + this.submission.applicantID + '/Siblings/',
        '/applicant/admission/medical': '/applicant/' + this.submission.applicantID + '/Medical',
        '/applicant/admission/documents': '/applicant/' + this.submission.applicantID + '/Document'
    }

    mapUrl(url: string, path): string {
        if (path != 'MaritalStatus' && path != 'Guardian' && path != 'GuardianAddress' && path != 'LanguageSpoken') {
            return this.urls[url];
        }
        else {
            return '/applicant/' + this.submission.applicantID + '/FamilyStatus'
        }
    }

    submitAll() {
        this.patches.forEach(
            (patch, index) => {
                if (patch.url != "/applicant/" + this.submission.applicantID + "/FamilyStatus") {
                    this.http.patch(patch.url, [patch.patch], { observe: 'response' }).subscribe(


                        res => {
                            if (res.ok) {
                                console.log("Patch successfull")
                                if (this.router.url == '/applicant/admission/payment/credit' && index == this.patches.length - 1) {
                                    console.log('redirecting to payment url')
                                    this.http.get(this.submission.baseUrl + '/Applicant/Payment', { observe: 'response', responseType: 'text' }).subscribe(
                                        res => {
                                            if (res.ok) {

                                                window.open(res.body);
                                                this.submission.getApplicantData(this.submission.applicantID);
                                                this.router.navigate(['applicant', 'admission', 'applicationReport'])
                                            }
                                            else {
                                                console.log('Error retrieving credit payment url')
                                            }
                                        }
                                    );
                                }
                            }
                            else {
                                console.log("Patch error")
                            }
                        }
                    )
                }
            }
        )

        this.submission.docIndexes.forEach(
            (docNumber, index) => {

            }
        )


    }
}
