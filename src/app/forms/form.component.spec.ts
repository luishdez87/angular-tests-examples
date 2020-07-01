import {FormComponent} from "./form.component";
import {FormBuilder} from "@angular/forms";

describe('FormComponent', () => {
  let component: FormComponent;

  beforeEach(() => {
    component = new FormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls',  () => {
    expect(component.form.contains('nombre')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should review the name control be required',  () => {
    let control = component.form.get('nombre');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
})
