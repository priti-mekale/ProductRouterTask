import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sProductComponent } from './single-product.component';

describe('SingleProductComponent', () => {
  let component: sProductComponent;
  let fixture: ComponentFixture<sProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
