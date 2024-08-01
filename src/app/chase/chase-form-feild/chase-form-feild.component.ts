import { Component, Input, OnDestroy, OnInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Subject } from 'rxjs';

interface formFieldValue {
  value: string;
  label?: string;
  disabled?: boolean;
  showIcon?: boolean;
  icon?: string;
}
@Component({
  selector: 'app-chase-form-feild',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => ChaseFormFeildComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR, //by registering this token angular get to know that this is part of form component
      useExisting: forwardRef(() => ChaseFormFeildComponent),
      multi: true // use NG_VALUE_ACCESSOR more than one time hence multi:true
    }
  ],
  templateUrl: './chase-form-feild.component.html',
  styleUrl: './chase-form-feild.component.scss'
})
export class ChaseFormFeildComponent implements ControlValueAccessor, OnDestroy{
  static nextId = 0;
  @Input() value: formFieldValue = {value: ''};
  formValue: string = '';
  label: string = '';
  showIcon: boolean = false;
  icon: string = '';
  isDisabled: boolean = false;
  id = `custom-number-input-${ChaseFormFeildComponent.nextId++}`;
  stateChanges = new Subject<void>();

  // Implementing ControlValueAccessor methods
  onChange = (formValue: string) => {};
  onTouched = () => {};

  writeValue(value: formFieldValue): void {
    console.log(value);
    this.value = value;
    this.formValue = value.value;
    this.label = value?.label ? value?.label : '';
    // this.isDisabled = value?.disabled ? value?.disabled : false;
    this.showIcon = value?.showIcon ? value?.showIcon : false;
    this.icon = value?.icon ? value?.icon : '';
    this.stateChanges.next();
  }

  registerOnChange(fn: (formValue: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setlabel?(label: string): void {
    this.label = label;
    this.stateChanges.next();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.stateChanges.next();
  }
  setShowIcon?(showIcon: boolean): void {
    console.log(showIcon);
    this.showIcon = showIcon;
    this.stateChanges.next();
  }
  setIcon?(icon: string): void {
    this.icon = icon;
    this.stateChanges.next();
  }
  // Implementing MatFormFieldControl methods
  get empty(): boolean {
    return !this.value;
  }

  get shouldLabelFloat(): boolean {
    return true;
  }

  setDescribedByIds(ids: string[]): void {
    // Custom implementation can be empty or handle specific logic if needed
  }

  // Implement onContainerClick as part of MatFormFieldControl
  onContainerClick(): void {
    // You can implement custom behavior or leave it empty
    // This method is required to avoid errors in Angular Material
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = inputElement.value;
    // if (!isNaN(parsedValue)) {
      this.formValue = parsedValue;
      this.onChange(this.formValue);
    // }
  }

  onBlur(): void {
    this.onTouched();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

}
