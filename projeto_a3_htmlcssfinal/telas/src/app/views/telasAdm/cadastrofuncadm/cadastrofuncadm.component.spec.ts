import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofuncadmComponent } from './cadastrofuncadm.component';

describe('CadastrofuncadmComponent', () => {
  let component: CadastrofuncadmComponent;
  let fixture: ComponentFixture<CadastrofuncadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrofuncadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrofuncadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
