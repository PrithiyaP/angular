import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddListComponent } from './emp-add-list.component';

describe('EmpAddListComponent', () => {
  let component: EmpAddListComponent;
  let fixture: ComponentFixture<EmpAddListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpAddListComponent]
    });
    fixture = TestBed.createComponent(EmpAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
