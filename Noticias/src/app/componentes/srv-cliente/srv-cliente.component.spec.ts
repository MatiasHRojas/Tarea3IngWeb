import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvClienteComponent } from './srv-cliente.component';

describe('SrvClienteComponent', () => {
  let component: SrvClienteComponent;
  let fixture: ComponentFixture<SrvClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
