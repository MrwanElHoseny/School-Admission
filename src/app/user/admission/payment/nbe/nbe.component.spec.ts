import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbeComponent } from './nbe.component';

describe('NbeComponent', () => {
  let component: NbeComponent;
  let fixture: ComponentFixture<NbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
