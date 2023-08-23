import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GarantiasoportePage } from './garantiasoporte.page';

describe('GarantiasoportePage', () => {
  let component: GarantiasoportePage;
  let fixture: ComponentFixture<GarantiasoportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GarantiasoportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
