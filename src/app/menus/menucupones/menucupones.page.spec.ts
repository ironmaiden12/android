import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenucuponesPage } from './menucupones.page';

describe('MenucuponesPage', () => {
  let component: MenucuponesPage;
  let fixture: ComponentFixture<MenucuponesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenucuponesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
