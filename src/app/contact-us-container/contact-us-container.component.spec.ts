import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsContainerComponent } from './contact-us-container.component';

describe('ContactUsContainerComponent', () => {
  let component: ContactUsContainerComponent;
  let fixture: ComponentFixture<ContactUsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsContainerComponent]
    });
    fixture = TestBed.createComponent(ContactUsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
