import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubjectComponent } from './manage-subject.component';

describe('ManagesubjectComponent', () => {
  let component: ManagesubjectComponent;
  let fixture: ComponentFixture<ManagesubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
