import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPadraoCadastroComponent } from './crud-padrao-cadastro.component';

describe('CrudPadraoCadastroComponent', () => {
  let component: CrudPadraoCadastroComponent;
  let fixture: ComponentFixture<CrudPadraoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPadraoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPadraoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
