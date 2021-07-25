import { submission } from './../services/submission.service';
import { submitPatch } from './../services/submit-patch.service';
import { Router } from '@angular/router';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[patchParent]'
})
export class PatchParentDirective {

  constructor(
    private router: Router,
    private patch: submitPatch,
    private submission: submission
  ) { }
  @Input('patchParent') patchingActive: boolean;
  @Input('father') father: boolean;

  @HostListener('change', ['$event.target']) valueChange(event) {
    if (this.patchingActive) {
      if (this.father) {
        this.patch.patches.push({
          url: this.submission.baseUrl + this.patch.mapUrl(this.router.url, (event as HTMLElement).getAttribute('name')) +
            this.submission.parentsData[this.submission.parentsData.findIndex(
              parent => {
                return parent.Gender == 'Male' || parent.Gender == 'male';
              }
            )].Id,
          patch: {
            op: 'replace',
            path: '/' + (event as HTMLElement).getAttribute('name'),
            value: event.value
          }
        })
      } else {
        this.patch.patches.push({
          url: this.submission.baseUrl + this.patch.mapUrl(this.router.url, (event as HTMLElement).getAttribute('name')) +
            this.submission.parentsData[this.submission.parentsData.findIndex(
              parent => {
                return parent.Gender == 'Female' || parent.Gender == 'female';
              }
            )].Id,
          patch: {
            op: 'replace',
            path: '/' + (event as HTMLElement).getAttribute('name'),
            value: event.value
          }
        })
      }

      console.log(this.patch.patches)

    }
  }
}
