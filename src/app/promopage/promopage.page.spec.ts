import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromopagePage } from './promopage.page';

describe('PromopagePage', () => {
  let component: PromopagePage;
  let fixture: ComponentFixture<PromopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
