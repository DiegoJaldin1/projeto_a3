import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropacfuncComponent } from './cadastropacfunc.component';

describe('CadastropacfuncComponent', () => {
  let component: CadastropacfuncComponent;
  let fixture: ComponentFixture<CadastropacfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastropacfuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastropacfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
