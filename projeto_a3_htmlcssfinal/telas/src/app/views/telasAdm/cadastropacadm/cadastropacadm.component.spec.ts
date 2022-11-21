import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropacadmComponent } from './cadastropacadm.component';

describe('CadastropacadmComponent', () => {
  let component: CadastropacadmComponent;
  let fixture: ComponentFixture<CadastropacadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastropacadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastropacadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
