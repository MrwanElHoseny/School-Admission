import { submission } from './../services/submission.service';
import { submitPatch } from './../services/submit-patch.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[patchTable]'
})
export class PatchTableDirective {

  constructor(private router: Router,
    private patch: submitPatch,
    private submission: submission) { }

  @Input('patchTable') patchingActive: boolean;
  @Input('rowIndex') index: number;

  @HostListener('change', ['$event.target']) valueChange(event) {
    if (this.patchingActive) {
      if (this.router.url == '/applicant/admission/emergency') {
        this.patch.patches.push({
          url: this.submission.baseUrl + this.patch.mapUrl(this.router.url, (event as HTMLElement).getAttribute('name')) + this.submission.emergency[this.index].Id,
          patch: {
            op: 'replace',
            path: '/' + (event as HTMLElement).getAttribute('name'),
            value: event.value
          }
        })
        console.log(this.patch.patches)
      } else {
        this.patch.patches.push({
          url: this.submission.baseUrl + this.patch.mapUrl(this.router.url, (event as HTMLElement).getAttribute('name')) + this.submission.siblings[this.index].Id,
          patch: {
            op: 'replace',
            path: '/' + (event as HTMLElement).getAttribute('name'),
            value: event.value
          }
        })

        console.log(this.patch.patches)
      }
    }
  }

}
