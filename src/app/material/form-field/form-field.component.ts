import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChaseFormFeildComponent } from '../../chase/chase-form-feild/chase-form-feild.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { fail } from 'assert';
@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ChaseFormFeildComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  form: FormGroup;
  disableControl: boolean = false;
  constructor(private fb: FormBuilder) {
    // Initialize the form with a FormBuilder
    this.form = this.fb.group({
      phonenumber: [{ value: null, disabled: this.disableControl }, [Validators.required, Validators.minLength(3)]],
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Value:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to reset the form
  onReset(): void {
    this.form.reset();
  }

  // Method to handle blur event
  onInputBlur() {
    console.log('Input field lost focus');
  }

  toggleControl() {
    this.disableControl = !this.disableControl;
    if (this.disableControl) {
      this.form.get('phonenumber')?.disable();
    } else {
      this.form.get('phonenumber')?.enable();
    }
  }
}