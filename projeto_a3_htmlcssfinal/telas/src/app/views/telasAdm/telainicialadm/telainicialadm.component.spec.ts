import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialadmComponent } from './telainicialadm.component';

describe('TelainicialadmComponent', () => {
  let component: TelainicialadmComponent;
  let fixture: ComponentFixture<TelainicialadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelainicialadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelainicialadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
