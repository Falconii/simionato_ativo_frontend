import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMod01DialogComponent } from './change-mod01-dialog.component';

describe('ChangeMod01DialogComponent', () => {
  let component: ChangeMod01DialogComponent;
  let fixture: ComponentFixture<ChangeMod01DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMod01DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMod01DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
