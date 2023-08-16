import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultapromocionesPage } from './consultapromociones.page';

describe('ConsultapromocionesPage', () => {
  let component: ConsultapromocionesPage;
  let fixture: ComponentFixture<ConsultapromocionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultapromocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
