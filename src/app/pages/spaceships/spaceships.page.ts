import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.page.html',
  styleUrls: ['./spaceships.page.scss'],
})
export class SpaceshipsPage implements OnInit {

  starships: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.starships = this.http.get('https://swapi.dev/api/starships');
  }

  openDetails(starship) {
    let split = starship.url.split('/');
    let starshipId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/spaceships/${starshipId}`);
    }

}
