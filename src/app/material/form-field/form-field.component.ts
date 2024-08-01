import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChaseFormFeildComponent } from '../../chase/chase-form-feild/chase-form-feild.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { fail } from 'assert';
@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ChaseFormFeildComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  form: FormGroup;
  disableControl: boolean = false;
  constructor(private fb: FormBuilder) {
    // Initialize the form with a FormBuilder
    this.form = this.fb.group({
      firstName: [{ value: '',label: "First Name", disabled: this.disableControl, showIcon: false, icon: '' }, [Validators.required, Validators.minLength(3)]],
      lastName: [{ value: '',label: "Last Name", disabled: false, showIcon:false, icon: '' }, [Validators.required, Validators.minLength(3)]],
      email: [{value:'',label: "Email", disabled: false, showIcon: true, icon: 'email'}, [Validators.required, Validators.email]]
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
      this.form.get('firstName')?.disable();
    } else {
      this.form.get('firstName')?.enable();
    }
  }
}