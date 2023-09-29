import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducComponent } from './introduc.component';

describe('IntroducComponent', () => {
  let component: IntroducComponent;
  let fixture: ComponentFixture<IntroducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroducComponent]
    });
    fixture = TestBed.createComponent(IntroducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
