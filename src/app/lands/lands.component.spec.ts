import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsComponent } from './lands.component';
import {LandsService} from "./lands.service";
import {of} from "rxjs";

describe('LandsComponent', () => {
  let component: LandsComponent;
  let service: LandsService;

  beforeEach(() => {
    service = new LandsService(null);
    component = new LandsComponent(service);
  });


  it('should call the service, and set the list', () => {
    // Arrange
    let values = [
      {id:1, name: 'test'},
      {id:2, name: 'test'},
      {id:3, name: 'test'},
    ]
    spyOn(service, 'getCountries').and.callFake(() => {
      return of(values);
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.lands).toBe(values);
  });

  it('should post a country on agregarPais',  () => {
    let spy = spyOn(service, 'postCountry').and.callFake((country) => {
      return of(null);
    });

    component.agregarPais();

    expect(spy).toHaveBeenCalled();
  });
});
