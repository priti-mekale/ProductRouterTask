import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairComponent } from './fair.component';

describe('FairComponent', () => {
  let component: FairComponent;
  let fixture: ComponentFixture<FairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
