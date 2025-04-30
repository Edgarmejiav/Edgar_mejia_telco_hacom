import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartGenreComponent } from './pie-chart-genre.component';

describe('PieChartGenreComponent', () => {
  let component: PieChartGenreComponent;
  let fixture: ComponentFixture<PieChartGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
