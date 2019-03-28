import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneOfTheDayComponent } from './fortune-of-the-day.component';

describe('FortuneOfTheDayComponent', () => {
  let component: FortuneOfTheDayComponent;
  let fixture: ComponentFixture<FortuneOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortuneOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
