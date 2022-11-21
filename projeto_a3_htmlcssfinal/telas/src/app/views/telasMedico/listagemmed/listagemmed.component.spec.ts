import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemmedComponent } from './listagemmed.component';

describe('ListagemmedComponent', () => {
  let component: ListagemmedComponent;
  let fixture: ComponentFixture<ListagemmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
