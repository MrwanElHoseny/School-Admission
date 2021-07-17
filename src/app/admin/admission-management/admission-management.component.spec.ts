import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionManagementComponent } from './admission-management.component';

describe('AdmissionManagementComponent', () => {
  let component: AdmissionManagementComponent;
  let fixture: ComponentFixture<AdmissionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
