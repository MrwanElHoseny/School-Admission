import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDocumentsComponent } from './set-documents.component';

describe('SetDocumentsComponent', () => {
  let component: SetDocumentsComponent;
  let fixture: ComponentFixture<SetDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
