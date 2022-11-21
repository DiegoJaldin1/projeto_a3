import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastromedadmComponent } from './cadastromedadm.component';

describe('CadastromedadmComponent', () => {
  let component: CadastromedadmComponent;
  let fixture: ComponentFixture<CadastromedadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastromedadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastromedadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
