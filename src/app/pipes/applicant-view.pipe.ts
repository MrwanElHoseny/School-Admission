import { Pipe, PipeTransform } from '@angular/core';
import { applicant } from '../interface/applicant';

@Pipe({
  name: 'applicantView'
})
export class ApplicantViewPipe implements PipeTransform {

  transform(applicants: any[], ...args: unknown[]): applicant[] {
    if (args[0] && args[1]) {
      return applicants.filter(applicant => {
        return applicant.Status == args[0] && applicant.AdmissionDate == args[1];
      })
    }

    else if (args[0] && !args[1]) {
      return applicants.filter(applicant => {
        return applicant.Status == args[0];
      })
    }
    else if (!args[0] && args[1]) {
      return applicants.filter(applicant => {
        return applicant.AdmissionDate == args[1];
      });
    }
    else return [];

  }

}
