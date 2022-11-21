import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemadmComponent } from './listagemadm.component';

describe('ListagemadmComponent', () => {
  let component: ListagemadmComponent;
  let fixture: ComponentFixture<ListagemadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
