import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailvalidatorDirective,
    multi: true,
  },
  ],


})
export class EmailvalidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const email = control.value as string;
    if (email .includes('test')) {
      return { emailvalidator: true 
      };
    }
     
      return null;
  
}
}