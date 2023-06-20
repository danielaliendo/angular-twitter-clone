import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedPageComponent } from './verified-page.component';

describe('VerifiedPageComponent', () => {
  let component: VerifiedPageComponent;
  let fixture: ComponentFixture<VerifiedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedPageComponent]
    });
    fixture = TestBed.createComponent(VerifiedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
