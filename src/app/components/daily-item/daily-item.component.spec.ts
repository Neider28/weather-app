import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyItemComponent } from './daily-item.component';

describe('DailyItemComponent', () => {
  let component: DailyItemComponent;
  let fixture: ComponentFixture<DailyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyItemComponent]
    });
    fixture = TestBed.createComponent(DailyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
