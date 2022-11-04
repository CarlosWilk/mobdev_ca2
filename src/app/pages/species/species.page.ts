import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  species: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.species = this.http.get('https://swapi.dev/api/species');
  }

  openDetails(species) {
    let split = species.url.split('/');
    let speciesId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/species/${speciesId}`);
    }


}
