import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDetailComponent } from './scout-detail.component';

describe('ScoutDetailComponent', () => {
  let component: ScoutDetailComponent;
  let fixture: ComponentFixture<ScoutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
