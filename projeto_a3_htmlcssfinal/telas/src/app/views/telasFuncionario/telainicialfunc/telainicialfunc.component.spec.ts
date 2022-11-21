import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialfuncComponent } from './telainicialfunc.component';

describe('TelainicialfuncComponent', () => {
  let component: TelainicialfuncComponent;
  let fixture: ComponentFixture<TelainicialfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelainicialfuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelainicialfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
