import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCriteriaComponent } from './interview-criteria.component';

describe('InterviewCriteriaComponent', () => {
  let component: InterviewCriteriaComponent;
  let fixture: ComponentFixture<InterviewCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
