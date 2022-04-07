import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEnsureComponent } from './we-ensure.component';

describe('WeEnsureComponent', () => {
  let component: WeEnsureComponent;
  let fixture: ComponentFixture<WeEnsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeEnsureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeEnsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
