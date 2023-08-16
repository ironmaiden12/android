import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateModalPage } from './update-modal.page';

describe('UpdateModalPage', () => {
  let component: UpdateModalPage;
  let fixture: ComponentFixture<UpdateModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
