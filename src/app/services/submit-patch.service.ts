import { Router } from '@angular/router';
import { submission } from './submission.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

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
        this.submission.loading = true;
        let dataJoin = [];

        this.patches.forEach(
            (patch) => {
                dataJoin.push(this.http.patch(patch.url, [patch.patch], { observe: 'response' }))
            }
        )
        console.log(dataJoin)

        // this.submission.docIndexes.forEach(
        //     (docNumber, index) => {
        //         dataJoin.push()
        //     }
        // )

        let multiCall = forkJoin(dataJoin);
        multiCall.subscribe(
            res => {
                console.log('all patches successfull');
                this.router.navigate(['applicant', 'admission', 'applicationReport']);
                this.submission.loading = false;
            },
            err => {
                this.submission.loading = false;
                console.log('Error patching');
            }
        )


    }
}
