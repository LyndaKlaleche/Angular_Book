import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBookComponent } from './details-book.component';

describe('DetailsBookComponent', () => {
  let component: DetailsBookComponent;
  let fixture: ComponentFixture<DetailsBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBookComponent]
    });
    fixture = TestBed.createComponent(DetailsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
