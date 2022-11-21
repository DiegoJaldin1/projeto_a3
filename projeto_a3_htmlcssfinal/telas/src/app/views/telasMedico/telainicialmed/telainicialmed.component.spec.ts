import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialmedComponent } from './telainicialmed.component';

describe('TelainicialmedComponent', () => {
  let component: TelainicialmedComponent;
  let fixture: ComponentFixture<TelainicialmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelainicialmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelainicialmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
