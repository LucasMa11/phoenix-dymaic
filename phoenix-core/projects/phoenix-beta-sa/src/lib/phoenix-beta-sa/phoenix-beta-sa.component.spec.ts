import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixBetaSaComponent } from './phoenix-beta-sa.component';

describe('PhoenixBetaSaComponent', () => {
  let component: PhoenixBetaSaComponent;
  let fixture: ComponentFixture<PhoenixBetaSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixBetaSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixBetaSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
