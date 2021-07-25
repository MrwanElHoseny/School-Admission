import { submission } from './../../../services/submission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild("credit") creditChoice: ElementRef;
  @ViewChild("fawry") fawryChoice: ElementRef;
  @ViewChild("nbe") nbeChoice: ElementRef;



  constructor(public router: Router, private route: ActivatedRoute, private renderer: Renderer2,
    public submission: submission) {
    console.log(router.url)
  }

  ngOnInit(): void {
  }

  paymentChoice = (choice: string) => {

    let elements: ElementRef[] = [
      this.creditChoice,
      this.fawryChoice,
      this.nbeChoice
    ]

    for (let label of elements) {
      this.renderer.removeClass(label.nativeElement, "checked-label")
    }

    if (choice == "credit") {
      this.renderer.addClass(this.creditChoice.nativeElement, "checked-label")
    }
    else if (choice == "fawry") {
      this.renderer.addClass(this.fawryChoice.nativeElement, "checked-label")
    }
    else {
      this.renderer.addClass(this.nbeChoice.nativeElement, "checked-label")
    }


    this.router.navigate([choice], { relativeTo: this.route })
  }

  onBack() {
    this.router.navigate(['../', 'documents'], { relativeTo: this.route })
  }

}
