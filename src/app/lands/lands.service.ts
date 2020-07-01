import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LandsService {
  readonly url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.url);
  }

  postCountry(country) {
    return this.http.post(this.url, country);
  }
}
