import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScoutComponent } from './edit-scout.component';

describe('EditScoutComponent', () => {
  let component: EditScoutComponent;
  let fixture: ComponentFixture<EditScoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
