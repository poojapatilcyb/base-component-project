import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseFormFeildComponent } from './chase-form-feild.component';

describe('ChaseFormFeildComponent', () => {
  let component: ChaseFormFeildComponent;
  let fixture: ComponentFixture<ChaseFormFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaseFormFeildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaseFormFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
