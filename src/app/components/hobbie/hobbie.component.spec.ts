import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbieComponent } from './hobbie.component';

describe('HobbieComponent', () => {
  let component: HobbieComponent;
  let fixture: ComponentFixture<HobbieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbieComponent]
    });
    fixture = TestBed.createComponent(HobbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
