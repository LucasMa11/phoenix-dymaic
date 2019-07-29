import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixProdSaComponent } from './phoenix-prod-sa.component';

describe('PhoenixProdSaComponent', () => {
  let component: PhoenixProdSaComponent;
  let fixture: ComponentFixture<PhoenixProdSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixProdSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixProdSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
