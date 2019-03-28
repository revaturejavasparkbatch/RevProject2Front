import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenFortuneViewComponent } from './gen-fortune-view.component';

describe('GenFortuneViewComponent', () => {
  let component: GenFortuneViewComponent;
  let fixture: ComponentFixture<GenFortuneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenFortuneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenFortuneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
