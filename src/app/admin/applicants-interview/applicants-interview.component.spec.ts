import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsInterviewComponent } from './applicants-interview.component';

describe('ApplicantsInterviewComponent', () => {
  let component: ApplicantsInterviewComponent;
  let fixture: ComponentFixture<ApplicantsInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
