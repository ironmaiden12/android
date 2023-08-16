import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenupromocionesPage } from './menupromociones.page';

describe('MenupromocionesPage', () => {
  let component: MenupromocionesPage;
  let fixture: ComponentFixture<MenupromocionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenupromocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
