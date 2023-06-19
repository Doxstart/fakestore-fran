import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsForTestComponent } from './results-for-test.component';

describe('ResultsForTestComponent', () => {
  let component: ResultsForTestComponent;
  let fixture: ComponentFixture<ResultsForTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsForTestComponent]
    });
    fixture = TestBed.createComponent(ResultsForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
