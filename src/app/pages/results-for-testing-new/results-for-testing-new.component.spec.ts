import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsForTestingNewComponent } from './results-for-testing-new.component';

describe('ResultsForTestingNewComponent', () => {
  let component: ResultsForTestingNewComponent;
  let fixture: ComponentFixture<ResultsForTestingNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsForTestingNewComponent]
    });
    fixture = TestBed.createComponent(ResultsForTestingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
