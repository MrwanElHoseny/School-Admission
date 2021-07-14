import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawryComponent } from './fawry.component';

describe('FawryComponent', () => {
  let component: FawryComponent;
  let fixture: ComponentFixture<FawryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FawryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
