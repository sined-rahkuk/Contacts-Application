import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRefComponent } from './contact-ref.component';

describe('ContactRefComponent', () => {
  let component: ContactRefComponent;
  let fixture: ComponentFixture<ContactRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
