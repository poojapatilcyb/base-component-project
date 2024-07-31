import { Component, Input, OnDestroy, OnInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chase-form-feild',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => ChaseFormFeildComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChaseFormFeildComponent),
      multi: true
    }
  ],
  templateUrl: './chase-form-feild.component.html',
  styleUrl: './chase-form-feild.component.scss'
})
export class ChaseFormFeildComponent implements OnInit, OnDestroy{
  static nextId = 0;
  @Input() value: number | null = null;
  isDisabled = false;
  id = `custom-number-input-${ChaseFormFeildComponent.nextId++}`;
  stateChanges = new Subject<void>();

  // Implementing ControlValueAccessor methods
  onChange = (value: number | null) => {};
  onTouched = () => {};

  ngOnInit(): void {
    console.log(this.value);
  }
  writeValue(value: number | null): void {
    this.value = value;
    console.log(value);
    this.stateChanges.next();
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled)
    this.isDisabled = isDisabled;
  }

  // Implementing MatFormFieldControl methods
  get empty(): boolean {
    return !this.value;
  }

  get shouldLabelFloat(): boolean {
    return true;
  }

  // Adding the missing method `setDescribedByIds` to satisfy `MatFormFieldControl`
  setDescribedByIds(ids: string[]): void {
    // Custom implementation can be empty or handle specific logic if needed
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = parseFloat(inputElement.value);
    if (!isNaN(parsedValue)) {
      this.value = parsedValue;
      this.onChange(this.value);
    }
  }

  onBlur(): void {
    this.onTouched();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}
