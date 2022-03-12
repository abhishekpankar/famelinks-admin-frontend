import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementSuggestionsComponent } from './improvement-suggestions.component';

describe('ImprovementSuggestionsComponent', () => {
  let component: ImprovementSuggestionsComponent;
  let fixture: ComponentFixture<ImprovementSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovementSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
