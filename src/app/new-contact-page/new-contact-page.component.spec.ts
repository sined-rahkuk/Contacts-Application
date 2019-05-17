import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactPageComponent } from './new-contact-page.component';

describe('NewContactPageComponent', () => {
  let component: NewContactPageComponent;
  let fixture: ComponentFixture<NewContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
