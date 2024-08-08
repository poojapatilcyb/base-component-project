import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-travel-profile-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CdkAccordionModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],  
  providers: [provideNativeDateAdapter()],
  templateUrl: './travel-profile-forms.component.html',
  styleUrl: './travel-profile-forms.component.scss'
})
export class TravelProfileFormsComponent implements OnInit{
  items = ['Item 1'];
  expandedIndex = 0;
  // @ts-ignore
  identificationForm: FormGroup;
  suffix = ['Mr.', 'Mrs.', 'Miss'];
  gender = ['Male', 'Female'];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.identificationForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      suffix: [''],
      gender: [''],
      dateOfBirth: ['']
    });
  }

}
