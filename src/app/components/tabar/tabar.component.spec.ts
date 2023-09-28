import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabarComponent } from './tabar.component';

describe('TabarComponent', () => {
  let component: TabarComponent;
  let fixture: ComponentFixture<TabarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabarComponent]
    });
    fixture = TestBed.createComponent(TabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
