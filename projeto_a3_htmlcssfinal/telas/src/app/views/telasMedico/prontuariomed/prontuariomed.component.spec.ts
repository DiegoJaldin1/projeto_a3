import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuariomedComponent } from './prontuariomed.component';

describe('ProntuariomedComponent', () => {
  let component: ProntuariomedComponent;
  let fixture: ComponentFixture<ProntuariomedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuariomedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuariomedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
