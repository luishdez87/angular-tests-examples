import { Component, OnInit } from '@angular/core';
import {LandsService} from "./lands.service";

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.css']
})
export class LandsComponent implements OnInit {
  lands: any[];
  constructor(
    private landsService: LandsService
  ) { }

  ngOnInit(): void {
    this.landsService.getCountries().subscribe((lands: any[]) => {
      this.lands = lands;
    });
  }

  agregarPais() {
    let country = {
      nombre: 'Mexico',
      poblacion: 'Mil ocho mil'
    };

    this.landsService.postCountry(country);
  }
}
