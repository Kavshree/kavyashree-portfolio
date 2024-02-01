import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCAGComponent } from './wcag.component';

describe('WCAGComponent', () => {
  let component: WCAGComponent;
  let fixture: ComponentFixture<WCAGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WCAGComponent]
    });
    fixture = TestBed.createComponent(WCAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
