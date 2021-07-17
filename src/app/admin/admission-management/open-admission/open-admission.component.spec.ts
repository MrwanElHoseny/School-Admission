import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAdmissionComponent } from './open-admission.component';

describe('OpenAdmissionComponent', () => {
  let component: OpenAdmissionComponent;
  let fixture: ComponentFixture<OpenAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
