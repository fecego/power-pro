import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDireccionesComponent } from './registro-direcciones.component';

describe('RegistroDireccionesComponent', () => {
  let component: RegistroDireccionesComponent;
  let fixture: ComponentFixture<RegistroDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDireccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
