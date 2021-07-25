import { submission } from './../services/submission.service';
import { submitPatch } from './../services/submit-patch.service';
import { Router } from '@angular/router';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[patchValue]',
})
export class PatchValueDirective {

  constructor(private router: Router,
    private patch: submitPatch,
    private submission: submission) { }

  @Input('patchValue') patchingActive: boolean;
  @HostListener('change', ['$event.target']) valueChange(event) {
    if (this.patchingActive) {
      this.patch.patches.push({
        url: this.submission.baseUrl + this.patch.mapUrl(this.router.url, (event as HTMLElement).getAttribute('name')),
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
