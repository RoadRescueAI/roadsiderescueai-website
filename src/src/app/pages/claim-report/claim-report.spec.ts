import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimReport } from './claim-report';

describe('ClaimReport', () => {
  let component: ClaimReport;
  let fixture: ComponentFixture<ClaimReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
