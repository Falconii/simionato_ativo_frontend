import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCadastroPadraoComponent } from './filtro-cadastro-padrao.component';

describe('FiltroCadastroPadraoComponent', () => {
  let component: FiltroCadastroPadraoComponent;
  let fixture: ComponentFixture<FiltroCadastroPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCadastroPadraoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCadastroPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
