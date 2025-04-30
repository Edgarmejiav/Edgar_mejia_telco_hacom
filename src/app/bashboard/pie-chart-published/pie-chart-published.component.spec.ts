import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPublishedComponent } from './pie-chart-published.component';

describe('PieChartPublishedComponent', () => {
  let component: PieChartPublishedComponent;
  let fixture: ComponentFixture<PieChartPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
