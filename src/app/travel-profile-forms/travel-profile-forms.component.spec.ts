import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProfileFormsComponent } from './travel-profile-forms.component';

describe('TravelProfileFormsComponent', () => {
  let component: TravelProfileFormsComponent;
  let fixture: ComponentFixture<TravelProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelProfileFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
