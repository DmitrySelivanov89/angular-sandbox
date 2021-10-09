import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHabitsPageComponent } from './all-habits-page.component';

describe('AllHabitsPageComponent', () => {
  let component: AllHabitsPageComponent;
  let fixture: ComponentFixture<AllHabitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHabitsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHabitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
