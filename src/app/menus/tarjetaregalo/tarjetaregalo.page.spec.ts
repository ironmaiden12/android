import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaregaloPage } from './tarjetaregalo.page';

describe('TarjetaregaloPage', () => {
  let component: TarjetaregaloPage;
  let fixture: ComponentFixture<TarjetaregaloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarjetaregaloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
