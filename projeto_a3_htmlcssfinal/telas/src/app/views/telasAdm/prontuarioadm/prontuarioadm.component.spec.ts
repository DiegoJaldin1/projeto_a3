import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioadmComponent } from './prontuarioadm.component';

describe('ProntuarioadmComponent', () => {
  let component: ProntuarioadmComponent;
  let fixture: ComponentFixture<ProntuarioadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuarioadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
