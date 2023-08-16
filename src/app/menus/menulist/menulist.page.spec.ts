import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenulistPage } from './menulist.page';

describe('MenulistPage', () => {
  let component: MenulistPage;
  let fixture: ComponentFixture<MenulistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenulistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
