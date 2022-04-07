import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiFooterComponent } from './semi-footer.component';

describe('SemiFooterComponent', () => {
  let component: SemiFooterComponent;
  let fixture: ComponentFixture<SemiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
