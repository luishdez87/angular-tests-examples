import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export class FormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', Validators.required],
      email: ['']
    });
  }
}
