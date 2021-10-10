import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HabitFormPageComponent} from './habit-form-page.component';

describe('HabitFormPageComponent', () => {
  let component: HabitFormPageComponent;
  let fixture: ComponentFixture<HabitFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitFormPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
