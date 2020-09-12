import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesComponent } from './add-des.component';

describe('AddDesComponent', () => {
  let component: AddDesComponent;
  let fixture: ComponentFixture<AddDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
