import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSelectionComponent } from './standard-selection.component';

describe('StandardSelectionComponent', () => {
  let component: StandardSelectionComponent;
  let fixture: ComponentFixture<StandardSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
